import axios from 'axios'
import JsSHA from 'jssha'

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  withCredentials: true,
  timeout: 5000
})

const getAuthorizationHeader = () => {
  const AppID = process.env.VUE_APP_AppID
  const AppKey = process.env.VUE_APP_AppKey
  const GMTString = new Date().toGMTString()
  const ShaObj = new JsSHA('SHA-1', 'TEXT')
  ShaObj.setHMACKey(AppKey, 'TEXT')
  ShaObj.update('x-date: ' + GMTString)
  const HMAC = ShaObj.getHMAC('B64')
  const Authorization = 'hmac username=' + AppID + ', algorithm=hmac-sha1, headers=x-date, signature=' + HMAC + ''
  return { Authorization: Authorization, 'X-Date': GMTString }
}
// request interceptor
service.interceptors.request.use(
  config => {
    config.headers = getAuthorizationHeader()
    return config
  },
  error => {
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    // Do something with response data
    return response
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 404:
          console.log('你要找的頁面不存在')
          break
        case 500:
          console.log('程式發生問題')
          break
        default:
          console.log(error.message)
      }
    }
    if (!window.navigator.onLine) {
      alert('網路出了點問題，請重新連線後重整網頁')
      return
    }
    return Promise.reject(error)
  }
)

export default service
