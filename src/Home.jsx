import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    console.log(this.props)

    return (
      <div className="test">
        {/* <Prompt message="确定要离开吗" when={true} /> */}
        {/* <img src="images/5b0d36d149b09.jpg" alt="" /> */}
        <a
          href="javascript:;"
          onClick={() => this.props.history.push('./mall')}
        >
          点我
        </a>
      </div>
    )
  }
}
