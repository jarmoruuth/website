# Windows-to-Ubuntu website deployment

One script for the main site and `/test`, with explicit components. SSH public-key authentication, remote SHA-256 deployment manifests, and `--dry-run`.

## Install

1. Install Python 3.10 or newer and run `python -m pip install -r requirements.txt`.
2. Edit `deploy.json` with **actual** local roots, SSH host/user/key, remote roots, and private `manifest_path` entries. The sample paths are placeholders.
3. Ensure SSH can log in noninteractively and **the server's host key is trusted in OpenSSH's known_hosts**. Paramiko rejects unknown host keys deliberately. If PuTTY's `.ppk` key is not accepted, use an OpenSSH private key or convert it via PuTTYgen.
4. The SSH user must be allowed to write the website folders and the private manifest directory; make sure `/home/<user>/deploy-state/` exists or can be created.
5. Put `deploy.py`, `deploy.json`, and the batch files together. The source XRI template and ZIPs remain in each environment's local directory, as configured.

## Commands

```bat
python deploy.py publish --env test --component website --dry-run
python deploy.py publish --env test --component website
python deploy.py publish --env test --component v8 --dry-run
python deploy.py publish --env test --component autointegrate
python deploy.py init --env product --component all --dry-run
python deploy.py init --env product --component all
python deploy.py init --env test --component all
python deploy.py status --env product --component all
python deploy.py verify --env product --component website
python deploy.py prepare --env test --component autointegrate --dry-run
python deploy.py prepare --env test --component autointegrate
```

`init` hashes the actual existing remote files and adds **only exact matches** to the deployment manifest; missing/different files stay pending. `--dry-run` previews and does not write the manifest or upload anything. Run it independently for product and test. If a manifest already exists, `init` preserves other components and updates only the selected files. Generated map pages are compared after applying the same transformations used during publication. Unlike `publish`, `init` never uploads website files.

`status` is the same read-only comparison as `publish --dry-run`. **It still connects to the server to retrieve its manifest**. `verify` bypasses the manifest and reads remote file contents, comparing their SHA-256 hashes directly to the local ones. No remote deletion is performed: removing a local file does not delete it from the server.

An example product batch wrapper accepts the component as `%1`, so `deploy-product.bat website --dry-run` previews production. `deploy-test.bat` is intentionally preview-only by default; edit it to remove `--dry-run` when you want it to publish.

## PixInsight signing workflow

1. Your existing batch process builds and signs each ZIP in PixInsight.
2. `python deploy.py prepare --env test --component autointegrate` reads versions and ZIP hashes, generates XRI from the local template, and stores release dates in `.deploy-release-state.json` in the local root. **It overwrites the existing XRI when content differs, so sign after prepare.** When a ZIP's SHA-256 hasn't changed, prepare preserves its releaseDate from that state file.
3. Use PixInsight to sign/update the prepared XRI. Python does not sign XRI or ZIP files.
4. Run `publish --env test --component autointegrate --dry-run`, then without `--dry-run`.
5. Repeat preparation/signing for product if its release source files or metadata differ. Publication never edits the signed XRI.

`publish` validates each configured ZIP's **SHA-1** against its entry in XRI, but **does not cryptographically verify PixInsight signatures**. You must sign with PixInsight and check that operation yourself. Avoid modifying an XRI after signing. The XRI is always published after ZIP packages in a deployment.

Partial deployment `--component v8` includes the shared XRI. It will reject an XRI update if a different package differs from the hashes recorded as published on that server. Use `--component autointegrate` to deploy both packages when necessary. The initial deployment should use `autointegrate` to establish both ZIPs. If you add a third package, add it to `pixinsight.packages`, add its placeholders and platform entry to the XRI template, and optionally define a new component.

## Operational details and limitations

- Uploaded files are first transferred to a temporary filename, SHA-256 verified, then published using an SFTP rename. The XRI is published **last**. The remote manifest is written last, after publication.
- Each environment's manifest is distinct and should be **outside** the public website document root. If the server has existing files but no manifest, run `init --env <env> --component all` before the first publish to avoid reuploading identical files.
- A deployment is **not a multi-file atomic transaction**. A disconnect during the rename phase may leave some files published before the manifest is updated. The next run retries safely. For an XRI release, ZIPs are always renamed before the XRI.
- `--dry-run` shows hash-based differences, but does not test upload permissions. Manifests represent the last completed tool deployment; manual server edits require `verify` to detect.
- `map.html` transformations are configured in `transforms`: when `map.html` is selected, read the Google key from local `map.key`, then replace `MML_API_KEY` using local mml.key file. **Do not deploy `map.key`**. Any keys embedded in HTML are public: restrict them to the required domains and APIs. If you change the template token, update the transform rule.
- Wildcards in the example website component match the *top level* only. Add `subdirectory/**/*.html` etc. explicitly for nested assets.
- The `prepare` command updates all package metadata in the shared XRI rather than doing partial preparation; it must be followed by PixInsight signing. Separate ZIP components work for publishing.
- The tool does not delete remote files, does not automate PixInsight signing, and does not identify a cryptographically valid PixInsight signature.
