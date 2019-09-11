import React, { Component } from 'react'

import CompA from './CompA'
import CompB from './CompB'

export class Combine extends Component {
  render() {
    return (
      <CompA title="hello">
        <CompB></CompB>
      </CompA>
    )
  }
}

export default Combine
