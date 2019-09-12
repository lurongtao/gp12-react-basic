import React, { Component } from 'react'

export default class Event extends Component {
  constructor() {
    super()
    // this.handleClick = this.handleClick.bind(this)
  }
  state = {
    count: 0
  }

  render() {
    return (
      <div>
        {this.state.count}
        <button onClick={this.handleClick}>+</button>
      </div>
    )
  }

  // handleClick = function(size, e) {
  //   this.setState((prevState) => ({
  //     count: prevState.count + 1
  //   }))
  // }

  handleClick = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }))
  }
}
