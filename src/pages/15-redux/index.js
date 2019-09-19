const { createStore } = require('redux')
const reducer = require('./reducer')

const store = createStore(reducer)

// store.dispatch({
//   type: 'increment'
// })

store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch({
  type: 'increment'
})

store.dispatch({
  type: 'increment'
})

store.dispatch({
  type: 'decrement'
})

store.dispatch({
  type: 'decrement'
})

store.dispatch({
  type: 'decrement'
})

// console.log(store)