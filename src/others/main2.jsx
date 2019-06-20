import React, { Suspense } from 'react'
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'
import homeRouters from '../router'
const RouteWithSubRoutes = route => {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={props => <route.component routes={route.routes} {...props} />}
    />
  )
}
const Example = () => {
  return (
    <Router>
      <Suspense fallback={<div>loading......</div>}>
        <ul>
          <li>
            <Link to="/login">登录</Link>
          </li>
          <li>
            <Link to="/home">主页</Link>
          </li>
        </ul>
        <Switch>
          {homeRouters.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
      </Suspense>
    </Router>
  )
}
export default Example
