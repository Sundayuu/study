import React, { lazy, Suspense } from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux'
const Login = lazy(() => import('./login'))
const App = lazy(() => import('./app'))
const NotFound = lazy(() => import('./not-found'))

export default () => (
  // 包裹路由,以便于路由器可以访问store
  <Provider store={store}>
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
  </Provider>
)
