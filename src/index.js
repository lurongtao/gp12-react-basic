import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter as Router } from 'react-router-dom'
import MyRouter from './pages/13-router/Router'

ReactDOM.render(
  <Router>
    <MyRouter></MyRouter>
  </Router>,
  document.getElementById('root')
)

// setTimeout(() => {
//   ReactDOM.unmountComponentAtNode(document.getElementById('root'))
// }, 5000)

// setTimeout(() => {
//   document.getElementById('title').innerHTML = "name"
// }, 10000)