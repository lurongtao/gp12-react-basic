import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter as Router } from 'react-router-dom'

import { Provider } from 'react-redux'
import store from './pages/17-react-redux/store'

// import Counter from './pages/17-react-redux/Counter'
// import Counter2 from './pages/17-react-redux/Counter2'

// import Hoc from './pages/18-HOC/Hoc.jsx'

// import Enhancer from './pages/19-enhancer/Enhancer'

// import Decorators from './pages/20-decorators/Decorators'

// import Animate from './pages/21-animate/Animate'

import Title from './pages/23-hooks/Title'

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <Title></Title>
    </Provider>
  </Router>,
  document.getElementById('root')
)

// setTimeout(() => {
//   ReactDOM.unmountComponentAtNode(document.getElementById('root'))
// }, 3000)

// setTimeout(() => {
//   ReactDOM.unmountComponentAtNode(document.getElementById('root'))
// }, 5000)

// setTimeout(() => {
//   document.getElementById('title').innerHTML = "name"
// }, 10000)