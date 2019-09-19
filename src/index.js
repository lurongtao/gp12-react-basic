import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter as Router } from 'react-router-dom'

import { Provider } from 'react-redux'
import store from './pages/17-react-redux/store'

// import Counter from './pages/17-react-redux/Counter'
// import Counter2 from './pages/17-react-redux/Counter2'

import Hoc from './pages/18-HOC/Hoc.jsx'

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <Hoc></Hoc>
    </Provider>
  </Router>,
  document.getElementById('root')
)

// setTimeout(() => {
//   ReactDOM.unmountComponentAtNode(document.getElementById('root'))
// }, 5000)

// setTimeout(() => {
//   document.getElementById('title').innerHTML = "name"
// }, 10000)