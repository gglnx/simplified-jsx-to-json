# simplified-jsx-to-json [![Build Status](https://travis-ci.org/gglnx/simplified-jsx-to-json.svg?branch=master)](https://travis-ci.org/gglnx/simplified-jsx-to-json)

> Converts simplified JSX code into a JSON representation, which can be used by `React.createElement`

## Install

```
$ npm install simplified-jsx-to-json
```

## Usage

```js
const jsxToJson = require('simplified-jsx-to-json');

jsxToJson('<Test myProp={true}>My Child</Test>');
//=> '[ [ 'Test', { myProp: true }, "My Child" ] ]'
```

## Features

* `<Test />`: Self-closing JSX tags
* `<Test myProp="string">`: String props
* `` <Test myProp={`string`}> ``: Template props
* `<Test myProp>`: True props
* `<Test myProp={false}>`: Boolean props
* `<Test myProp={34}>`: Number props
* `<Test myProp={3 + 3 + 3}>`: Props with arithmetic, comparison or bitwise operators
* `<Test myProp={['Test', true, 34]}>`: Arrays (with strings, numbers or booleans)
* `<Test myProp={{ test: 34 }}>`: Objects with string keys and string, number or boolean value
* `<>Test</>`: Fragments
* HTML/SVG DOM attributes are converted to correct React equivalent (`class` -> `className`)

## License

MIT © [Dennis Morhardt](https://dennismorhardt.de)
