import React, { Component } from 'react'
import connect from './connect'

@connect
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
    this.props.increment(9)
  }
}

export default Counter
// export default Counter
