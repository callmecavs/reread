# reread

[![reread on NPM](https://img.shields.io/npm/v/reread.svg?style=flat-square)](https://www.npmjs.com/package/reread)

Recursively read paths to all files within a folder and its subfolders.

Returns a `Promise`.

## Usage

```
const reread = require('reread')

reread('some/path')
  .then(result => console.log(result))       // result is an array of file paths
  .catch(error => console.log(error))
```

## License

[MIT](https://opensource.org/licenses/MIT). © 2016 Michael Cavalea

[![Built With Love](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com)
