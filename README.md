# Instant Utils

Lightweight utility library to assist other `instant` packages.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
  - [Async For Each](#async-for-each)
  - [Async Map](#async-map)
  - [Pick](#pick)
  - [Remove Undefineds](#removeUndefineds)
- [Contributing](#contributing)
- [License](#license)

## Installation

You can install this package using npm:

```bash
$ npm install instant-utils
```

## Usage

Here is a quick example to get you started:

**ES Modules**

```javascript
import { pick } from 'instant-utils';

const country = { id: 1, name: 'Australia' };
const result = pick(country, ['name']);
console.log(result); // => { name: 'Australia' };
```

**CommonJS Modules**

```javascript
var utils = require('instant-utils');

var country = { id: 1, name: 'Australia' };
var result = utils.pick(country, ['name']);
console.log(result); // => { name: 'Australia' };
```

## API

### Async For Each

Asyncronous For Each function, enabling multiple loop iterations to be wrapped in one completion promise.

#### Arguments

`array (Array)`: The array to iterate over.\
`iteratee (Function)`: The function invoked per iteration.

#### Example Usage

```js
async function getCountries() {
  const countries = [
    { id: 'scotland', name: 'Scotland' },
    { id: 'australia', name: 'Australia' },
  ];
  return await asyncForEach(country, () => {
    const response = await fetch(`/api/countries/${country.id}`);
    return await response.json();
  });
}
```

### Async Map

#### Arguments

#### Example Usage

### Pick

#### Arguments

#### Example Usage

### Async For Each

#### Arguments

#### Example Usage

## Contributing

We'd greatly appreciate any [contribution](CONTRIBUTING.md)) you make.

## License

[MIT](LICENSE)
