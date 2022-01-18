import request from '../util/request'

const getWareList = (data) => {
  return request({
    url: '/getWareList',
    method: 'get',
    params: {
      data
    }
  })
}

export {
  getWareList
}