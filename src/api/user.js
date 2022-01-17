
import request from '../util/request'

const login = (data) => {
    return request({
        url: '/user',
        method: 'post',
        data
    })
}

export {
    login
}