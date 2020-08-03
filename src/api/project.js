import request from './index'
import QS from 'qs';

const local = 'http://192.168.31.80:15000'; // 本地ip

export function senToken() {
    return request({
        url: `https://lgts.mynatapp.cc?token=F9C02B4E79BDA2D6A8A2D93E618DB831`,
        method: 'get'
    })
}

/**
 *
 *公网ip获取
 * @export
 * @returns
 */
export function getIp() {
    return request({
        url: `${local}/common/ip`,
        method: 'get'
    })
}

/**
 * 查询分类列表
 *
 * @export
 * @returns
 */
export function listAll(params) {
    return request({
        url: "/caseTypes/listAll",
        method: 'get',
        params
    })
}


// 获取案例列表
export function caseList(params) {
    return request({
        url: "/caseLists/listPage",
        method: 'get',
        params
    })
}


// 案例列表详情
export function listAllPcDetailsImgs(params) {
    return request({
        url: `/caseLists/listAllPcDetailsImgs`,
        method: 'get',
        params
    })
}



export function znglStatic(params) {
    return request({
        url: '/zngl/static',
        method: 'get',
        params
    })
}


/**
 *
 * 提交预约
 * @export
 * @param {*} data
 * 
 * source 来源(pc/mini)
 * @returns
 */
export function add(data) {
    return request({
        url: 'reservations/add',
        method: 'post',
        data
    })
}