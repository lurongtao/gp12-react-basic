import React, { Component } from 'react'

import store from './store'
export default class Counter2 extends Component {
  render() {
    return (
      <div>
        {store.getState().count}
      </div>
    )
  }
}
