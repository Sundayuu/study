import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Mall extends Component {
  render() {
    return (
      <div>
        <p className="path">
          <Link to="/my/路径传值">路径传值</Link>
        </p>
        <p className="path">
          <Link to={{ pathname: '/path-params', query: 'query传值哈哈' }}>
            {' '}
            query传值
          </Link>
        </p>
        <p className="path">
          <Link
            to={{ pathname: '/path-params', state: { text: 'state传值哈哈' } }}
          >
            {' '}
            state传值
          </Link>
        </p>
      </div>
    )
  }
}
