import React, { Component } from 'react'
import connect from './connect'

@connect
class Counter extends Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.decrement(3)}>-</button>
        {this.props.count}
        <button onClick={() => this.props.increment(2)}>+</button>
      </div>
    )
  }

  componentDidMount() {
    this.props.increment(9)
  }
}

export default Counter
// export default Counter
