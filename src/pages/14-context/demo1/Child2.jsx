import React, { Component } from 'react'

import Grandson from './Grandson'
import TextContext from './context/text_context'
export default class Child2 extends Component {
  render() {
    return (
      <div>
        <div>child2</div>
        {/* <TextContext.Provider value={{
          // isShowMap: false
        }}> */}
          <Grandson></Grandson>
        {/* </TextContext.Provider> */}
      </div>
    )
  }
}
