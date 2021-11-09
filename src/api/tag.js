
import request from '../util/request'

const getTag = () => {
    return request({
        url: "/getTag",
        method: 'get'
    })
}

const deleteTag = (data) => {
    return request({
        url: "/deleteTag",
        method: 'delete',
        params: data,
    })
}

const changeTag = () => {

}

const addTag = (data) => {
    return request({
        url: "/addTag",
        method: 'post',
        data,
    })
}

const checkTag = (data) => {
    return request({
        url: '/checkTag',
        method: 'get',
        params:data
    })
}

export {
    getTag,
    deleteTag,
    changeTag,
    addTag,
    checkTag
}