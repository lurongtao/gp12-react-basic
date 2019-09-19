import React, { Component } from 'react'

function foo(arg) {
  return (target) => {
    console.log(target)
    target.count = 0
    target.prototype.props = {}
    target.prototype.props.type = arg
  }
}

@foo('abc')
class Decorators extends Component {
  render() {
    return (
      <div>
        hello
      </div>
    )
  }

  componentDidMount() {
    console.log(this)
  }
}

console.log(Decorators.count)



export default Decorators