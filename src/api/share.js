import request from '../util/request'

const getNeed = (data) => {
  return request({
    url: '/supplyProjectData',
    method: 'post',
    data
  })
}

const addUploadFile = (data) => {
  return request({
    url: '/addUploadFile',
    method: 'post',
    data
  })
}

const addProjectData = (data) => {
  return request({
    url: '/addProjectData',
    method: 'post',
    data
  })
}

const getPersonData = (data) => {
  return request({
    url: '/getPersonData',
    method: 'get',
    params: data
  })
}

const download = (data) => {
  return request({
    url: '/downloadPersonData',
    method: 'get',
    params: data
  })
}

export {
  getNeed,
  addProjectData,
  addUploadFile,
  getPersonData,
  download
}