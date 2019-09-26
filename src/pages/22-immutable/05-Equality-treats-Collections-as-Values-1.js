// https://blog.csdn.net/qq_36074093/article/details/76153714

const { Map, Set } = require('immutable')
const map1 = Map({ a: 1, b: 2, c: 3 });
const map2 = Map({ a: 1, b: 2, c: 3 });
const set = Set().add(map1)
console.log(set.has(map2))
// true