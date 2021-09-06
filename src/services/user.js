/**
 * 用户相关请求模块
 */

import request from '../utils/request'

// test
export const test = params => {
  return request({
    method: 'POST',
    url: '/o/uc/1.0/uiww/getGroupManageUnitList',
    params
  })
}
