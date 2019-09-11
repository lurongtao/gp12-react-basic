import React, { Component } from 'react'

import Item from './Item'

class List extends Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     list: []
  //   }
  // }

  render() {
    let { list, onReceiveIndex } = this.props
    return (
      <ul>
        {
          list.map((value, index) => {
            return (
              <Item 
                key={index} 
                value={value} 
                index={index}
                onReceiveIndex={onReceiveIndex}
              ></Item>
            )
          })
        }
      </ul>
    )
  }
}

export default List