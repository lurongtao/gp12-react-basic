import React, { Component } from 'react'

class Form extends Component {
  constructor() {
    super()
    this.state = {
      value: ''
    }
  }

  render() {
    return (
      <>
        <input type="text" value={this.state.value} onChange={this.handleChange.bind(this)} />
        <button onClick={this.handleClick.bind(this)}>add</button>
      </>
    )
  }

  handleClick() {
    this.props.onValue(this.state.value)
    this.setState({
      value: ''
    })
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    })
  }
}

export default Form