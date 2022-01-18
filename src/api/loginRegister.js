
import request from '../util/request'

const login = (data) => {
    return request({
        url: '/login',
        method: 'post',
        data
    })
}

const register = (data) => {
    return request({
        url: '/register',
        method: 'post',
        data
    })
}

export {
    login,
    register
}