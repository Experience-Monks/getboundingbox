module.exports = function( path, box, xKey, yKey ) {

    xKey = xKey || 0;
    yKey = yKey || 1;

    if (!box)
        box = {};

    box.minX = Number.MAX_VALUE;
    box.minY = Number.MAX_VALUE;
    box.maxX = Number.MIN_VALUE;
    box.maxY = Number.MIN_VALUE;

    for (var i=0; i<path.length; i++) {
        var x = path[i][ xKey ],
            y = path[i][ yKey ];
        box.minX = Math.min( box.minX, x );
        box.minY = Math.min( box.minY, y );
        box.maxX = Math.max( box.maxX, x );
        box.maxY = Math.max( box.maxY, y );
    }

    return box;
};