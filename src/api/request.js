import axios from 'axios'
import store from '@/store'
import { getToken } from './auth'

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  withCredentials: false,
  timeout: 5000
})

// request interceptor
service.interceptors.request.use(
  (config) => {
    if (!store.getters.token) {
      config.headers.authorization = getToken()
    }
    return config
  },
  (error) => {
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  (response) => {
    // Do something with response data
    return response
  },
  (error) => {
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
