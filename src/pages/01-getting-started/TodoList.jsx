import React from 'react'

import List from './List'
import Form from './Form'

class TodoList extends React.Component {
  constructor() {
    super()
    this.state = {
      list: []
    }
  }

  render() {
    return (
      <>
        <List 
          list={this.state.list}
          onReceiveIndex={this.handleReceiveIndex.bind(this)}
        ></List>
        <Form 
          onValue={this.handleValue.bind(this)}
        ></Form>
      </>
    )
  }

  handleValue(value) {
    this.state.list.push(value)
    this.setState({})
  }

  handleReceiveIndex(index) {
    this.state.list.splice(index, 1)
    this.setState({})
  }
}

export default TodoList