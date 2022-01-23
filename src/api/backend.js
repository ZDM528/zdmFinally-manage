import request from '../util/request'

const getUser = (data) => {
    return request({
        url: '/getUser',
        method: 'get',
        params: data
    })
}

const editUser = (data) => {
  return request({
    url: '/updateUser',
    method: 'post',
    data
  })
}

const deleteUser = (data) => {
  return request({
    url: '/deleteUser',
    method: 'post',
    data
  })
}

const getDataList = (data) => {
  return request({
    url: '/getDataList',
    method: 'get',
    params: data
  })
}

const deleteData = (data) => {
  return request({
    url: '/deleteData',
    method: 'post',
    data
  })
}

const download = (data) => {
  return request({
    url: '/downloadData',
    method: 'get',
    params: data
  })
}

const updateData = (data) => {
  return request({
    url: '/updateData',
    method: 'post',
    data
  })
}

const getNeed = (data) => {
  return request({
    url: '/getNeed',
    method: 'get',
    params: data
  })
}

const updateNeed = (data) => {
  return request({
    url: '/updateNeed',
    method: 'post',
    data
  })
}

const deleteNeed = (data) => {
  return request({
    url: '/deleteNeed',
    method: 'post',
    data
  })
}

const getCommunityList = (data) => {
  return request({
    url: '/getCommunityList',
    method: 'get',
    params: data
  })
}

const deleteCommunityList = (data) => {
  return request({
    url: '/deleteCommunityList',
    method: 'post',
    data
  })
}

const updateCommunityList = (data) => {
  return request({
    url: '/updateCommunityList',
    method: 'post',
    data
  })
}

export {
  getUser,
  editUser,
  deleteUser,
  getDataList,
  deleteData,
  download,
  updateData,
  getNeed,
  updateNeed,
  deleteNeed,
  getCommunityList,
  deleteCommunityList,
  updateCommunityList
}