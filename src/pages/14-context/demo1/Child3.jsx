import React from 'react'

import IndexContext from './context/index_context'
export default function(props) {
  return (
    <IndexContext.Consumer>
      {
        (value) => {
          return value.isShowMap
        }
      }
    </IndexContext.Consumer>
  )
}