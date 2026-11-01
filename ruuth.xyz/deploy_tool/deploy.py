#!/usr/bin/env python3
"""Website/PixInsight repository deployment with explicit sites, environments and components.

One JSON file per site (deploy.json by default, others e.g. am.json). Shared server settings can live in a
separate file referenced with "include". Requires: pip install paramiko
"""
import argparse
import datetime as dt
import fnmatch
import hashlib
import json
import os
from pathlib import Path, PurePosixPath
import re
import shlex
import sys
import tempfile
import uuid
import xml.etree.ElementTree as ET
from xml.sax.saxutils import escape

SCRIPT_DIR = Path(__file__).resolve().parent
DEFAULT_CONFIG = 'deploy.json'
DEFAULT_STATE_DIR = 'deploy-state'  # Relative SFTP paths resolve to the SSH user's home directory.
HASH_BATCH = 200
XRI_END = re.compile(rb'</xri\s*>', re.IGNORECASE)
XRI_SIGNATURE = re.compile(rb'<Signature\b')


# ---------------------------------------------------------------------------
# Generic helpers
# ---------------------------------------------------------------------------

def digest(path, algorithm='sha256'):
    h = hashlib.new(algorithm)
    with open(path, 'rb') as f:
        for chunk in iter(lambda: f.read(1024 * 1024), b''):
            h.update(chunk)
    return h.hexdigest()


class HashCache:
    """Local SHA-256 cache in <local_root>/.deploy-hash-cache.json.

    A cached hash is reused while the file's size and modification time are unchanged, so
    only new or edited files are read. Files outside local_root (rendered transforms) are
    always hashed. Use --no-hash-cache to rehash everything.
    """
    FILE = '.deploy-hash-cache.json'

    def __init__(self, root, enabled=True):
        self.root = Path(root)
        self.path = self.root / self.FILE
        self.enabled = enabled
        self.dirty = False
        self.hits = self.misses = 0
        try:
            data = read_json(self.path, {}) if enabled else {}
            self.entries = data.get('files', {}) if isinstance(data, dict) else {}
        except (OSError, ValueError):
            self.entries = {}

    def _key(self, path):
        try:
            return Path(path).resolve().relative_to(self.root.resolve()).as_posix()
        except ValueError:
            return None

    def get(self, path):
        key = self._key(path)
        if key is None:
            return digest(path)
        st = os.stat(path)
        entry = self.entries.get(key)
        if self.enabled and entry and entry.get('size') == st.st_size and entry.get('mtime_ns') == st.st_mtime_ns:
            self.hits += 1
            return entry['sha256']
        self.misses += 1
        value = digest(path)
        self.entries[key] = {'size': st.st_size, 'mtime_ns': st.st_mtime_ns, 'sha256': value}
        self.dirty = True
        return value

    def save(self):
        if self.hits or self.misses:
            print(f'Local hashes: {self.misses} computed, {self.hits} from cache.')
        if not self.dirty:
            return
        # Drop entries for files that no longer exist.
        self.entries = {k: v for k, v in self.entries.items() if (self.root / k).is_file()}
        tmp = self.path.with_name(self.path.name + '.tmp')
        try:
            tmp.write_text(json.dumps({'files': self.entries}, indent=1, sort_keys=True) + '\n', encoding='utf-8')
            os.replace(tmp, self.path)
            self.dirty = False
        except OSError as e:
            print(f'WARNING: cannot save local hash cache {self.path}: {e}', file=sys.stderr)


def read_json(path, default=None):
    path = Path(path)
    if not path.exists():
        return default
    with open(path, encoding='utf-8') as f:
        return json.load(f)


def relpath(value):
    p = PurePosixPath(value.replace('\\', '/'))
    if p.is_absolute() or not p.parts or any(part in ('..', '.') for part in p.parts):
        raise ValueError(f'Unsafe relative path: {value!r}')
    return p.as_posix()


def has_wildcard(pattern):
    return any(c in pattern for c in '*?[')


def is_local_state(rel):
    return any(part.startswith('.deploy-') for part in rel.split('/'))


# ---------------------------------------------------------------------------
# Configuration
# ---------------------------------------------------------------------------

def resolve_config_path(value):
    """--config accepts a path, or a bare file name (am or am.json) found in the current directory
    or next to deploy.py."""
    if value is None:
        return SCRIPT_DIR / DEFAULT_CONFIG
    p = Path(value).expanduser()
    if p.exists():
        return p
    if len(p.parts) == 1:  # Bare name: ai or ai.json next to deploy.py.
        candidate = SCRIPT_DIR / (value if p.suffix else value + '.json')
        if candidate.exists():
            return candidate
    return p


def load_config(value):
    path = resolve_config_path(value)
    config = read_json(path)
    if not isinstance(config, dict):
        raise ValueError(f'Cannot load configuration: {path}' + ('' if value else ' (use --config <site>)'))
    include = config.get('include')
    if include:
        inc_path = Path(include).expanduser()
        if not inc_path.is_absolute():
            inc_path = path.resolve().parent / inc_path
        base = read_json(inc_path)
        if not isinstance(base, dict):
            raise ValueError(f'Cannot load included configuration: {inc_path}')
        merged = dict(base)
        merged.update(config)
        config = merged
    config['_dir'] = path.resolve().parent
    config.setdefault('name', path.stem)
    return config


class Site:
    """One site configuration bound to one environment."""

    def __init__(self, config, env_name, hash_cache=True):
        envs = config.get('environments', {})
        if env_name not in envs:
            raise ValueError(f'Unknown environment {env_name!r}; choices: {", ".join(envs) or "(none)"}')
        self.config = config
        self.name = config['name']
        self.env_name = env_name
        self.env = envs[env_name]
        root = Path(self.env['local_root']).expanduser()
        if not root.is_absolute():
            root = config['_dir'] / root
        self.root = root.resolve()
        self.remote_root = self.env['remote_root'].rstrip('/') or '/'
        if not self.remote_root.startswith('/'):
            raise ValueError(f'remote_root must be absolute: {self.remote_root}')
        self.hashes = HashCache(self.root, enabled=hash_cache)
        self.tag = f'[{env_name}]'

    def target(self, server):
        return f'{self.env_name} ({server["host"]}:{self.remote_root})'

    def local_hashes(self, chosen):
        hashes = {rel: self.hashes.get(path) for rel, path in chosen.items()}
        self.hashes.save()
        return hashes

    @property
    def repo(self):
        return self.config.get('pixinsight')

    def servers(self, only=None):
        servers = self.config.get('servers')
        if servers is None and 'server' in self.config:
            servers = {'default': self.config['server']}
        if not servers:
            raise ValueError('No "servers" configured')
        names = self.env.get('servers', list(servers))
        for n in names:
            if n not in servers:
                raise ValueError(f'Environment {self.env_name} refers to unknown server {n!r}')
        if only:
            if only not in names:
                raise ValueError(f'Server {only!r} not used by environment {self.env_name}; choices: {", ".join(names)}')
            names = [only]
        return [(n, servers[n]) for n in names]

    def manifest_path(self, server):
        if self.env.get('manifest_path'):
            return self.env['manifest_path']
        state_dir = server.get('state_dir', DEFAULT_STATE_DIR).rstrip('/')
        return f'{state_dir}/{self.name}-{self.env_name}.json'

    def remote_file(self, rel):
        return self.remote_root.rstrip('/') + '/' + relpath(rel)

    def local_file(self, value):
        """Resolve a local helper file (e.g. API key): absolute, ~, or relative to local_root."""
        p = Path(value).expanduser()
        return p if p.is_absolute() else self.root / relpath(value)


def select_components(config, env, selection):
    components = config.get('components', {})
    allowed = env.get('components', list(components))
    for a in allowed:
        if a not in components:
            raise ValueError(f'Environment component list refers to unknown component {a!r}')
    if selection == 'all':
        return list(allowed)
    if selection not in components:
        raise ValueError(f'Unknown component {selection!r}; choices: all, {", ".join(allowed)}')
    if selection not in allowed:
        raise ValueError(f'Component {selection!r} is not enabled for this environment; choices: all, {", ".join(allowed)}')
    return [selection]


def canonical_names(config):
    """Exact (case-sensitive) remote spellings for every literal file name in the config.

    Windows matches names case-insensitively, the Linux server does not. A local
    AutoIntegrate-v8.zip must still be published as autointegrate-v8.zip when that is
    the name the config and the XRI use.
    """
    names = {}

    def add(value):
        if value and not has_wildcard(value):
            r = relpath(value)
            names[r.lower()] = r

    for spec in config.get('components', {}).values():
        for pattern in spec.get('files', []):
            add(pattern)
    repo = config.get('pixinsight')
    if repo:
        add(repo.get('xri'))
        add(repo.get('template'))
        for p in repo.get('packages', {}).values():
            add(p.get('zip'))
    for rule in config.get('transforms', []):
        add(rule.get('source'))
        for d in rule.get('destinations', []):
            add(d)
    return names


def component_paths(config, root, selected):
    """Return {remote-relative name: local Path} for the selected component names."""
    components = config['components']
    canon = canonical_names(config)
    found = {}
    for name in selected:
        spec = components[name]
        excludes = [relpath(x).lower() for x in spec.get('exclude', [])]
        count = 0
        for pattern in spec['files']:
            pattern = relpath(pattern)
            if has_wildcard(pattern):
                matches = [(f.relative_to(root).as_posix(), f) for f in root.glob(pattern) if f.is_file()]
            else:
                f = root / pattern
                matches = [(pattern, f)] if f.is_file() else []
                if not matches:
                    print(f'WARNING: {name}: file not found: {pattern}', file=sys.stderr)
            for rel, f in matches:
                rel = canon.get(rel.lower(), rel)
                if is_local_state(rel) or any(fnmatch.fnmatchcase(rel.lower(), x) for x in excludes):
                    continue
                disk = f.resolve().name if f.exists() else f.name
                if disk != PurePosixPath(rel).name and disk.lower() == PurePosixPath(rel).name.lower():
                    print(f'NOTE: local {disk} is published as {PurePosixPath(rel).name}')
                found[rel] = f
                count += 1
        if not count:
            print(f'WARNING: component {name} matched no files', file=sys.stderr)
    return found


# ---------------------------------------------------------------------------
# PixInsight XRI
# ---------------------------------------------------------------------------

def split_xri(raw):
    """Return (xml body up to </xri>, trailing bytes). PixInsight appends <Signature> after </xri>."""
    m = XRI_END.search(raw)
    if not m:
        raise ValueError('No closing </xri> found')
    return raw[:m.end()], raw[m.end():]


def xri_root(path):
    body, _ = split_xri(Path(path).read_bytes())
    try:
        return ET.fromstring(body)
    except ET.ParseError as e:
        raise ValueError(f'Invalid XRI XML {path}: {e}') from e


def xri_is_signed(path):
    return bool(XRI_SIGNATURE.search(Path(path).read_bytes()))


def xri_normalized(element):
    """Structure-only form: PixInsight reformats whitespace and attribute layout when signing."""
    text = lambda s: ' '.join((s or '').split())
    return (element.tag, tuple(sorted(element.attrib.items())), text(element.text), text(element.tail),
            tuple(xri_normalized(c) for c in element))


def get_xri_packages(path):
    packages = {}
    for platform in xri_root(path).findall('platform'):
        for package in platform.findall('package'):
            name = package.get('fileName')
            if not name:
                continue
            if name in packages:
                raise ValueError(f'Duplicate package filename in XRI: {name}')
            packages[name] = package
    return packages


def check_release(root, repo, strict=True):
    """Check ZIP SHA-1s against the XRI and that the XRI is signed. strict=False only warns."""
    problems = []
    xri_path = root / relpath(repo['xri'])
    if not xri_path.exists():
        problems.append(f'Missing release catalog: {xri_path}')
    else:
        entries = get_xri_packages(xri_path)
        for variant, package in repo['packages'].items():
            zip_rel = relpath(package['zip'])
            zip_path = root / zip_rel
            filename = PurePosixPath(zip_rel).name
            if not zip_path.is_file():
                problems.append(f'Missing signed ZIP for {variant}: {zip_path}')
            elif filename not in entries:
                problems.append(f'{filename} absent from {xri_path} (names are case-sensitive on the server)')
            else:
                expected = entries[filename].get('sha1', '').lower()
                actual = digest(zip_path, 'sha1')
                if expected != actual:
                    problems.append(f'XRI SHA-1 mismatch for {filename}: XRI {expected}, ZIP {actual}. Run prepare and sign again.')
                if not entries[filename].get('releaseDate'):
                    problems.append(f'Missing releaseDate for {filename}')
        if not xri_is_signed(xri_path):
            problems.append(f'{xri_path} is not signed. Sign it in PixInsight before publishing.')
    for p in problems:
        if strict:
            raise ValueError(p)
        print(f'WARNING: {p}', file=sys.stderr)
    if not problems:
        print(f'XRI verified: signed, {len(repo["packages"])} package checksum(s) match.')
        print('NOTE: the PixInsight signature itself is not cryptographically verified by this tool.')
    return not problems


def extract_version(path, spec=None):
    spec = spec or {}
    data = Path(path).read_text(encoding='utf-8')

    def assignment(name):
        match = re.search(r'\b' + re.escape(name) + r'\s*=\s*["\']([^"\']*)["\']', data)
        if not match:
            raise ValueError(f'Cannot find quoted {name} assignment in {path}')
        return match.group(1)

    version = assignment(spec.get('version_var', 'autointegrate_version'))
    info_var = spec.get('info_var', 'autointegrate_info')
    info = assignment(info_var) if info_var else ''
    # Keep everything from the version number on: "AutoIntegrate v1.88.3 test1" -> "v1.88.3 test1".
    m = re.search(r'(?<!\w)v\d', version)
    return (version[m.start():].strip() if m else version), info


def render_xri(root, repo, existing_entries, now=None):
    """Fill the template. A package whose ZIP SHA-1 is unchanged keeps its existing releaseDate."""
    out = (root / relpath(repo['template'])).read_text(encoding='utf-8')
    now = now or dt.datetime.now().strftime('%Y%m%d%H%M%S')
    for name, spec in repo['packages'].items():
        zip_rel = relpath(spec['zip'])
        zip_path = root / zip_rel
        source = root / relpath(spec['version_source'])
        if not zip_path.is_file():
            raise ValueError(f'Package {name}: ZIP not found: {zip_path}')
        if not source.is_file():
            raise ValueError(f'Package {name}: version source not found: {source}')
        sha1 = digest(zip_path, 'sha1')
        version, info = extract_version(source, spec)
        old = existing_entries.get(PurePosixPath(zip_rel).name)
        reuse = old is not None and old.get('sha1', '').lower() == sha1 and old.get('releaseDate')
        release_date = old.get('releaseDate') if reuse else now
        token = spec['placeholder']
        values = {'SHA1': sha1, 'RELEASE DATE': release_date, 'VERSION': version, 'INFO': info}
        for field, value in values.items():
            marker = f'XXX {field} {token} XXX'
            if marker not in out:
                if field in ('SHA1', 'RELEASE DATE'):
                    raise ValueError(f'Missing template placeholder {marker}')
                continue
            out = out.replace(marker, escape(value, {'"': '&quot;'}))
        print(f'  {name}: {version} - {info} / releaseDate {release_date}{" (unchanged ZIP)" if reuse else " (new)"} / SHA1 {sha1[:12]}...')
    if re.search(r'XXX [A-Z0-9 ]+ XXX', out):
        raise ValueError('Unresolved XXX placeholders remain in template')
    try:
        ET.fromstring(out.encode('utf-8'))
    except ET.ParseError as e:
        raise ValueError(f'Rendered XRI is not valid XML: {e}') from e
    return out


def prepare(site, dry_run):
    repo = site.repo
    if not repo:
        raise ValueError(f'Configuration {site.name} has no "pixinsight" section')
    target = site.root / relpath(repo['xri'])
    existing, current = {}, None
    if target.exists():
        try:
            existing = get_xri_packages(target)
            current = xri_normalized(xri_root(target))
        except ValueError as e:
            print(f'WARNING: existing XRI unreadable, it will be regenerated: {e}', file=sys.stderr)
    out = render_xri(site.root, repo, existing)
    if current is not None and current == xri_normalized(ET.fromstring(out.encode('utf-8'))):
        signed = xri_is_signed(target)
        print(f'UNCHANGED: {target}' + ('' if signed else '  (NOT SIGNED yet: sign it in PixInsight)'))
        return False
    print(f'{"WOULD WRITE" if dry_run else "WRITE"}: {target}')
    if dry_run:
        return True
    tmp = target.with_name(target.name + '.deploy-tmp')
    tmp.write_bytes(out.encode('utf-8'))
    os.replace(tmp, target)
    print('Prepare complete. Sign updates.xri in PixInsight before publishing.')
    return True


# ---------------------------------------------------------------------------
# Transforms
# ---------------------------------------------------------------------------

def apply_transforms(site, selected, staging_root):
    """Render configured text assets into staging_root without modifying their sources."""
    for rule in site.config.get('transforms', []):
        original = relpath(rule['source'])
        if original not in selected:
            continue
        content = selected[original].read_text(encoding='utf-8')
        for replacement in rule.get('replacements', []):
            token = replacement['find']
            if token not in content:
                print(f'NOTE: {original}: token {token!r} not present')
                continue
            if 'file' in replacement:
                key_path = site.local_file(replacement['file'])
                if not key_path.is_file():
                    raise ValueError(f'Key file for {original} not found: {key_path}')
                value = key_path.read_text(encoding='utf-8').strip()
            elif 'env' in replacement:
                value = os.environ.get(replacement['env'])
                if not value:
                    raise ValueError(f'Missing environment variable {replacement["env"]} needed for {original}')
            else:
                raise ValueError(f'Transform for {original} must specify file or env')
            content = content.replace(token, value)
        for target in rule.get('destinations', [original]):
            dest = relpath(target)
            path = Path(staging_root) / dest
            path.parent.mkdir(parents=True, exist_ok=True)
            path.write_bytes(content.encode('utf-8'))
            selected[dest] = path
    return selected


def collect(site, component, staging_root):
    chosen = component_paths(site.config, site.root, select_components(site.config, site.env, component))
    if not chosen:
        raise ValueError('No matching files')
    return apply_transforms(site, chosen, staging_root)


# ---------------------------------------------------------------------------
# SSH / SFTP
# ---------------------------------------------------------------------------

def connect(server):
    try:
        import paramiko
    except ImportError as ex:
        raise RuntimeError('Paramiko not installed. Run: python -m pip install -r requirements.txt') from ex
    kwargs = dict(hostname=server['host'], username=server['user'], port=server.get('port', 22),
                  timeout=20, auth_timeout=20, look_for_keys=True, allow_agent=True)
    if server.get('ssh_key'):
        key = Path(server['ssh_key']).expanduser()
        if not key.is_file():
            raise ValueError(f'SSH key not found: {key}')
        kwargs['key_filename'] = str(key)
    client = paramiko.SSHClient()
    client.load_system_host_keys()
    if server.get('known_hosts'):
        client.load_host_keys(str(Path(server['known_hosts']).expanduser()))
    client.set_missing_host_key_policy(paramiko.RejectPolicy())
    client.connect(**kwargs)
    return client


def remote_exists(sftp, path):
    try:
        sftp.stat(path)
        return True
    except FileNotFoundError:
        return False


def remote_mkdirs(sftp, target):
    if target in ('', '.'):
        return
    current = ''
    for part in PurePosixPath(target).parts:
        if part == '/':
            current = '/'
            continue
        current = (current.rstrip('/') + '/' + part) if current else part
        if not remote_exists(sftp, current):
            sftp.mkdir(current)


def remote_sha256(sftp, path):
    """Read the real remote bytes over SFTP; None only for a missing file."""
    try:
        stream = sftp.open(path, 'rb')
    except FileNotFoundError:
        return None
    h = hashlib.sha256()
    with stream:
        stream.prefetch()
        for block in iter(lambda: stream.read(1024 * 1024), b''):
            h.update(block)
    return h.hexdigest()


def remote_hashes(client, sftp, paths):
    """{absolute remote path: sha256 or None}. Hashes on the server with sha256sum; SFTP fallback."""
    paths = list(paths)
    result = {}
    simple = [p for p in paths if '\\' not in p and '\n' not in p]
    try:
        for i in range(0, len(simple), HASH_BATCH):
            batch = simple[i:i + HASH_BATCH]
            _, stdout, stderr = client.exec_command('sha256sum -- ' + ' '.join(shlex.quote(p) for p in batch), timeout=600)
            out = stdout.read().decode('utf-8', 'replace')
            stderr.read()
            status = stdout.channel.recv_exit_status()
            if status not in (0, 1):
                raise RuntimeError(f'sha256sum exit status {status}')
            got = {}
            for line in out.splitlines():
                h, sep, name = line.partition('  ')
                if sep and len(h) == 64:
                    got[name] = h
            for p in batch:
                result[p] = got.get(p)  # Missing or unreadable -> None.
    except Exception as e:  # Exec not permitted, no coreutils, ...
        print(f'NOTE: server-side sha256sum unavailable ({e}); reading files over SFTP instead.')
        result = {}
    for p in paths:
        if p not in result:
            result[p] = remote_sha256(sftp, p)
    return result


def load_manifest(sftp, path):
    try:
        with sftp.open(path, 'rb') as f:
            data = json.loads(f.read().decode('utf-8'))
    except FileNotFoundError:
        return {}, False
    return dict(data.get('files', {})), True


def write_manifest(sftp, path, files, site):
    remote_mkdirs(sftp, str(PurePosixPath(path).parent))
    tmp = path + '.deploy-' + uuid.uuid4().hex + '.tmp'
    payload = {'site': site.name, 'environment': site.env_name, 'remote_root': site.remote_root,
               'updated': dt.datetime.now(dt.timezone.utc).isoformat(timespec='seconds'), 'files': files}
    try:
        with sftp.open(tmp, 'wb') as f:
            f.write((json.dumps(payload, indent=2, sort_keys=True) + '\n').encode('utf-8'))
        sftp.posix_rename(tmp, path)
    finally:
        if remote_exists(sftp, tmp):
            sftp.remove(tmp)


def for_each_server(site, args, action):
    failures = 0
    for name, server in site.servers(args.server):
        print(f'\n=== Server {name}: {server["user"]}@{server["host"]}  manifest {site.manifest_path(server)}')
        client = connect(server)
        try:
            sftp = client.open_sftp()
            try:
                failures += action(client, sftp, server) or 0
            finally:
                sftp.close()
        finally:
            client.close()
    return failures


# ---------------------------------------------------------------------------
# Commands
# ---------------------------------------------------------------------------

def deploy(args, site):
    with tempfile.TemporaryDirectory(prefix='website-deploy-') as staging:
        chosen = collect(site, args.component, staging)
        repo = site.repo
        xri_rel = relpath(repo['xri']) if repo else None
        all_zips = {relpath(p['zip']) for p in repo['packages'].values()} if repo else set()
        if repo and set(chosen) & all_zips:
            # The XRI describes the shared package catalog and always follows any ZIP publication.
            chosen[xri_rel] = site.root / xri_rel
        if repo and xri_rel in chosen:
            check_release(site.root, repo, strict=not args.dry_run)
        local_hashes = site.local_hashes(chosen)

        def publish(client, sftp, server):
            mpath = site.manifest_path(server)
            manifest, exists = load_manifest(sftp, mpath)
            if not exists:
                print(f'WARNING: no manifest on this server yet; every file counts as changed. '
                      f'Run "init" first to avoid re-uploading identical files.')
            changes = [rel for rel in chosen if args.force or manifest.get(rel) != local_hashes[rel]]
            for rel in sorted(chosen):
                if rel in changes:
                    print(f'UPLOAD  {site.tag} {rel}')
                elif args.verbose:
                    print(f'SAME    {site.tag} {rel}')
            print(f'{len(changes)} file(s) to upload to {site.target(server)}, {len(chosen) - len(changes)} unchanged.')
            # A shared XRI must never announce a package version that is not on the server.
            if repo and xri_rel in changes:
                for zip_rel in sorted(all_zips):
                    if zip_rel not in changes and manifest.get(zip_rel) != site.hashes.get(site.root / zip_rel):
                        raise ValueError(f'Cannot publish XRI: {zip_rel} differs from deployed state. '
                                         f'Publish the whole autointegrate component.')
            if args.dry_run or not changes:
                return 0
            ordered = sorted(changes, key=lambda f: (f == xri_rel, f))  # XRI last.
            pending = []  # (rel, tmp, final) uploaded but not yet published
            published = False
            try:
                for rel in ordered:
                    final = site.remote_file(rel)
                    remote_mkdirs(sftp, str(PurePosixPath(final).parent))
                    tmp = final + '.deploy-' + uuid.uuid4().hex + '.tmp'
                    if args.verbose:
                        print(f'TRANSFER {site.tag} {rel}')
                    pending.append((rel, tmp, final))
                    sftp.put(str(chosen[rel]), tmp, confirm=True)
                hashes = remote_hashes(client, sftp, [tmp for _, tmp, _ in pending])
                for rel, tmp, _ in pending:
                    if hashes.get(tmp) != local_hashes[rel]:
                        raise ValueError(f'Uploaded file hash mismatch: {rel}')
                print(f'Transferred and verified {len(pending)} file(s); publishing.')
                while pending:
                    rel, tmp, final = pending[0]
                    if args.verbose:
                        print(f'PUBLISH  {site.tag} {rel}')
                    sftp.posix_rename(tmp, final)
                    pending.pop(0)
                    manifest[rel] = local_hashes[rel]
                    published = True
            finally:
                for _, tmp, _ in pending:
                    try:
                        sftp.remove(tmp)
                    except OSError:
                        pass
                if published:
                    # Record whatever was published, even after a partial failure.
                    write_manifest(sftp, mpath, manifest, site)
            print(f'Deployment to {site.target(server)} completed successfully.')
            return 0

        for_each_server(site, args, publish)


def classify_initial_files(chosen, remote_hashes_by_rel, local_hashes=None, verbose=False, tag=''):
    """Return matching hashes only; never trust stale manifest values."""
    matches = {}
    for rel, path in sorted(chosen.items()):
        local_hash = local_hashes[rel] if local_hashes else digest(path)
        actual = remote_hashes_by_rel.get(rel)
        state = 'MISSING' if actual is None else ('SAME' if actual == local_hash else 'DIFF')
        if state != 'SAME' or verbose:
            print(f'{state:<7} {tag + " " if tag else ""}{rel}')
        if state == 'SAME':
            matches[rel] = local_hash
    print(f'{len(matches)} matching file(s); {len(chosen) - len(matches)} missing/different.')
    return matches


def init_manifest(args, site):
    """Seed deployment state from existing identical remote files, without uploading."""
    with tempfile.TemporaryDirectory(prefix='website-deploy-') as staging:
        chosen = collect(site, args.component, staging)
        local_hashes = site.local_hashes(chosen)

        def init(client, sftp, server):
            mpath = site.manifest_path(server)
            existing, _ = load_manifest(sftp, mpath)
            by_path = remote_hashes(client, sftp, [site.remote_file(rel) for rel in chosen])
            matches = classify_initial_files(chosen, {rel: by_path[site.remote_file(rel)] for rel in chosen},
                                             local_hashes, args.verbose, site.tag)
            for rel in chosen:  # Drop stale entries for scanned files; keep other components.
                existing.pop(rel, None)
            existing.update(matches)
            if args.dry_run:
                print('DRY RUN: no manifest changes and no uploads.')
                return 0
            write_manifest(sftp, mpath, existing, site)
            print(f'Initialized manifest {mpath} for {site.target(server)} ({len(matches)} matching file(s)). '
                  f'No website files were changed.')
            return 0

        for_each_server(site, args, init)


def verify(args, site):
    with tempfile.TemporaryDirectory(prefix='website-deploy-') as staging:
        chosen = collect(site, args.component, staging)
        local_hashes = site.local_hashes(chosen)

        def check(client, sftp, server):
            by_path = remote_hashes(client, sftp, [site.remote_file(rel) for rel in chosen])
            failures = 0
            for rel in sorted(chosen):
                actual = by_path[site.remote_file(rel)]
                if actual is None:
                    print(f'MISSING {site.tag} {rel}')
                    failures += 1
                elif actual != local_hashes[rel]:
                    print(f'DIFF    {site.tag} {rel}')
                    failures += 1
                elif args.verbose:
                    print(f'OK      {site.tag} {rel}')
            print(f'{failures} of {len(chosen)} file(s) missing or different on {site.target(server)}.' if failures
                  else f'All {len(chosen)} selected files match on {site.target(server)}.')
            return failures

        failures = for_each_server(site, args, check)
    if failures:
        raise ValueError(f'{failures} remote file(s) missing or different')


def main(argv=None):
    p = argparse.ArgumentParser(description='Deploy website and PixInsight repository files over SSH/SFTP')
    p.add_argument('command', choices=['prepare', 'publish', 'status', 'verify', 'init'])
    p.add_argument('--config', default=None, help=f'Site config: path, or name next to deploy.py (am -> am.json). Default {DEFAULT_CONFIG}')
    p.add_argument('--env', required=True, help='Environment from the config, e.g. product, test, debug')
    p.add_argument('--component', default=None, help='Component from the config, or all (not needed for prepare)')
    p.add_argument('--server', default=None, help='Limit to one configured server')
    p.add_argument('--dry-run', action='store_true', help='Preview only; no file changes')
    p.add_argument('--force', action='store_true', help='publish: upload selected files even if the manifest says unchanged')
    p.add_argument('-v', '--verbose', action='store_true', help='List every file, including unchanged/matching ones')
    p.add_argument('--no-hash-cache', action='store_true', help='Rehash all local files instead of using the local hash cache')
    args = p.parse_args(argv)
    try:
        site = Site(load_config(args.config), args.env, hash_cache=not args.no_hash_cache)
        if not site.root.is_dir():
            raise ValueError(f'Local directory not found: {site.root}')
        if args.command != 'prepare' and not args.component:
            raise ValueError(f'--component is required for {args.command}')
        print(f'Site: {site.name}\nEnvironment: {site.env_name}\nLocal: {site.root}\nRemote: {site.remote_root}'
              + (f'\nComponent: {args.component}' if args.component else ''))
        if args.command == 'prepare':
            prepare(site, args.dry_run)
        elif args.command in ('publish', 'status'):
            args.dry_run = args.dry_run or args.command == 'status'
            deploy(args, site)
        elif args.command == 'init':
            init_manifest(args, site)
        else:
            verify(args, site)
        return 0
    except KeyboardInterrupt:
        print('Interrupted.', file=sys.stderr)
        return 130
    except (ValueError, RuntimeError, OSError, KeyError) as e:
        print(f'ERROR: {e}', file=sys.stderr)
        return 1
    except Exception as e:  # SSH/authentication errors from paramiko etc.
        print(f'ERROR: {type(e).__name__}: {e}', file=sys.stderr)
        return 1


if __name__ == '__main__':
    sys.exit(main())
