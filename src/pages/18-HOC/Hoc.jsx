import React, { Component } from 'react'

import hoc from './hoc'

class Hoc extends Component {
  render() {
    console.log(this)
    return (
      <div>
        hoc
      </div>
    )
  }
}

export default hoc(Hoc, 'a', 'b')
