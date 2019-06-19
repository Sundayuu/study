import React, { Component } from 'react'
import { Button } from 'antd'
export default class Login extends Component {
  state = {
    redirectToReferrer: true // 登录后跳转之前的页面
  }
  login = () => {}
  render() {
    return (
      <div>
        <Button type="primary">点我登录</Button>
        哈哈
      </div>
    )
  }
}
