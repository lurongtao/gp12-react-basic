import React, { Component } from 'react'

export default class State extends Component {
  // constructor(){
  //   super()
  //   this.state = {
  //     title: 'hello'
  //   }
  // }

  // 数据单一来源原则
  state = {
    title: 'hello',
    count: 0,
    friends: []
  }

  render() {
    console.log('render')
    return (
      <div>
        {this.state.title} / 
        {this.state.count} /
        {this.state.friends[0]} /
        {this.props.name}
      </div>
    )
  }

  componentDidMount() {
    // this.state.title = 'world'
    this.state.friends.push('liubiao')
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      }
    }, () => {
      console.log(this.state.title)
    })
  }
}
