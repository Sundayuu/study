import React, { Component } from 'react'
import { Prompt } from 'react-router-dom'
export default class Home extends Component {
  render() {
    return (
      <div className="test">
        <Prompt message="确定要离开吗" when={true} />
        我是主页
      </div>
    )
  }
}
