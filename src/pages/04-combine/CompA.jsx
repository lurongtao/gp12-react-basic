import React, { Component, Fragment } from 'react'

class CompA extends Component {
  render() {
    return (
      <Fragment>
        <div>component a</div>
        <div>{this.props.title}</div>
        {this.props.children}
      </Fragment>
    )
  }
}

export default CompA