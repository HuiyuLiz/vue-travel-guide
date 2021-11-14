import request from '@/api/request'

// 取得所有觀光景點資料
export function getScenicSpot (query) {
  return request({
    url: '/v2/Tourism/ScenicSpot',
    method: 'get',
    params: query
  })
}
