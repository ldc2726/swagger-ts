/*
 * @Author: decong.li
 * @Date: 2022/03/25 15:30:41 Friday
 * @LastEditors: decong.li
 * @LastEditTime: 2022/05/30 00:47:30 Monday
 * @FilePath: /swagger-ts/utils/formatV3.js
 */
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
      let elementData = element.post || element.delete|| element.put||  element.get
      if(elementData&&elementData.requestBody){
        elementData.parameters = [{
          "in": "body",
          "name":elementData.operationId,
          "description": elementData.operationId,
          "required": true,
          "schema": elementData.requestBody['content']['application/json']['schema']
        }]
      }
      
      if(elementData.responses['200']['content']){
        elementData.responses['200']={
          schema:  elementData.responses['200']['content']['application/json']['schema']
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