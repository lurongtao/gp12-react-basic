import React, { Component } from 'react'
import PropTypes from 'prop-types'

// import ClassA from './ClassA'

export default class Props extends Component {
  static defaultProps = {
    title: 'message'
  }

  static propTypes = {
    title: PropTypes.elementType
  }

  render() {
    const ClassA = this.props.title
    return (
      <div>
        {<ClassA></ClassA>}
      </div>
    )
  }
}
