import request from '../util/request'

const getWareList = (data) => {
  return request({
    url: '/getWareList',
    method: 'get',
    params: data
    
  })
}

const download = (data) => {
  return request({
    url: '/downloadData',
    method: 'get',
    params: data
  })
}

export {
  getWareList,
  download
}