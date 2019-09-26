const { Seq, Map } = require('immutable');

const map = Map({ a: 1, b: 2, c: 3 });
const lazySeq = Seq(map);

const newMap = lazySeq
  .flip()
  .map(key => key.toUpperCase())
  .flip();

console.log(newMap)
// Seq { A: 1, B: 1, C: 1 }