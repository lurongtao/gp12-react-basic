import React, { Component } from 'react'
import store from './store'
export default class Counter extends Component {
  state = {
    count: 0
  }

  render() {
    return (
      <div>
        { this.state.count }
        <button onClick={this.handleClick}>+</button>
      </div>
    )
  }

  handleClick = () => {
    store.dispatch({
      type: 'increment'
    })
  }

  componentDidMount() {
    this.setState({
      count: store.getState().count
    })

    store.subscribe(() => {
      this.setState({
        count: store.getState().count
      })
    })
  }
}
