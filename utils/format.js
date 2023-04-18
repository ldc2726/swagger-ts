/*
 * @Author: decong.li
 * @Date: 2022/03/05 18:19:23 Saturday
 * @LastEditors: decong.li
 * @LastEditTime: 2023/04/18 18:18:36 Tuesday
 * @FilePath: /swagger-ts/utils/format.js
 */

// 没有命名规则的接口将自动以url的后两位为命名

exports.rename = function (element,key) {
  let name;
  if(element.operationId){
    name = formatGlobalName(element.operationId)
  } else {
    const keylist = key.split('/')
    name = keylist[keylist.length-2]+keylist[keylist.length-1]
    name = formatGlobalName(name)
  }
  return name;
}



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
exports.formatRequestData = function(element,name){
  if (element.parameters) {
    let arr = element.parameters.filter((value) => {
      return value.in == "body"
    })
    // 兼容v3版本
    let arr2 = element.parameters.filter((value) => {
      return value.in == "query"
    })
    try {
      if(arr.length>0){
        arr = arr[0]['schema']?.items || arr[0]['schema']
        arr = arr['$ref'].split('/')
        let requestData = arr[arr.length-1]
        return requestData
      }
    } catch (error) {
      return 'any'
    }
    
    if(arr2.length>0){
      return name
    }
  }
  return ''
}

exports.formatRefName = function(name){
  name = name.items.$ref.split('/');
  name = name[name.length - 1]
  return formatGlobalName(name)
}

function formatGlobalName(name){
  let newName = ''
  name = name.replace(/[^a-zA-Z0-9_\u4e00-\u9fa5]/g,'-')
  name = name.split('-')
  name.map(item=>{
    newName += (item.substring(0,1).toUpperCase() + item.substring(1))
  })
  return newName
}
exports.formatGlobalName = formatGlobalName

/**
 * int64 和 int32 的兼容
 * @param {*} items  当前数据
 * @param {*} isRes  是否为请求结果
 */
exports.formatInt64 = function(items,isRes=false){
  const format = items.format || items.items?.format || ''
  let typeName = ''
  if(format == 'int64'){
    if(items.type == "array"){
      if(isRes){
        return 'number[]'
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
    typeName = items.items.$ref.split('/').pop()
    typeName = formatGlobalName(typeName)
    return typeName+'Res[]'
  }
  if(items.$ref){
    typeName = items.$ref.split('/').pop()
    typeName = formatGlobalName(typeName)
    return typeName
  }
  return items.type
}


