import request from './index'
import QS from 'qs';

export function senToken() {
    return request({
        url: `https://lgts.mynatapp.cc?token=F9C02B4E79BDA2D6A8A2D93E618DB831`,
        method: 'get',
        // headers: {
        //     token: 'F9C02B4E79BDA2D6A8A2D93E618DB831'
        // },

    })
}

// pid不传默认pc opr不传默认list
export function caseType() {
    return request({
        url: "/zngl/caseType",
        method: 'post',
        data: {
            pid: 'pc'
        }
    })
}


export function caseList(data) {
    return request({
        url: '/zngl/caseList',
        method: 'post',
        data: data
    })
}


export function znglStatic(params) {
    return request({
        url: '/zngl/static',
        method: 'get',
        params
    })
}


export function submitInfoForm(data) {
    return request({
        url: '/userSubmitInfo',
        method: 'post',
        data
    })
}