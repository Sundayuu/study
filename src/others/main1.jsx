import React, { Component } from 'react'
import {
  HashRouter as Router,
  Route,
  NavLink,
  Switch,
  Redirect // 页面重定向
} from 'react-router-dom' // Router路由器,Route路由, NavLink路由导航
const createHistory = require('history').createBrowserHistory
import Home from '../Home'
import My from './my'
import Mall from '../mall'
import NotFund from './not-fund'
import PathParams from './path-params'
const NavBar = () => (
  <div>
    <NavLink exact to="/" activeClassName="nav-active">
      主页 &nbsp;| &nbsp;
    </NavLink>
    <NavLink to="/my" activeClassName="nav-active">
      我的 &nbsp;| &nbsp;
    </NavLink>
    <NavLink to="/mall" activeClassName="nav-active">
      商城 &nbsp;| &nbsp;
    </NavLink>
    <NavLink to="/redirect" activeClassName="nav-active">
      redirect &nbsp;| &nbsp;
    </NavLink>
    <NavLink to="/mall11" activeClassName="nav-active">
      404
    </NavLink>
  </div>
)
export default class App extends Component {
  render() {
    return (
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/my/:name" component={My} />
          <Route path="/mall" component={Mall} />
          <Route path="/path-params" component={PathParams} />
          <Redirect from="/redirect" to="/" />
          <Route component={NotFund} />
        </Switch>
      </Router>
    )
  }
}
