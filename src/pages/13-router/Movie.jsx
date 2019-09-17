import React, { Component } from 'react'

export default class Movie extends Component {
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>哪吒</button>
      </div>
    )
  }

  handleClick = () => {
    this.props.history.push('/detail/123')
  }
}
