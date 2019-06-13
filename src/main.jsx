import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom' // Router路由器,Route路由, NavLink路由导航
import './../styles/css/index.less'
import Home from './Home'
import My from './my'
import Mall from './mall'
const NavBar = () => (
  <div>
    <NavLink exact to="/">
      主页 |{' '}
    </NavLink>
    <NavLink to="/my">我的 | </NavLink>
    <NavLink to="/mall">商城 |</NavLink>
  </div>
)
export default class App extends Component {
  render() {
    return (
      <Router>
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/my" component={My} />
        <Route exact path="/mall" component={Mall} />
      </Router>
    )
  }
}
