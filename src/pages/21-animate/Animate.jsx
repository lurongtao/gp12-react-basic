import React, { Component } from 'react'

// import './animate.css'
import './ani.css'

import { CSSTransition } from 'react-transition-group'

export default class Animate extends Component {
  state = {
    isShow: false
  }

  render() {
    return (
      <>
        <CSSTransition
          appear
          in={this.state.isShow}
          timeout={2000}
          classNames={'my-node'}
          onEntered={() => {
            console.log(0)
            document.getElementById('ani').style.fontSize = '40px'
          }}
        >
          <div id="ani">
            animate
          </div>
        </CSSTransition>
        <div>
          <button onClick={this.handleClick}>click</button>
        </div>
      </>
    )
  }

  handleClick = () => {
    this.setState({
      isShow: !this.state.isShow
    })
  }
}
