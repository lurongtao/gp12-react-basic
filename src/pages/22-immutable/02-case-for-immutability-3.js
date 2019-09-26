const { Map } = require('immutable')
const map = Map({ a: 1, b: 2, c: 3})
const mapCopy = map

// otherMapCopy = mapCopy.set('b', 2)
// console.log(mapCopy.equals(map))
// console.log(mapCopy == map)
// console.log(otherMapCopy === map)
// true
// true
// true