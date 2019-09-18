import React, { Component } from 'react'

import Child1 from './Child1'
import Child2 from './Child2'
import Child3 from './Child3'

import IndexContext from './context/index_context'

export default class Index extends Component {
  state = {
    isShowMap: true
  }

  render() {
    return (
      // <IndexContext.Provider value={{
      //   isShowMap: this.state.isShowMap,
      //   changeValue: this.changeValue
      // }}>
      <div>
        <Child1></Child1>
        <Child2></Child2>
        <Child3></Child3>
      </div>
        
      // </IndexContext.Provider>
    )
  }

  changeValue = (value) => {
    this.setState({
      isShowMap: value
    })
  }
}
