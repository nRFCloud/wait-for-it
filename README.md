# `@nrfcloud/wait-for-it`

<https://github.com/nRFCloud/wait-for-it/pkgs/npm/wait-for-it>

## Installation

The package is published to the
[GitHub Packages registry](https://github.com/nRFCloud/wait-for-it/pkgs/npm/wait-for-it).
Releases are also published to
[npm](https://www.npmjs.com/package/@nrfcloud/wait-for-it).

To install it, point the `@nrfcloud` scope to it in your project's `.npmrc` and
[authenticate](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#authenticating-to-github-packages)
with a token that has the `read:packages` scope:

```
@nrfcloud:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

```bash
npm i (--save-prod|--save-dev) @nrfcloud/wait-for-it
```

## Usage

```typescript
import { waitForIt } from "@nrfcloud/wait-for-it";
const tenant = await wait_for_it<Tenant>(() => repo.getByUUID(e.aggregateUUID));
```

## Node & NPM

This project requires npm `>=12.0.2 <13` (enforced via `check-node-version` on
`npm install` and `npm ci`).

The check is skipped during `npm publish` and `npm pack`, because
`semantic-release` bundles its own npm (`@semantic-release/npm` depends on
`npm@^11.6.2`) and runs the publish with that version rather than the one
installed in CI.
