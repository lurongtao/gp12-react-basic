const { Map, is } = require('immutable')

const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { a: 1, b: 2, c: 3 };
console.log(obj1 !== obj2)
// true

// const map1 = Map({ a: 1, b: 2, c: 3 });
// const map2 = Map({ a: 1, b: 2, c: 3 });
// console.log(map1 !== map2)
// console.log(map1.equals(map2))
// console.log(is(obj1, obj2))
// true
// true
// true