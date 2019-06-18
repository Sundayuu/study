import React, { Component } from 'react'
import {
  HashRouter as Router,
  Route,
  Link,
  withRouter,
  Switch,
  Redirect // 页面重定向
} from 'react-router-dom' // Router路由器,Route路由, NavLink路由导航

export default class AuthExample extends Component {
  render() {
    return (
      <Router>
        <div>
          <AuthBtn />
          <ul>
            <li>
              <Link to="/public"> public page</Link>
            </li>
            <li>
              <Link to="/protected"> protected page</Link>
            </li>
          </ul>
          <Switch>
            <Route path="/public" component={Public} />
            <Route path="/login" component={Login} />
            <PrivateRoute path="/protected" component={Protected} />
          </Switch>
        </div>
      </Router>
    )
  }
}
// 例子组件
function Public() {
  return <h3>Public</h3>
}

function Protected() {
  return <h3>Protected</h3>
}
// 登录判断
const fakeAuth = {
  isLogin: false,
  // 登录
  authenticate(cb) {
    this.isLogin = true
    setTimeout(cb, 100) // 模拟异步
  },
  // 登出
  signOut(cb) {
    this.isLogin = false
    setTimeout(cb, 100)
  }
}

// 模拟登录登出
const AuthBtn = withRouter(({ history }) => {
  return fakeAuth.isLogin ? (
    <div>
      welcome &nbsp;
      <button onClick={() => fakeAuth.signOut(() => history.push('/'))}>
        {' '}
        sign out{' '}
      </button>
    </div>
  ) : (
    <div>You are not logged in.</div>
  )
})
// 权限路由
const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        fakeAuth.isLogin ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location }
            }}
          />
        )
      }
    />
  )
}

// 登录组件
class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      redirectToReferrer: false
    }
  }

  login = () => {
    fakeAuth.authenticate(() => {
      this.setState(
        {
          redirectToReferrer: true
        },
        () => {
          this.state.redirectToReferrer && this.props.history.push('./public')
        }
      )
    })
  }
  render() {
    let { from } = this.props.location.state || { from: { pathname: '/' } }
    let { redirectToReferrer } = this.state
    if (redirectToReferrer) <Redirect to={from} />
    return (
      <div>
        <p>You must log in to view the page at {from.pathname}</p>
        <button onClick={this.login}>Log in</button>
      </div>
    )
  }
}
