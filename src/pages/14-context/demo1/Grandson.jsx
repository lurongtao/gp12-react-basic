import React, { Component } from 'react'

import TextContext from './context/text_context'
import IndexContext from './context/index_context'
export default class Grandson extends Component {
  static contextType = TextContext

  render() {
    return (
      <div>
        grandson / {JSON.stringify(this.context.isShowMap)}

        <button
          onClick={
            () => {
              this.context.changeValue(false)
            }
          }
        >change</button>

        <TextContext.Consumer>
          {
            (value) => {
              return (
                <IndexContext.Consumer>
                  {
                    (value) => {
                      return value.title
                    }
                  }
                </IndexContext.Consumer>
              )
            }
          }
        </TextContext.Consumer>

        
      </div>
    )
  }

  componentDidMount() {
    console.log(this)
  }
}