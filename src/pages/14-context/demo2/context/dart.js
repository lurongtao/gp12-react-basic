import React, { createContext } from 'react'

let {
  Provider,
  Consumer
} = createContext()

class DartProvider extends React.PureComponent {
  state = {
    count: 0
  }

  increment = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      }
    })
  }

  render() {
    return (
      <Provider value={this.state.count}>
        {this.props.children}
      </Provider>
    )
  }
}

export {
  DartProvider,
  Consumer
}