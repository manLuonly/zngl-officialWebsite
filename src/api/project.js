import request from './index'
import QS from 'qs';

export function senToken() {
    return request({
        url: `https://lgts.mynatapp.cc?token=F9C02B4E79BDA2D6A8A2D93E618DB831`,
        method: 'get'
    })
}

// 获取公网ip
export function serviceLink() {
    return request({
        url: '/common/serviceLink',
        method: 'get',
    })
}

//  获取案例列表类型 pid不传默认pc opr不传默认list
export function caseType() {
    return request({
        url: "/zngl/caseType",
        method: 'get'
    })
}


// 获取案例列表
export function caseList(type, pageNum, pageSize) {
    return request({
        url: `/zngl/caseList?type=${type}&pageNum=${pageNum}&pageSize=${pageSize}`,
        method: 'get',
        headers: { 'Content-type': 'application/x-www-form-urlencoded; charset=utf-8' }
    })
}


// 案例列表详情
export function detail(id) {
    return request({
        url: `/zngl/caseList/detail?id=${id}`,
        method: 'get'
    })
}

export function znglStatic(params) {
    return request({
        url: '/zngl/static',
        method: 'get',
        params
    })
}


// 提交表单
export function submitInfoForm(data) {
    return request({
        url: '/zngl/order',
        method: 'post',
        data
    })
}