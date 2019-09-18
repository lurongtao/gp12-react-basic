import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter as Router } from 'react-router-dom'
import Index from './pages/14-context/demo2/Dart'

ReactDOM.render(
  <Router>
    <Index></Index>
  </Router>,
  document.getElementById('root')
)

// setTimeout(() => {
//   ReactDOM.unmountComponentAtNode(document.getElementById('root'))
// }, 5000)

// setTimeout(() => {
//   document.getElementById('title').innerHTML = "name"
// }, 10000)