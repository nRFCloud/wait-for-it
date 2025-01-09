# `@nrfcloud/wait-for-it`

<https://jsr.io/@nrfcloud/wait-for-it>

## Install with NPM

```bash
npx jsr add --save-dev @nrfcloud/wait-for-it
```

## Usage

```typescript
import * as wait_for_it from "@nrfcloud/wait-for-it";
const tenant = await wait_for_it<Tenant>(() => repo.getByUUID(e.aggregateUUID));
```
