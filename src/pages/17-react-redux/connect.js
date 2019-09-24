import { connect } from 'react-redux'

import { increment, decrement, asyncIncrement } from './actionCreator'

const mapStateToProps = (state) => {
  return {
    count: state.count
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: (data) => {
      dispatch(increment(data))
    },
    decrement: (data) => {
      dispatch(decrement(data))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)