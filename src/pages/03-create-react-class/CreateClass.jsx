import createReactClass from 'create-react-class'
import React from 'react'

export default createReactClass({
  render() {
    return <div>hello, {this.props.title}</div>
  }
})