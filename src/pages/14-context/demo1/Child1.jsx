import React, { Component } from 'react'

import IndexContext from './context/index_context'
export default class Child1 extends Component {
  static contextType = IndexContext
  render() {
    return (
      <div>
        child1 / {JSON.stringify(this.context.isShowMap)}
      </div>
    )
  }
}
