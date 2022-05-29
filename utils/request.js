/*
 * @Author: decong.li
 * @Date: 2022/03/05 18:16:11 Saturday
 * @LastEditors: decong.li
 * @LastEditTime: 2022/05/30 00:30:07 Monday
 * @FilePath: /swagger-ts/utils/request.js
 */

/**
 * 判断生成的请求方式
 * @param {*} data 
 * @returns 
 */
exports.requestType = function (data) {
  if (data['get']) {
    return '$get'
  }
  if (data['delete']) {
    return '$delete'
  }
  if (data['put']) {
    return '$put'
  }
  return '$post'
}


/**
 * 读取不同类型下的数据
 * @param {*} data 
 * @returns 
 */
exports.typeData = function (data) {
  return data['post'] || data['delete'] || data['get'] || data['put'];
}