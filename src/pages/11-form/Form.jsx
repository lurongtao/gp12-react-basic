import React, { Component, createRef } from 'react'

export default class Reservation extends React.Component {
  constructor() {
    super()
    this.username = createRef()
  }

  state = {
    name: ''
  }

  render() {
    return (
      <div>
        <input type="text" defaultValue="Bob" ref={this.username}/>
        <input type="button" value="提交" onClick={this.handleClick}/>
      </div>
    )
  }

  componentDidMount() {
    console.log(this.username.current.value)
  }

  handleClick = () => {
    console.log(this.username.current.value)
  }
}