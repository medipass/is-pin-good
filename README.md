# is-pin-good

> Checks if a given pin code is secure.

Statistically, one third of all four digit codes can be guessed by trying just 61 distinct combinations. Don't believe us? [PIN number analysis](http://www.datagenetics.com/blog/september32012/)

## Install

```
$ npm install is-pin-good
```


## Usage

```js
const isPinGood = require('is-pin-good');

isPinGood('1234');
//=> false

isPinGood('8615');
//=> true

isPinGood('5555');
//=> false
```


## API

### isPinGood(input)

Returns a boolean.

#### input

Type: `string`

The pin code to check.

## License

MIT © [Medipass Solutions](https://github.com/medipass)
