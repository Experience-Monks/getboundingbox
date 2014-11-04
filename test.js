var test = require('tape').test
var bounds = require('./')

test('gets bounding box', function(t) {
    var paths = [ [5, 1], [-7, -3] ]

    t.equal(bounds(paths).minX, -7)
    t.equal(bounds(paths).minY, -3)
    t.equal(bounds(paths).maxX, 5)
    t.equal(bounds(paths).maxY, 1)

    var polys = [ 
        [ [10, 10], [5, 12] ],
        [ [-10, 0], [10, 10] ]
    ]
    var polysPositive = [ 
        [ [10, 10], [5, 12] ],
        [ [10, 0], [10, 10] ]
    ]

    var negative = function(box) {
        return box.minX < 0 || box.maxX < 0 || box.minY < 0 || box.maxY < 0
    }
    
    t.equal( polys.map(bounds).some(negative), true, 'should work with map' )
    t.equal( polysPositive.map(bounds).some(negative), false, 'should work with map' )

    t.deepEqual(bounds([[100,100]]), { maxX: 100, maxY: 100, minX: 100, minY: 100 }, 'works with one point')
    t.deepEqual(bounds([]), { maxX: 0, maxY: 0, minX: 0, minY: 0 }, 'no bounds leads to zeros')
    t.deepEqual(bounds([ [-100, 12], [-52, 25], [6, 13] ]), { maxX: 6, maxY: 25, minX: -100, minY: 12 })
    t.end()
})