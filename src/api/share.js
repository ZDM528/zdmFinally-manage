import request from '../util/request'

const getNeed = (data) => {
  return request({
    url: '/supplyProjectData',
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


export {
  getNeed,
  addProjectData
}