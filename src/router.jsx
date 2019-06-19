import { lazy } from 'react'
const Login = lazy(() => import('./login'))
const Home = lazy(() => import('./home'))
const homeRouters = [
  { path: '/login', component: Login },
  { path: '/', component: Home }
]
export default homeRouters
