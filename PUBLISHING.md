# Publishing `react-select-country-list`

Releases use **npm Trusted Publishing (OIDC)** and **staged publishing**.
GitHub Actions can stage a release, but an npm maintainer must approve it
with two-factor authentication before it becomes publicly available.

## Configuration

The npm package must trust the following GitHub Actions publisher:

- GitHub owner: `Chun-Lin`
- Repository: `react-select-country-list`
- Workflow filename: `publish.yml`
- Environment: blank
- Allowed actions: leave **Allow npm publish** and **Allow npm dist-tag** unchecked.
  `npm stage publish` is permitted by default.

No `NPM_TOKEN` GitHub secret is needed.

## Release process (after the workflow PR is merged)

1. Merge the desired changes into `master` and make sure the CI workflow passes.
2. From a clean local checkout of `master`:

   ```sh
   git checkout master
   git pull --ff-only origin master
   npm version patch
   git push origin master --follow-tags
   ```

   `npm version patch` updates `package.json` and `package-lock.json`
   and creates a matching `vX.Y.Z` tag. Use `minor` or `major` instead
   when appropriate.

3. The `Stage npm release` workflow runs on the pushed version tag. It
   checks the version, runs tests, inspects the package and executes
   `npm stage publish` through OIDC. It does **not** publish directly.
4. Sign in at npmjs.com, open **Staged Packages**, review the package
   contents and approve the staged version with 2FA. You may instead use
   `npm stage list react-select-country-list` and `npm stage approve <stage-id>`
   from an authenticated CLI.
5. Check the published version with `npm view react-select-country-list version`.

Do not push release tags until you actually want to stage a new version.
The repository's existing `package-lock.json` is lockfile v1 and uses old
test dependencies; review dependency updates separately rather than mixing
them into a first publishing setup PR.
