import React, { Component } from 'react'

class Item extends Component {
  render() {
    let { value, index, onReceiveIndex } = this.props
    return (
      <li>{value} <button onClick={onReceiveIndex.bind(this, index)}>X</button></li>
    )
  }
}

export default Item