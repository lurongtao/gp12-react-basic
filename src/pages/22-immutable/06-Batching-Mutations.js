const { List } = require('immutable');
const list1 = List([ 1, 2, 3 ]);
const list2 = list1.withMutations(function (list) {
  list.push(4).push(5).push(6);
});
console.log(list1.size === 3);
console.log(list2.size === 6);
// true
// true