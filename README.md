# Instant Utils

Lightweight utility library to assist other [`instant`](https://github.com/cjmyles/instant) packages.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
  - [asyncForEach](#asyncforeach)
  - [asyncMap](#asyncmap)
  - [pick](#pick)
  - [removeUndefineds](#removeundefineds)
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
console.log(result); // => { name: 'Australia' }
```

**CommonJS Modules**

```javascript
var utils = require('instant-utils');

var country = { id: 1, name: 'Australia' };
var result = utils.pick(country, ['name']);
console.log(result); // => { name: 'Australia' }
```

## API

### asyncForEach

Asyncronous For Each function, enabling multiple loop iterations to be wrapped in one completion promise.

#### Arguments

`arr (Array)`: The array to iterate over.\
`iteratee (Function)`: The function invoked per iteration.

#### Returns

`Array`

#### Example Usage

```js
async function getCountries() {
  const countries = ['scotland', 'australia'],
  ];
  return await asyncForEach(countries, country => {
    const response = await fetch(`/api/countries/${country}`);
    return await response.json();
  });
}
```

### asyncMap

Asyncronous Map function, enabling multiple map iterations to be wrapped in one completion promise.

#### Arguments

`arr (Array)`: The array to iterate over.\
`iteratee (Function)`: The function invoked per iteration.

#### Returns

`Array`

#### Example Usage

```js
async function mapCountries() {
  const countries = [
    { id: 'scotland', name: 'Scotland' },
    { id: 'australia', name: 'Australia' },
  ];
  return await asyncMap(countries, country => {
    return {
      ...country,
      visited: true,
    };
  });
}
```

### pick

Creates an object composed of the picked object properties.

#### Arguments

`obj (Object)`: The source object.\
`keys (Array)`: The property keys to pick.

#### Returns

`Object`

#### Example Usage

```js
const country = { id: 1, name: 'Australia' };
const result = pick(country, ['name']);
console.log(result); // => { name: 'Australia' }
```

### removeUndefineds

Creates an object composed of non-undefined-valued object properties.

#### Arguments

`obj (Object)`: The source object.

#### Returns

`Object`

#### Example Usage

```js
const country = { id: 1, name: 'Australia', unicorns: undefined };
const result = removeUndefineds(country);
console.log(result); // => { id: 1, name: 'Australia' }
```

## Contributing

We'd greatly appreciate any [contribution](CONTRIBUTING.md) you make.

## License

[MIT](LICENSE)
