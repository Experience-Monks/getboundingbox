# getboundingbox

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

This is a utility function to calculate the bounding box of series of 2D points

```js
var getBounds = require('getboundingbox')

var path = [ [-100, 12], [-52, 25], [6, 13] ]
var box = getBounds(path)
```

The result will be:

```
{ 
    maxX: 6,
    maxY: 25, 
    minX: -100, 
    minY: 12 
}
```

## Usage

[![NPM](https://nodei.co/npm/getboundingbox.png)](https://nodei.co/npm/getboundingbox/)

#### `bounds(path[, out])`

Computes the min and max [x, y] points for the given path. If `path` is an empty array, the bounds will be empty (all zero). 

You can specify `out` to re-use an object rather than creating a new one.

This is safe to with Array.map/filter/etc, e.g.

```js
if (paths.map(bounds).some(intersect)) {
    ...
}
```

## License

MIT, see [LICENSE.md](http://github.com/mattdesl/getboundingbox/blob/master/LICENSE.md) for details.
