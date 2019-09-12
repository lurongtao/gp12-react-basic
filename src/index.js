import React from 'react'
import ReactDOM from 'react-dom'

import LifeCyle from './pages/12-lifecycle/LifeCyle'

ReactDOM.render(
  <LifeCyle></LifeCyle>,
  document.getElementById('root')
)

// setTimeout(() => {
//   ReactDOM.unmountComponentAtNode(document.getElementById('root'))
// }, 5000)

setTimeout(() => {
  document.getElementById('title').innerHTML = "name"
}, 10000)