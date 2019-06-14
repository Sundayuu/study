import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom' // Router路由器,Route路由, NavLink路由导航
import Home from './Home'
import My from './my'
import Mall from './mall'
const NavBar = () => (
  <div>
    <NavLink exact to="/" activeClassName="nav-active">
      主页 |{' '}
    </NavLink>
    <NavLink to="/my" activeClassName="nav-active">
      我的 |{' '}
    </NavLink>
    <NavLink to="/mall" activeClassName="nav-active">
      商城
    </NavLink>
  </div>
)
export default class App extends Component {
  render() {
    return (
      <Router>
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route path="/my" component={My} />
        <Route path="/mall" component={Mall} />
      </Router>
    )
  }
}
