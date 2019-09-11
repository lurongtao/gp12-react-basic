import React, { Component, createElement } from 'react'

class Comp1 extends Component {
  render() {
    return <div>{this.props.title}</div>
  }
}

class Comp2 extends Component {
  render() {
    return <div>{this.props.name}</div>
  }
}

// const MyComponents = {
//   Comp1: (props) => {
//     return <div>{props.title}</div>
//   },
//   Comp2: (props) => {
//     return <div>{props.name}</div>
//   }
// }

// const MyComponents = {
//   Comp1,
//   Comp2
// }

const comps = {
  comp1: Comp1,
  comp2: Comp2
}

export default class Jsx extends Component {
  state = {
    url: 'http://www.baidu.com',
    info: '<H2>hello world</H2>'
  }

  render() {
    const Component1 = comps['comp1']
    return (
      // createElement(
      //   'div',
      //   null,
      //   [
      //     createElement(
      //       MyComponents.Comp1,
      //       {
      //         title: 'hello',
      //         key: '001'
      //       }
      //     ),
      //     createElement(
      //       MyComponents.Comp2,
      //       {
      //         name: 'world',
      //         key: '002'
      //       }
      //     ),
      //   ]
      // )
      <Component1 title="hello" />
    )
  }
}
