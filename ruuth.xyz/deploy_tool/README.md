# Website and PixInsight repository deployment

One Python script deploys a local site copy to one or more Ubuntu servers over SSH/SFTP. Each site
(ai, am, main, map, ...) has its own JSON file. Changes are detected with SHA-256 hashes stored in a
manifest on each server, and every command supports `--dry-run`.

## Install

1. Python 3.10+ and `python -m pip install -r requirements.txt` (Paramiko).
2. SSH keys must be in OpenSSH format (Paramiko can't read PuTTY `.ppk`). Each server's host key
   must be in `%USERPROFILE%\.ssh\known_hosts`; unknown hosts are rejected.
3. The JSON files here are templates with placeholder values. Copy the tool to your working
   location and fill in real hosts, users, key paths and folders there. Don't commit real values.

## Configuration

- `servers.json` holds the shared servers. Site files pull it in with `"include": "servers.json"`.
- `deploy.json` is the default config, an example AutoIntegrate site with environments `product`,
  `test` and `debug`. Its `"name"` (`ai`) keeps its server manifests separate from other sites.
  - `debug` is limited to the `autointegrate`, `sm` and `v8` components by its `"components"` list.
- For other sites, copy it (e.g. `am.json`) and pick it with `--config am`, which means `am.json`
  next to `deploy.py`, or give a full path. Without `--config`, `deploy.json` is used.

Environment keys:

| Key | Meaning |
|---|---|
| `local_root` | Local folder of this environment |
| `remote_root` | Absolute folder on the server |
| `servers` | Optional subset of server names (default: all) |
| `components` | Optional allow-list of components for this environment |
| `manifest_path` | Optional; default `deploy-state/<site>-<env>.json` in the SSH user's home |

Components list `files`, which can be exact names or wildcards (`*.html` is top level only; use
`dir/**/*.html` for nested files), plus optional `exclude` patterns. **Name release files exactly.**
The server is case-sensitive, so exact names in the config are always published with the config's
spelling, whatever their case on the Windows disk. For example, the local `AutoIntegrate-v8.zip` is
published as `autointegrate-v8.zip`, the name the XRI uses.

Optional `transforms` render a file with secrets before upload without changing the local source,
e.g. map.html to map.html + map2.html with API keys from key files (absolute path or relative to
`local_root`) or environment variables. Never list key files in components. Keys embedded in HTML
are public anyway, so restrict them by domain.

## Commands

Every command takes `--config` to choose the site file. A bare file name (`--config ai.json`, or
just `--config ai`) is looked for in the current directory first, then next to `deploy.py`, so it
works from any folder. A path such as `--config ..\deploy_tool\ai.json` also works. If `--config`
is left out, `deploy.json` next to `deploy.py` is used. Folders inside the config (`local_root`)
are absolute, so the current directory doesn't matter for them.

```bat
python deploy.py status  --config ai.json --env test --component all
python deploy.py publish --config ai.json --env test --component website --dry-run
python deploy.py publish --config ai.json --env test --component website
python deploy.py publish --config ai.json --env product --component autointegrate --server server1
python deploy.py init    --config ai.json --env product --component all
python deploy.py verify  --config ai.json --env product --component website
python deploy.py prepare --config ai.json --env test
```

| Command | What it does |
|---|---|
| `publish` | Uploads files whose hash differs from the server manifest, on every server of the environment. `--force` uploads all selected files. |
| `status` | `publish --dry-run`. It still connects to read the manifests. |
| `init` | Hashes the existing remote files and records **exact matches only** in the manifest. Uploads nothing. Run it once per environment before the first publish. |
| `verify` | Ignores the manifest and compares the real remote file hashes with the local ones. |
| `prepare` | Generates the PixInsight `updates.xri` from its template (see below). |

By default the output lists only files that will be uploaded (`publish`/`status`) or that are
missing or different (`init`/`verify`), followed by counts. Add `--verbose` (`-v`) to list every
file, including unchanged ones and each transfer step.

Remote hashes are computed with `sha256sum` on the server in one SSH command, which is fast. If
that isn't allowed, the tool falls back to reading the files over SFTP.

Local hashes are cached in `.deploy-hash-cache.json` in each `local_root`. A file is hashed again
only when its size or modification time changes, which keeps large image sites fast. The cache is
updated even on `--dry-run`/`status`, is never deployed (`.deploy-` prefix), and can be deleted at
any time. Use `--no-hash-cache` to rehash everything, for example if a tool edits files while
keeping their timestamps.

## PixInsight release workflow

1. Build the signed ZIPs as before.
2. Run `prepare --env <env>`. It reads versions from `version_source`
   (`autointegrate_version`/`autointegrate_info`, configurable with `version_var`/`info_var`),
   computes the ZIP SHA-1s and renders the template.
   - A package whose ZIP SHA-1 equals the one in the current XRI keeps its `releaseDate`. Changed
     packages get the current local time (`yyyymmddhhmmss`, as before).
   - If the result is the same XML as the current XRI, the file is **left untouched**, so its
     PixInsight signature survives. The comparison ignores the whitespace and layout changes
     PixInsight makes when signing.
   - Otherwise the XRI is rewritten unsigned.
3. Sign `updates.xri` in PixInsight.
4. `publish --component autointegrate`. Publishing refuses an XRI that is unsigned or whose SHA-1s
   don't match the ZIPs (`--dry-run` only warns). ZIPs are always published before the XRI.

`--component v8` (or `sm`) also publishes the shared XRI, but only if the other package on the
server already matches its local ZIP. Otherwise use `--component autointegrate`. The PixInsight
signature itself is not cryptographically verified.

In the example, test and debug share one local folder, so they use the same signed XRI.

## Safety and limitations

- Each upload goes to a temporary name, is hash-checked on the server, then renamed into place. Any
  leftover temp files are removed on failure. The manifest is written last, and also after a
  partial failure, so it records whatever was published.
- Servers are deployed one after another. A deployment is not atomic across files or servers. Rerun
  to continue.
- Remote files are never deleted.
- Manifests describe the last deployment by this tool. Use `verify` to detect manual server edits,
  and `publish --force` or `init` to resync.
- Local files whose names start with `.deploy-` are never deployed.
