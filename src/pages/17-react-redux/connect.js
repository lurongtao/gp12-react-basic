import { connect } from 'react-redux'

import { increment, asyncIncrement } from './actionCreator'

const mapStateToProps = (state) => {
  return {
    count: state.count
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: (data) => {
      dispatch(increment(data))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)