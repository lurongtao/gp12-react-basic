import React, { Component } from 'react'

import { Consumer } from './context/dart'
export default class Comp2 extends Component {
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
