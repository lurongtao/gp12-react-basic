import React from 'react'
import ReactDOM from 'react-dom'

// import Style from './pages/07-style/Style'
import Props from './pages/08-props/Props'

import ClassA from './pages/08-props/ClassA'

ReactDOM.render(
  <Props title={ClassA}></Props>,
  document.getElementById('root')
)