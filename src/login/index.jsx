import React, { Component } from 'react'
import { Button } from 'antd'
import { Link } from 'react-router-dom'
export default class Login extends Component {
  state = {
    redirectToReferrer: true // 登录后跳转之前的页面
  }
  login = () => {}
  render() {
    return (
      <div>
        <Button
          type="primary"
          onClick={() => this.props.history.push('/home/mall')}
        >
          点我登录
        </Button>
      </div>
    )
  }
}
