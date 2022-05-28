/*
 * @Author: decong.li
 * @Date: 2022/03/05 18:17:51 Saturday
 * @LastEditors: decong.li
 * @LastEditTime: 2022/04/01 13:04:20 Friday
 * @FilePath: /vue-swagger-cmd/utils/writeFs.js
 */

var fs = require('fs');
var path = require('path');
/**
 * 模板初始状态 
 * @param {*} name 名称
 * @param {*} dos interface的注释
 * @returns 
 */

exports.initDom = function (name, dos) {
  name = name.replace('«', '').replace('»', '')
  return `
/**
* ${dos}
*/
export interface ${name} {
  ##
}
`
}

exports.defineInitDom = function(name,type){
  name = name.replace('«', '').replace('»', '')
  return `
/**
* ${name} --自定义类型
*/
type ${name} = ${type}
`
}


/**
 * 请求api的封装
 * @param {*} reqData 
 * @param {*} resData 
 * @param {*} url 
 * @returns 
 */
exports.InitHttpDom = function (name, reqData, resData, url, dos, method) {
  name = name.replace('-','')
  name = name.substring(0,1).toLowerCase() + name.substring(1)
  reqData = reqData.replace('«', '').replace('»', '')
  resData = resData.replace('«', '').replace('»', '')
  let isPath = false, newUrl = url
  if (url.indexOf('}') != -1) {
    isPath = true
    newUrl = url.replace(/\{[^\)]*\}/g, "")
  }
  reqData = reqData?'data: types.' + reqData:''
  return `
/**
 * ${dos}
 */
export const ${name} = (${isPath ? 'id: string | number, data: any' :  reqData}) => {
  return HttpRequest().${method}<${resData}>({
    url: '${newUrl}'${isPath ? '+ id' : ''}${reqData?',\n    data: data':''}
  })
}
`
}
//创建文件夹
exports.mkdirs = function(dir){
  return new Promise((resolve)=>{
    // var fliename = path.join(__dirname,`./${dir}`);
    // console.log(fliename)
    fs.mkdir(`./${dir}`,{recursive:true},(err)=>{
        if(err){
          throw err;
        }else{
          resolve('ok')
        }
    });
  })
}

// 写入文件
exports.WriteFile = function (FilePath, obj) {
  fs.writeFile(FilePath, obj, { 'flag': 'w+' }, function (err) {
    if (err) {
      throw err;
    }
  })
}

// 初始模板

exports.apiInitDom = function(path){
  return `
import * as types from './../swagger-utils/${path}'
import { HttpRequest } from './../main'  \n
type integer = number  \n
`
}