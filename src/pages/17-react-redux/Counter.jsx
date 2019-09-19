import React, { Component } from 'react'

import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    count: state.count
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => {
      dispatch({
        type: 'increment'
      })
    }
  }
}

class Counter extends Component {
  render() {
    return (
      <div>
        {this.props.count}
        <button onClick={this.props.increment}>+</button>
      </div>
    )
  }

  componentDidMount() {
    console.log(this)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
// export default Counter
