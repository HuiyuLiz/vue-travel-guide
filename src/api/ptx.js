import request from '@/api/request'

// 取得 token
export function getAuthorizationHeader (data) {
  return request({
    url: '/auth/realms/TDXConnect/protocol/openid-connect/token',
    method: 'post',
    data
  })
}

// 取得所有觀光景點資料
export function getScenicSpot (params) {
  return request({
    url: '/api/basic/v2/Tourism/ScenicSpot',
    method: 'get',
    params: params
  })
}

// 取得所有餐飲資料
export function getRestaurant (params) {
  return request({
    url: '/api/basic/v2/Tourism/Restaurant',
    method: 'get',
    params: params
  })
}

// 取得所有旅宿資料
export function getHotel (params) {
  return request({
    url: '/api/basic/v2/Tourism/Hotel',
    method: 'get',
    params: params
  })
}

// 取得所有活動資料
export function getActivity (params) {
  return request({
    url: '/api/basic/v2/Tourism/Activity',
    method: 'get',
    params: params
  })
}

// 取得指定[縣市]觀光景點資料
export function getActivityByCity (city, params) {
  return request({
    url: '/api/basic/v2/Tourism/Activity/' + city,
    method: 'get',
    params: params
  })
}
