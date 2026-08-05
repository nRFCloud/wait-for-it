# `@nrfcloud/wait-for-it`

<https://www.npmjs.com/package/@nrfcloud/wait-for-it>

## Install with NPM

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
