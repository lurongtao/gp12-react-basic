const { Map, is } = require('immutable');

const originalMap = Map({ a: 1, b: 2, c: 3 });
const updatedMap = originalMap.set('b', 1000);
console.log(updatedMap !== originalMap)
// true

const anotherUpdatedMap = originalMap.set('b', 1000);
console.log(anotherUpdatedMap !== updatedMap)
console.log(anotherUpdatedMap.equals(updatedMap))
console.log(is(anotherUpdatedMap, updatedMap))
// true
// true
// true