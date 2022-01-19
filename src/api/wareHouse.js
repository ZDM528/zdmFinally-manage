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

const updateScore = (data) => {
  return request({
    url: '/updateScore',
    method: 'post',
    data
  })
}

export {
  getWareList,
  download,
  updateScore
}