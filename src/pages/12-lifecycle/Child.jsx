import React, { Component, PureComponent } from 'react'

export default class Child extends Component {
  // constructor() {
  //   super()
  //   console.log('constructor')
  // }

  render() {
    console.log('render')
    return (
      <div>
        child lifecyle / 
        <div id="title">{this.props.title}</div>
      </div>
    )
  }

  // componentWillMount() {
  //   console.log('componentWillMount')
  // }

  // componentDidMount() {
  //   console.log('componentDidMount')
  // }

  // componentWillReceiveProps() {
  //   console.log('componentWillReceiveProps')
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('shouldComponentUpdate')
  //   return true
  // }

  // componentWillUpdate() {
  //   console.log('componentWillUpdate')
  // }

  // componentDidUpdate() {
  //   console.log('componentDidUpdate')
  // }

  // componentWillUnmount() {
  //   console.log('componentWillUnmount')
  // }
}
