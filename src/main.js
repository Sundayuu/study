import React, { lazy, Suspense } from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
const Login = lazy(() => import('./login'))
const App = lazy(() => import('./app'))
const NotFound = lazy(() => import('./not-found'))

export default () => (
  <Router>
    <Suspense fallback={<div>loading......</div>}>
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route path="/home" component={App} />
        <Route path="/login" component={Login} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  </Router>
)
