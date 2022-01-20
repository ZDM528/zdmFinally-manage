import request from '../util/request'

const getCommunityData = (data) => {
    return request({
        url: '/getCommunityData',
        method: 'post',
        data
    })
}

export {
    getCommunityData
}