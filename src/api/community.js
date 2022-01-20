import request from '../util/request'

const getCommunityData = (data) => {
    return request({
        url: '/getCommunityData',
        method: 'post',
        data
    })
}

const post = (data) => {
    return request({
        url: '/addCommunityData',
        method: 'post',
        data
    })
}

export {
    getCommunityData,
    post
}