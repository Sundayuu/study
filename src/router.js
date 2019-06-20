const homeRouters = [
  {
    path: '/home',
    title: '主页',
    exact: true,
    children: [
      {
        path: '/home/mall',
        title: '商城',
        // component: Mall,
        component: () => import('./mall'),
        exact: true
      }
    ]
  },
  {
    path: '/antd-btn',
    title: 'antd按钮',
    exact: true,
    component: () => import('./antd-button')
  }
]

export default homeRouters
