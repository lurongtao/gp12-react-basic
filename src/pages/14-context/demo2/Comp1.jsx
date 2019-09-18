import React, { Component } from 'react'

import { Consumer } from './context/dart'
export default class Comp1 extends Component {
  render() {
    return (
      <Consumer>
        {
          (value) => {
            return value
          }
        }
      </Consumer>
    )
  }
}
