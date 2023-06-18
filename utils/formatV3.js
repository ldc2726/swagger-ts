/*
 * @Author: decong.li
 * @Date: 2022/03/25 15:30:41 Friday
 * @LastEditors: decong.li
 * @LastEditTime: 2023/04/24 16:18:45 Monday
 * @FilePath: /swagger-ts/utils/formatV3.js
 */
function GetType(data){
  return data['application/json'] || data['text/json'] || data['multipart/form-data']
}
exports.formatV3 = function (res) {
  for (const key in res.data.paths) {
    if (Object.hasOwnProperty.call(res.data.paths, key)) {
      const element = res.data['paths'][key];
      // 处理请求参数
      // if(element.get&&element.get.parameters){
      //   // element.get.parameters = [{
      //   //   "in": "body",
      //   //   "name": element.get.operationId,
      //   //   "description": element.get.operationId,
      //   //   "required": true,
      //   //   "schema":
      //   // }]
      // }
      // 处理响应结果
      let elementData = element.post || element.delete|| element.put||  element.get || element.patch
      if(elementData&&elementData.requestBody){
        try {
          elementData.parameters = [{
            "in": "body",
            "name":elementData.operationId,
            "description": elementData.operationId,
            "required": true,
            "schema": findValue(elementData.requestBody,'schema')
            // GetType(elementData.requestBody['content'])['schema']
          }]
        } catch (error) {
          console.log('请检查接口（格式是否正确,如非常规格式记得反馈）：'+ key)
        }
        
      }
      
      if(elementData.responses['200']['content']){
        try {
          elementData.responses['200']={
            schema: findValue(elementData.responses,'schema')
            //  GetType(elementData.responses['200']['content'])['schema']
          }
        } catch {
          console.log('请检查接口（格式是否正确,如非常规格式记得反馈）：'+ key)
        }
      }
    }
    //处理DTO
    for (const i in res.data['components']['schemas']) {
      if (Object.hasOwnProperty.call(res.data['components']['schemas'], i)) {
        let element2 = res.data['components']['schemas'][i];
        element2['title'] = i
        for (const j in element2['properties']) {
          if (Object.hasOwnProperty.call(element2['properties'], j)) {
            const element3 = element2['properties'][j];
            if(element3&&element3.allOf){
              element2['properties'][j]=element3.allOf[0]
            }
            if(element3&&element3.$ref){
              element2['properties'][j]['items'] = element3
            }
          }
        }
      }
    }
  }
  return res
}

function findValue(obj, key) {
  if (obj.hasOwnProperty(key)) {
    return obj[key];
  }
  
  for (let prop in obj) {
    if (typeof obj[prop] === 'object' && obj[prop] !== null) {
      const result = findValue(obj[prop], key);
      if (result !== undefined) {
        return result;
      }
    }
  }
  
  return undefined;
}
exports.findValue = findValue