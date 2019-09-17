import React, { Component } from 'react'

import { NavLink } from 'react-router-dom'

import './index.css'

const oddEvent = (match, location) => {
  // if (!match) {
  //   console.log(0)
  //   return false
  // }
  // const eventID = parseInt(match.params.id)
  // console.log(match)
  return true
}

export default class Detail extends Component {
  render() {
    return (
      <div>
        {/* {this.props.location.state.id} */}
        detail

        {/* <NavLink
          to="/detail/123"
          isActive={oddEvent}
          activeClassName="active"
        >Event 123</NavLink>

        <NavLink
          to="/detail/233"
          isActive={oddEvent}
          activeClassName="active"
        >Event 123</NavLink> */}

      </div>
    )
  }

  componentDidMount() {
    // console.log(this.props)
  }
}
