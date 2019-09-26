const { Map } = require('immutable')

// const map1 = {a: 1}
// const map2 = {a: 1}
// console.log(map1 == map2)

const map1 = Map({ a: 1, b: 2, c: 3})
const map2 = Map({ a: 1, b: 2, c: 3})
console.log(map1.equals(map2))
console.log(map1 == map2)
console.log(map1 === map2)
// true
// false
// false