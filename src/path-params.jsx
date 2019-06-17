import React, { Component } from 'react'

export default class PathParams extends Component {
  render() {
    return (
      <div>
        React路由传值;
        {/* <div
          dangerouslySetInnerHTML={{ __html: this.props.location.query.text }}
        /> */}
        <div
          dangerouslySetInnerHTML={{ __html: this.props.location.state.text }}
        />
      </div>
    )
  }
}
