import React, { Component } from 'react'

import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    count: state.count
  }
}

@connect( 
  mapStateToProps
)
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

export default Counter
// export default Counter
