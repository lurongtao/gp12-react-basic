import React, { Component } from 'react'

import Child from './Child'
import Child2 from './Child2'
export default class LifeCyle extends Component {
  // constructor() {
  //   super()
  //   console.log('parent constructor')
  // }

  state = {
    title: 'name'
  }

  render() {
    console.log('parent render')
    return (
      <>
        <Child title={this.state.title}></Child>
        <Child2 title="zhongqiu"></Child2>
      </>
    )
  }

  // componentWillMount() {
  //   console.log('parent componentWillMount')
  // }

  componentDidMount() {
    console.log('parent componentDidMount')
    setTimeout(() => {
      this.setState({
        title: 'name'
      })
    }, 5000)
  }

  // componentWillReceiveProps() {
  //   console.log('parent componentWillReceiveProps')
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('parent shouldComponentUpdate')
  //   return true
  // }

  // componentWillUpdate() {
  //   console.log('parent componentWillUpdate')
  // }

  // componentDidUpdate() {
  //   console.log('parent componentDidUpdate')
  // }

  // componentWillUnmount() {
  //   console.log('parent componentWillUnmount')
  // }
}
