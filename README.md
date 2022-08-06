# Result helper class

### Description
Result helper class

## Getting started

```bash
yarn add @synonymdev/result
#or
npm i -s @synonymdev/result
````

## Usage
```javascript
import bt from '@synonymdev/result';
```

```typescript
const func = (): Result<number> => {
  return ok(42);
  // OR
  return err('error message');
  // OR
  return err(new Error('error message'));
}

const result = func();

if (result.isOk()) {
    console.log(result.value); //42
}

if (result.isErr()) {
    console.error(result.error.message); // "error message"
}
```


## Development

### `yarn build`

Builds library ready for production use.

### `yarn test`

Unit tests.

### `yarn format`

Code formatting.

### `yarn lint`

Code linting.

### `yarn prepublish`

Prepares code for publishing by building and bumping package version.
