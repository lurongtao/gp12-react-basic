export default (
  state = {
    count: 0
  },
  action
) => {
  switch (action.type) {
    case 'increment':
      return {
        count: state.count + action.data
      }
    case 'decrement': 
      return {
        count: state.count - action.data
      }
    default:
      return state
  }
}