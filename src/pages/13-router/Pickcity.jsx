import React, { Component } from 'react'

import { withRouter } from 'react-router-dom'

class Pickcity extends Component {
  render() {
    return (
      <li>
        pickcity
      </li>
    )
  }

  componentDidMount() {
    console.log(this.props)
  }
}


export default withRouter(Pickcity)