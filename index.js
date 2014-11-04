module.exports = function( path, box, xKey, yKey ) {
    xKey = typeof xKey === 'string' ? xKey : 0;
    yKey = typeof yKey === 'string' ? yKey : 1;
    if (!box || typeof box === 'number')
        box = {};

    box.minX = Infinity;
    box.minY = Infinity;
    box.maxX = -Infinity;
    box.maxY = -Infinity;

    for (var i=0; i<path.length; i++) {
        var x = path[i][ xKey ],
            y = path[i][ yKey ];
        box.minX = Math.min( box.minX, x );
        box.minY = Math.min( box.minY, y );
        box.maxX = Math.max( box.maxX, x );
        box.maxY = Math.max( box.maxY, y );
    }
    
    if (path.length === 0) 
        box.minX = box.maxX = box.minY = box.maxY = 0
    return box;
};