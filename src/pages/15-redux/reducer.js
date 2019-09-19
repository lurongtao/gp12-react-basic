const defaultState = {
  count: 0
}

module.exports = (state=defaultState, action) => {
  if (action.type === 'increment') {
    return {
      count: state.count + 1
    }
  } else if (action.type === 'decrement') {
    return {
      count: state.count - 1
    }
  } else {
    return state
  }
}

