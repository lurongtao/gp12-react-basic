const { Seq } = require('immutable');
const oddSquares = Seq([ 1, 2, 3, 4, 5, 6, 7, 8 ])
  .filter(x => {
    console.log('filter x:' + x)
    return x % 2 !== 0
  })
  .map(x => {
    console.log('map x:' + x)
    return x * x
  });

console.log(oddSquares.get(0))

// filter x:1
// filter x:2
// filter x:3
// map x:3
// 9