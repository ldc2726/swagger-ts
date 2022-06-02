/*
 * @Author: decong.li
 * @Date: 2022/06/02 13:01:01 Thursday
 * @LastEditors: decong.li
 * @LastEditTime: 2022/06/02 13:57:51 Thursday
 * @FilePath: /swagger-ts/utils/msg.js
 */
const { default: axios } = require('axios');
const { readFile } = require("./writeFs")
exports.qywxMsg = function( apiName, newVsion, apiUrl){
  let datas ={
    "msgtype": "markdown",
    "markdown": {
      "content": `接口服务：${apiName} \n更新版本：<font color=\"warning\">${newVsion}</font>\n文档地址：[点击查看](${apiUrl}/${apiName}) `
    }
  }
  readFile('./config.json').then(res=>{
    const config = JSON.parse(res);
    axios.post(`${config.hook}`,datas).then((response) => {
    }).catch((e) => {
        console.log(e)
    })
  })
}

exports.fsMsg = function(apiName, newVsion, apiUrl, email){
  let datas = {
    "email": email,
    "msg_type": "post",
    "content": {
      "post": {
        "zh_cn": {
          "title": "DIAP swagger版本通知",
          "content": [
            [
              {
                "tag": "text",
                "un_escape": true,
                "text": "接口服务&nbsp;:"
              },
              {
                "tag": "text",
                "un_escape": true,
                "text": `${apiName}`
              },
            ],
            [
              {
                "tag": "text",
                "text": "更新版本 :"
              },
              {
                "tag": "text",
                "text": newVsion
              }
            ],
            [
              {
                "tag": "text",
                "text": "文档地址 :"
              },
              {
                "tag": "a",
                "text": "点击查看",
                "href": `${apiUrl}/${apiName}`
              },
            ]
          ]
        }
      }
    }
  }
  readFile('./config.json').then(res=>{
    const config = JSON.parse(res);
    axios({
      url: config.hook,
      data: datas,
      type: 'post',
      headers: {
        Authorization: config.token,
        "Content-Type": "application/json; charset=utf-8"
      }
    })
  })
}