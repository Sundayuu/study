import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import App from './main'
import './../styles/css/index.less'
// 带配置 https://cn.redux.js.org/docs/advanced/UsageWithReactRouter.html
ReactDOM.render(<App store={store} />, document.getElementById('app'))
