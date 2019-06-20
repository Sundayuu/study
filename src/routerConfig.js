import React, { Component, Suspense, lazy } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import routes from './router'

export default class RouterConfig extends Component {
  render() {
    return (
      <Switch>
        <Suspense fallback={<div>loading......</div>}>
          {routes.map((r, i) => {
            const route = r => {
              return (
                <Route
                  key={i}
                  exact={r.exact}
                  path={r.path}
                  component={lazy(r.component)}
                />
              )
            }
            return r.component ? route(r) : r.children.map(r => route(r))
          })}
        </Suspense>
      </Switch>
    )
  }
}
