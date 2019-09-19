export const increment = (data) => {
  return {
    type: 'increment',
    data
  }
}

export const asyncIncrement = () => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({
        type: 'increment',
        data: 8
      })
    }, 1000)
  }
}