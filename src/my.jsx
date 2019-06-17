import React, { Component } from 'react'

export default class My extends Component {
  render() {
    return (
      <div>
        我的模块
        {/* dangerouslySetInnerHTML: react插入HTML标签 */}
        <div
          dangerouslySetInnerHTML={{ __html: this.props.match.params.name }}
        />
      </div>
    )
  }
}
