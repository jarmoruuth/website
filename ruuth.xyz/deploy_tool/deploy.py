#!/usr/bin/env python3
"""Website/PixInsight repository deployment with explicit environments and components.

Requires: pip install paramiko
"""
import argparse
import datetime as dt
import fnmatch
import hashlib
import json
import os
from pathlib import Path, PurePosixPath
import re
import sys
import uuid
import tempfile
import xml.etree.ElementTree as ET

MANIFEST_NAME = 'manifest.json'


def digest(path, algorithm='sha256'):
    h = hashlib.new(algorithm)
    with open(path, 'rb') as f:
        for chunk in iter(lambda: f.read(1024 * 1024), b''):
            h.update(chunk)
    return h.hexdigest()


def read_json(path, default=None):
    if not Path(path).exists():
        return default
    with open(path, encoding='utf-8') as f:
        return json.load(f)


def write_json_atomic(path, obj):
    path = Path(path)
    path.parent.mkdir(parents=True, exist_ok=True)
    tmp = path.with_name(path.name + '.tmp')
    tmp.write_text(json.dumps(obj, indent=2, sort_keys=True) + '\n', encoding='utf-8')
    os.replace(tmp, path)


def relpath(value):
    p = PurePosixPath(value.replace('\\', '/'))
    if p.is_absolute() or not p.parts or any(part in ('..', '.') for part in p.parts):
        raise ValueError(f'Unsafe relative path: {value!r}')
    return p.as_posix()


def settings(config_path, env):
    c = read_json(config_path)
    if not isinstance(c, dict):
        raise ValueError(f'Cannot load configuration: {config_path}')
    if env not in c.get('environments', {}):
        raise ValueError(f'Unknown environment {env!r}')
    e = c['environments'][env]
    base = Path(config_path).resolve().parent
    root = Path(e['local_root']).expanduser()
    if not root.is_absolute():
        root = base / root
    return c, root.resolve(), e['remote_root'].rstrip('/')


def component_paths(config, root, selection):
    components = config['components']
    if selection == 'all':
        selected = list(components)
    elif selection in components:
        selected = [selection]
    else:
        raise ValueError(f'Unknown component {selection!r}; choices: all, {", ".join(components)}')
    found = {}
    for name in selected:
        spec = components[name]
        count = 0
        for pattern in spec['files']:
            pattern = relpath(pattern)
            for f in root.glob(pattern):
                if f.is_file():
                    rel = f.relative_to(root).as_posix()
                    # Never deploy local state, even when matching broad patterns.
                    if '/.deploy-' in '/' + rel or rel.startswith('.deploy-'):
                        continue
                    found[rel] = f
                    count += 1
        if not count:
            print(f'WARNING: component {name} matched no files', file=sys.stderr)
    return found


def xri_root(path):
    raw = Path(path).read_bytes()
    # PixInsight may append a signature block after </xri>.
    match = re.search(rb'</xri\s*>', raw, flags=re.IGNORECASE)
    if not match:
        raise ValueError(f'No closing </xri> found: {path}')
    try:
        return ET.fromstring(raw[:match.end()])
    except ET.ParseError as e:
        raise ValueError(f'Invalid XRI XML {path}: {e}') from e


def get_xri_packages(path):
    root = xri_root(path)
    packages = {}
    for platform in root.findall('platform'):
        for package in platform.findall('package'):
            name = package.get('fileName')
            if not name:
                continue
            if name in packages:
                raise ValueError(f'Duplicate package filename in XRI: {name}')
            packages[name] = package
    return packages


def check_release(root, repo):
    xri_path = root / relpath(repo['xri'])
    if not xri_path.exists():
        raise ValueError(f'Missing release catalog: {xri_path}')
    entries = get_xri_packages(xri_path)
    for variant, package in repo['packages'].items():
        zip_path = root / relpath(package['zip'])
        if not zip_path.is_file():
            raise ValueError(f'Missing signed ZIP for {variant}: {zip_path}')
        filename = zip_path.name
        if filename not in entries:
            raise ValueError(f'{filename} absent from {xri_path}')
        expected = entries[filename].get('sha1', '').lower()
        actual = digest(zip_path, 'sha1')
        if expected != actual:
            raise ValueError(f'XRI SHA-1 mismatch for {filename}: expected {expected}, actual {actual}. Run prepare then sign again.')
        if not entries[filename].get('releaseDate'):
            raise ValueError(f'Missing releaseDate for {filename}')
    print(f'XRI package checksums verified ({len(repo["packages"])} packages).')
    print('NOTE: PixInsight cryptographic signature is not verified by this tool.')


def extract_version(path):
    data = path.read_text(encoding='utf-8')
    def assignment(name):
        match = re.search(r'\b' + re.escape(name) + r'\s*=\s*["\']([^"\']*)["\']', data)
        if not match:
            raise ValueError(f'Cannot find quoted {name} assignment in {path}')
        return match.group(1)
    version = assignment('autointegrate_version')
    info = assignment('autointegrate_info')
    m = re.search(r'\bv[^\s"\']+', version)
    return (m.group(0) if m else version), info


def prepare(config, root, env, dry_run):
    repo = config['pixinsight']
    template = root / relpath(repo['template'])
    target = root / relpath(repo['xri'])
    state_path = root / '.deploy-release-state.json'
    previous = read_json(state_path, {'packages': {}})
    stored = previous.get('packages', {})
    out = template.read_text(encoding='utf-8')
    newstate = {}
    for name, spec in repo['packages'].items():
        zipfile = root / relpath(spec['zip'])
        source = root / relpath(spec['version_source'])
        if not zipfile.is_file() or not source.is_file():
            raise ValueError(f'Package {name}: ZIP or version source not found')
        sha256 = digest(zipfile)
        sha1 = digest(zipfile, 'sha1')
        version, info = extract_version(source)
        old = stored.get(name, {})
        release_date = old.get('releaseDate') if old.get('sha256') == sha256 and old.get('version') == version and old.get('info') == info else None
        if not release_date:
            release_date = dt.datetime.now(dt.timezone.utc).strftime('%Y%m%d%H%M%S')
        values = {'SHA1': sha1, 'RELEASE DATE': release_date, 'VERSION': version, 'INFO': info}
        token = spec['placeholder']
        for field, value in values.items():
            marker = f'XXX {field} {token} XXX'
            if marker not in out:
                raise ValueError(f'Missing template placeholder {marker}')
            # XML-escape version/info strings. Text fields use same replacement logic.
            if field in ('VERSION', 'INFO'):
                from xml.sax.saxutils import escape
                value = escape(value)
            out = out.replace(marker, value)
        newstate[name] = {'sha256': sha256, 'releaseDate': release_date, 'version': version, 'info': info}
        print(f'  {name}: {version} / {release_date} / SHA1 {sha1[:12]}...')
    if re.search(r'XXX [A-Z ]+ XXX', out):
        raise ValueError('Unresolved XXX placeholders remain in template')
    ET.fromstring(out)  # Validate before writing.
    changed = not target.exists() or target.read_text(encoding='utf-8') != out
    print(f'{"WOULD WRITE" if dry_run else "WRITE" if changed else "UNCHANGED"}: {target}')
    if dry_run:
        return
    if changed:
        # Intentional: prepare replaces the previously signed catalog. Sign again in PixInsight.
        target.write_text(out, encoding='utf-8')
    write_json_atomic(state_path, {'packages': newstate})
    print('Prepare complete. Sign updates.xri in PixInsight before publishing.')


def connect(config):
    try:
        import paramiko
    except ImportError as ex:
        raise RuntimeError('Paramiko not installed. Run: python -m pip install paramiko') from ex
    server = config['server']
    kwargs = dict(hostname=server['host'], username=server['user'], port=server.get('port', 22), timeout=20, auth_timeout=20, look_for_keys=True, allow_agent=True)
    if server.get('ssh_key'):
        kwargs['key_filename'] = str(Path(server['ssh_key']).expanduser())
    client = paramiko.SSHClient()
    client.load_system_host_keys()
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
    parts = PurePosixPath(target).parts
    current = ''
    for part in parts:
        if part == '/':
            current = '/'
            continue
        current = (current.rstrip('/') + '/' + part) if current else part
        if not remote_exists(sftp, current):
            sftp.mkdir(current)


def remote_file(root, rel):
    return root + '/' + relpath(rel)


def apply_transforms(config, root, selected, staging_root):
    """Render configured text assets without modifying their source files."""
    for rule in config.get('transforms', []):
        original = relpath(rule['source'])
        if original not in selected:
            continue
        content = selected[original].read_text(encoding='utf-8')
        for replacement in rule.get('replacements', []):
            token = replacement['find']
            if token not in content:
                continue
            if 'file' in replacement:
                value = (root / relpath(replacement['file'])).read_text(encoding='utf-8').strip()
            elif 'env' in replacement:
                value = os.environ.get(replacement['env'])
                if not value:
                    raise ValueError(f'Missing environment variable {replacement["env"]} needed for {original}')
            else:
                raise ValueError(f'Transform for {original} must specify file or env')
            content = content.replace(token, value)
        for target in rule.get('destinations', [original]):
            dest = relpath(target)
            path = staging_root / dest
            path.parent.mkdir(parents=True, exist_ok=True)
            path.write_text(content, encoding='utf-8')
            selected[dest] = path
    return selected


def deploy(args, config, root, remote_root):
    chosen = component_paths(config, root, args.component)
    if not chosen:
        raise ValueError('No matching files')
    staging = tempfile.TemporaryDirectory(prefix='website-deploy-')
    try:
        chosen = apply_transforms(config, root, chosen, Path(staging.name))
        return deploy_prepared(args, config, root, remote_root, chosen)
    finally:
        staging.cleanup()


def deploy_prepared(args, config, root, remote_root, chosen):
    repo = config.get('pixinsight')
    xri_rel = relpath(repo['xri']) if repo else None
    selected_zips = set()
    all_zips = set()
    if repo:
        all_zips = {relpath(p['zip']) for p in repo['packages'].values()}
        selected_zips = set(chosen) & all_zips
        if selected_zips:
            # XRI describes the shared package catalog and always follows any ZIP publication.
            chosen[xri_rel] = root / xri_rel
        if xri_rel in chosen or selected_zips:
            check_release(root, repo)
    remote_state_path = config['environments'][args.env].get('manifest_path', f'{remote_root}/.deploy-manifest.json')
    client = connect(config)
    try:
        sftp = client.open_sftp()
        try:
            try:
                with sftp.open(remote_state_path, 'rb') as f:
                    remote_state = json.loads(f.read().decode('utf-8'))
            except FileNotFoundError:
                remote_state = {'files': {}}
            manifest = dict(remote_state.get('files', {}))
            local_hashes = {rel: digest(path) for rel, path in chosen.items()}
            changes = {rel: path for rel, path in chosen.items() if manifest.get(rel) != local_hashes[rel]}
            for rel in sorted(chosen):
                label = 'UPLOAD' if rel in changes else 'SAME  '
                print(f'{label}  {rel}')
            print(f'{len(changes)} file(s) to upload, {len(chosen) - len(changes)} unchanged.')
            # A shared XRI must never announce a different package that is absent remotely.
            if repo and xri_rel in changes:
                for zip_rel in all_zips:
                    if zip_rel not in changes and manifest.get(zip_rel) != digest(root / zip_rel):
                        raise ValueError(f'Cannot publish XRI: {zip_rel} differs from deployed state. Include corresponding component or deploy entire autointegrate.')
            if args.dry_run or not changes:
                return
            ordered = sorted(changes, key=lambda f: (f == xri_rel, f))
            # Stage all files first so transfer failures do not publish incomplete files.
            staged = []
            for rel in ordered:
                final = remote_file(remote_root, rel)
                remote_mkdirs(sftp, str(PurePosixPath(final).parent))
                tmp = final + '.deploy-' + uuid.uuid4().hex + '.tmp'
                print(f'TRANSFER {rel}')
                sftp.put(str(changes[rel]), tmp, confirm=True)
                # Confirm uploaded bytes, not only file length.
                with sftp.open(tmp, 'rb') as stream:
                    h = hashlib.sha256()
                    while True:
                        block = stream.read(1024 * 1024)
                        if not block:
                            break
                        h.update(block)
                if h.hexdigest() != local_hashes[rel]:
                    raise ValueError(f'Uploaded file hash mismatch: {rel}')
                staged.append((rel, tmp, final))
            for rel, tmp, final in staged:
                print(f'PUBLISH {rel}')
                sftp.posix_rename(tmp, final)
                manifest[rel] = local_hashes[rel]
            # Manifest is only published after the files are safely renamed.
            remote_mkdirs(sftp, str(PurePosixPath(remote_state_path).parent))
            temporary_manifest = remote_state_path + '.deploy-' + uuid.uuid4().hex + '.tmp'
            with sftp.open(temporary_manifest, 'wb') as f:
                f.write((json.dumps({'files': manifest}, indent=2, sort_keys=True) + '\n').encode('utf-8'))
            sftp.posix_rename(temporary_manifest, remote_state_path)
            print('Deployment completed successfully.')
        finally:
            sftp.close()
    finally:
        client.close()



def remote_sha256(sftp, path):
    """Read the real remote bytes; return None only for a missing file."""
    try:
        stream = sftp.open(path, 'rb')
    except FileNotFoundError:
        return None
    h = hashlib.sha256()
    with stream:
        while True:
            block = stream.read(1024 * 1024)
            if not block:
                break
            h.update(block)
    return h.hexdigest()


def classify_initial_files(chosen, remote_hashes):
    """Return matching hashes only; never trust stale manifest values."""
    matches = {}
    for rel, path in sorted(chosen.items()):
        local_hash = digest(path)
        actual = remote_hashes.get(rel)
        state = 'MISSING' if actual is None else ('SAME' if actual == local_hash else 'DIFF')
        print(f'{state:<7} {rel}')
        if state == 'SAME':
            matches[rel] = local_hash
    print(f'{len(matches)} matching file(s); {len(chosen) - len(matches)} missing/different.')
    return matches


def init_manifest(args, config, root, remote_root):
    """Seed deployment state from existing identical remote files, without uploading."""
    chosen = component_paths(config, root, args.component)
    if not chosen:
        raise ValueError('No matching files')
    with tempfile.TemporaryDirectory(prefix='website-deploy-') as staging:
        chosen = apply_transforms(config, root, chosen, Path(staging))
        state_path = config['environments'][args.env].get('manifest_path', f'{remote_root}/.deploy-manifest.json')
        client = connect(config)
        try:
            sftp = client.open_sftp()
            try:
                try:
                    with sftp.open(state_path, 'rb') as f:
                        state = json.loads(f.read().decode('utf-8'))
                except FileNotFoundError:
                    state = {'files': {}}
                hashes = {rel: remote_sha256(sftp, remote_file(remote_root, rel)) for rel in chosen}
                matches = classify_initial_files(chosen, hashes)
                existing = dict(state.get('files', {}))
                # For scanned files, remove any stale entry that doesn't match reality.
                # Leave entries outside the selected component untouched.
                for rel in chosen:
                    existing.pop(rel, None)
                existing.update(matches)
                if args.dry_run:
                    print('DRY RUN: no manifest changes and no uploads.')
                    return
                remote_mkdirs(sftp, str(PurePosixPath(state_path).parent))
                tmp = state_path + '.deploy-' + uuid.uuid4().hex + '.tmp'
                try:
                    with sftp.open(tmp, 'wb') as f:
                        f.write((json.dumps({'files': existing}, indent=2, sort_keys=True) + '\n').encode('utf-8'))
                    sftp.posix_rename(tmp, state_path)
                finally:
                    if remote_exists(sftp, tmp):
                        sftp.remove(tmp)
                print(f'Initialized manifest: {state_path} ({len(matches)} matching selected file(s)).')
                print('No website files were uploaded or changed.')
            finally:
                sftp.close()
        finally:
            client.close()

def verify(args, config, root, remote_root):
    selected = component_paths(config, root, args.component)
    client = connect(config)
    failures = 0
    try:
        sftp = client.open_sftp()
        try:
            for rel, local in sorted(selected.items()):
                remote = remote_file(remote_root, rel)
                try:
                    with sftp.open(remote, 'rb') as f:
                        h = hashlib.sha256()
                        while True:
                            data = f.read(1024 * 1024)
                            if not data:
                                break
                            h.update(data)
                    ok = h.hexdigest() == digest(local)
                    print(('OK      ' if ok else 'DIFF    ') + rel)
                except FileNotFoundError:
                    ok = False
                    print('MISSING ' + rel)
                failures += not ok
        finally:
            sftp.close()
    finally:
        client.close()
    if failures:
        raise ValueError(f'{failures} remote files missing or different')
    print('All selected remote files match local content.')


def main(argv=None):
    p = argparse.ArgumentParser(description='Deploy website and PixInsight repository files over SSH/SFTP')
    p.add_argument('command', choices=['prepare', 'publish', 'status', 'verify', 'init'])
    p.add_argument('--config', default=None, help='Path to deployment configuration JSON')
    p.add_argument('--env', required=True, choices=['product', 'test'])
    p.add_argument('--component', required=True, help='Component from config, or all')
    p.add_argument('--dry-run', action='store_true', help='Preview only; no file changes')
    args = p.parse_args(argv)
    try:
        config, root, remote_root = settings(args.config, args.env)
        if not root.is_dir():
            raise ValueError(f'Local directory not found: {root}')
        print(f'Environment: {args.env}\nLocal: {root}\nRemote: {remote_root}\nComponent: {args.component}')
        if args.command == 'prepare':
            if args.component != 'autointegrate':
                raise ValueError('prepare currently requires --component autointegrate (shared XRI)')
            prepare(config, root, args.env, args.dry_run)
        elif args.command in ('publish', 'status'):
            args.dry_run = args.dry_run or args.command == 'status'
            deploy(args, config, root, remote_root)
        elif args.command == 'init':
            init_manifest(args, config, root, remote_root)
        else:
            verify(args, config, root, remote_root)
        return 0
    except (ValueError, RuntimeError, OSError, KeyError) as e:
        print(f'ERROR: {e}', file=sys.stderr)
        return 1


if __name__ == '__main__':
    sys.exit(main())
