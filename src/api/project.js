import request from './index'
import QS from 'qs';

export function caseTypes() {
    return request({
        url: "/caseTypes?model='project'&pid='pc'",
        method: 'get'
    })
}




export function caseLists(data) {
    return request({
        url: '/caseLists',
        method: 'post',
        headers: { 'content-type': 'application/x-www-form-urlencoded; charset=utf-8' },
        data: QS.stringify(data)
    })
}


export function znglStatic(params) {
    return request({
        url: '/zngl/static',
        method: 'get',
        headers: { 'content-type': 'application/x-www-form-urlencoded; charset=utf-8' },
        params
    })
}


export function submitInfoForm(data) {
    return request({
        url: '/userSubmitInfo',
        method: 'post',
        headers: { 'content-type': 'application/x-www-form-urlencoded; charset=utf-8' },
        data: QS.stringify(data)
    })
}