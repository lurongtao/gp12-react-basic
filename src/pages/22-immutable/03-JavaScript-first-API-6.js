const { Map, List } = require('immutable')

const mapped = Map({ a: 1, b: 2, c: 3 })
console.log(mapped.map(function (x) {
  return x * x
}))
// Map { "a": 1, "b": 4, "c": 9 }

const aList = List([ 1, 2, 3 ])
const anArray = [ 0, ...aList, 4, 5 ]
console.log(anArray)
// [ 0, 1, 2, 3, 4, 5 ]