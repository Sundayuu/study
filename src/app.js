import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Routes from './routerConfig'
export default class App extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/home/mall">点击跳转</Link>
          </li>
        </ul>
        <Routes />
      </div>
    )
  }
}
