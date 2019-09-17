import React, { Component } from 'react'

import { 
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import Index from './Index'
import Detail from './Detail'
import Pickcity from './Pickcity'
import Page404 from './Page404'

export default class MyRouter extends Component {
  render() {
    return (
      <Switch>
        <Route path="/index" component={Index}></Route>
        <Route path="/detail/:id" component={Detail}></Route>
        <Route path="/pickcity" component={Pickcity}></Route>
        <Redirect from="/" exact to="/index/movie"></Redirect>
        <Route component={Page404}></Route>
      </Switch>
    )
  }
}
