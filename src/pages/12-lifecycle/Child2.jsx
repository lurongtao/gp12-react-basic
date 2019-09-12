import React, { Component } from 'react'

export default class Child2 extends Component {
  state = {
    city: 'beijing'
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(nextProps)
    return {
      city: 'qianfeng',
      title: nextProps.title
    }
  }

  getSnapshotBeforeUpdate() {
    return 123
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(snapshot)
  }

  render() {
    return (
      <div>
        child2
        {this.state.companyName} / {this.state.city} / {this.state.title}
      </div>
    )
  }

  componentDidMount() {
    // this.setState({
    //   city: '123'
    // })

    // setTimeout(() => {
    //   this.forceUpdate()
    // }, 2000)
  }
}
