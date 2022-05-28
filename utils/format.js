/*
 * @Author: decong.li
 * @Date: 2022/03/05 18:19:23 Saturday
 * @LastEditors: decong.li
 * @LastEditTime: 2022/04/02 10:51:59 Saturday
 * @FilePath: /vue-swagger-cmd/utils/format.js
 */

// 格式化寻找json对应的节点 inBodyArr[0]['schema']['$ref']
exports.FormatJsonDom = function (resData, url) {
  const JsonIndex = url.replace('#/', '').split('/');
  let newdata = resData
  JsonIndex.map(item => {
    newdata = newdata[item]
  })
  return newdata;
}


// 匹配同一属性的object 
exports.filterAttribute = function (name, element) {
  let arr = element.filter((value) => {
    return value.name == name
  })
  if (arr.length >= 1) {
    return arr[0]
  }
  return {}
}

//
exports.formatRequestData = function(element){
  if (element.parameters) {
    let arr = element.parameters.filter((value) => {
      return value.in == "body"
    })
    // 兼容v3版本
    let arr2 = element.parameters.filter((value) => {
      return value.in == "query"
    })
    if(arr.length>0){
      arr = arr[0]['schema']
      arr = arr['$ref'].split('/')
      let requestData = arr[arr.length-1]
      return requestData
    }
    if(arr2.length>0){
      let name = element.operationId.replace('-','')
      name = name.substring(0,1).toLowerCase() + name.substring(1)
      return name
    }
  }
  return ''
}

exports.formatRefName = function(name){
  name = name.items.$ref.split('/');
  name = name[name.length - 1]
  return name
}

/**
 * int64 和 int32 的兼容
 * @param {*} items  当前数据
 * @param {*} isRes  是否为请求结果
 */
exports.formatInt64 = function(items,isRes=false){
  const format = items.format || items.items?.format || ''
  if(format == 'int64'){
    if(items.type == "array"){
      if(isRes){
        return 'number'
      }
      return "number[]|string[]" 
    }
    if(isRes){
      return 'number'
    }
    return "number|string"
  }
  if(items.type == "array"){
    if(items.items.type){
      return items.items.type + "[]"
    }
    return items.items.$ref.split('/').pop().replace('«', '').replace('»', '')+'[]'
  }
  return items.type || items.$ref.split('/').pop().replace('«', '').replace('»', '')
}