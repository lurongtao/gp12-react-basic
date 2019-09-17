import React, { Component } from 'react'

import { Route, NavLink, withRouter } from 'react-router-dom'

import Movie from './Movie'
import Intheater from './Intheater'
import './index.css'

import Pickcity from './Pickcity'

import CustomNav from './CustomNav'

export default class Index extends Component {
  render() {
    let { match } = this.props
    return (
      <>
        <ul>
          {/* <NavLink activeClassName="active" to={`${match.path}/movie`}>电影</NavLink> | &nbsp;
          <NavLink activeClassName="active" to={`${match.path}/intheater`}>影院</NavLink> */}
          {/* <Route path={`${match.path}/movie`} render={(props) => {
            return <li>aaa</li>
          }}></Route> */}

          <Route 
            path={`${match.path}/movie`} 
            children={(props) => <CustomNav { ...props } nav={{
              title: '电影',
              path: `${match.path}/movie`
            }} />}
          ></Route>
          <Route 
            path={`${match.path}/intheater`} 
            children={(props) => <CustomNav { ...props } nav={{
              title: '影院',
              path: `${match.path}/intheater`
            }} />}
          ></Route>

          {/* <Pickcity></Pickcity> */}
        </ul>
        <hr/>
        <Route path={`${match.path}/movie`} component={Movie}></Route>
        <Route path={`${match.path}/intheater`} component={Intheater}></Route>
      </>
    )
  }
}
