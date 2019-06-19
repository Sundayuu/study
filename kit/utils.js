import { cache } from 'kit'
export const isLogin = () => {
  // 如果token 直接返回true
  if (window.token) {
    return true
  } else {
    // 每次登录 暂时将token存到sessionStorage中
    const data = sessionStorage.getItem(cache.LOGIN_DATA)
    // 数据不存在返回false
    if (!data) return false
    // 数据存在 赋值给token
    let loginData = JSON.parse(data)
    window.token = loginData.token
    return true
  }
}
