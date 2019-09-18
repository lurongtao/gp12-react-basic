import React, { Component } from 'react'

import { DartProvider, Consumer } from './context/dart'
import Comp1 from './Comp1'
import Comp2 from './Comp2'
export default class Dart extends Component {
  render() {
    return (
      <DartProvider>
        <Comp1></Comp1>
        <Comp2></Comp2>
      </DartProvider>
    )
  }
}
