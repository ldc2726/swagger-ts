#!/usr/bin/env node

const { default: axios } = require('axios');
const program = require("commander");
const inquirer = require("inquirer");
const download = require("download-git-repo");
const ora = require("ora");
var exec = require('child_process').exec;
const chalk = require("chalk");
const { FormatJsonDom, filterAttribute, formatRequestData, formatRefName,formatInt64,rename } = require('../utils/format')
const { typeData, requestType } = require('../utils/request')
const { initDom, InitHttpDom, WriteFile, mkdirs, apiInitDom, defineInitDom } = require('../utils/writeFs')
const { formatV3 } = require('../utils/formatV3')
const { versionUpdate } = require('../utils/version')
const { readFile } = require("./../utils/writeFs")
const { qywxMsg, fsMsg } = require("./../utils/msg")
var fs = require('fs');
const loading = ora("接口生成中，请稍后⋯⋯");
let newVsion = '1.0.0'
let gitUrl = "github:ldc2726/swagger-api-template"
const activeName = []
program.version("0.0.1")
program.option("-i, --init [name]", "init a project", "myapp");
program.option('-a, --add', 'add swagger api').on("option:add", function () {
  const questions = [
    {
      type: "input",
      name: "url",
      message: "请输入swagger.json的地址",
      default: '',
      filter: value => value.trim(),
      validate: value => {
        const validate = value.trim().split(" ").length === 1 && value.trim().indexOf('http') != -1;
        return validate || "不合法，请输入正确的http/https swagger.json 地址";
      },
      transformer: value => `：${value}`
    },
    {
      type: "input",
      name: "swagger",
      message: "请输入swagger apidoc的地址方便记录",
      default: '',
      filter: value => value.trim(),
      validate: value => {
        const validate = value.trim().split(" ").length === 1 && value.trim().indexOf('http') != -1;
        return validate || "不合法，请输入正确的http/https地址";
      },
      transformer: value => `：${value}`
    },
    {
      type: "input",
      name: "apiname",
      message: "请输入生成api的名称",
      default: '',
      filter: value => value.trim(),
      validate: value => {
        const validate = value.trim().split(" ").length === 1
        return validate || "不合法，请输入正确的api的名称";
      },
      transformer: value => `：${value}`
    }
  ];
  inquirer.prompt(questions).then(({ url, swagger, apiname }) => {
    loading.start();
    download(gitUrl, `./${apiname}`,  function (err) {
      if (err) {
        loading.fail("下载失败！");
        console.log(chalk.red(err));
        process.exit();
      } else {
        fs.readFile(`./${apiname}/package.json`, "utf8", (err, data) => {
          if (err) {
            console.log(chalk.red(err));
            process.exit();
          }
          const packageJson = JSON.parse(data);
          packageJson.name = apiname;
          packageJson.swaggerpath = url
          packageString = JSON.stringify(packageJson, null, 2);
          fs.writeFile(`./${apiname}/package.json`, packageString, "utf8", err => {
            if (err) {
              console.log(chalk.red(err));
              process.exit();
            }
            getSwaggerJson(url, apiname)
          })
          
        })

        const contentReadme = 
`
# ${apiname}
api地址：[swagger-doc](${swagger})\n
`
          fs.readFile(`./${apiname}/README.md`, "utf8", (err, data) => {
            if (err) {
              console.log(chalk.red(err));
              process.exit();
            }
            data = data.replace(/xxx/g,apiname)
            WriteFile(`./${apiname}/README.md`, contentReadme+data)
          })
      }
    })
  })
})
program.option('-u, --update', 'update api and publish npm').on("option:update", function () {
  fs.readdir('./', 'utf-8', async function (err, res) {
    if (err) {
      console.log(err)
      return;
    }
    const list = res.filter((val) => val.indexOf('.') == -1 && val != 'bin' && val != 'utils' && val != 'node_modules')
    const promptList = [{
      type: 'list',
      message: '请选择更新的api:',
      name: 'apiname',
      choices: list,
      filter: function (val) {
        return val
      }
    }];
    inquirer.prompt(promptList).then(({ apiname }) => {
      if( apiname.includes('@')) {
        fs.readdir(`./${apiname}`, 'utf-8', async function (err, res) {
          if (err) {
            console.log(err)
            return;
          }
          const promptLists = [{
            type: 'list',
            message: '请选择更新的api:',
            name: 'apinames',
            choices: res,
            filter: function (val) {
              return val
            }
          }];
          inquirer.prompt(promptLists).then(({ apinames }) => {
            versionUpdate(`./${apiname}/${apinames}`, getSwaggerJson)
          })
        })
        return;
      }
      versionUpdate(apiname, getSwaggerJson)
    })

  })
})
program.option('-s, --set', 'set global config').on("option:set", function () {
  const list = [
    "qywx",
    "feishu"
  ]
  const promptList = [{
    type: 'list',
    message: '请选择通知服务:',
    name: 'msgName',
    choices: list,
    filter: function (val) {
      return val
    }
  },{
    type: "input",
    name: "hook",
    message: "请输入hook的地址",
    default: '',
    filter: value => value.trim(),
    validate: value => {
      const validate = value.trim().split(" ").length === 1 && value.trim().indexOf('http') != -1;
      return validate || "不合法，请输入正确的hook的地址";
    },
    transformer: value => `：${value}`
  }]
  const feishuList = [
    {
      type: "input",
      name: "token",
      message: "请输入token",
      default: '',
      filter: value => value.trim(),
      transformer: value => `：${value}`
    },{
      type: "input",
      name: "email",
      message: "请输入飞书email地址",
      default: '',
      filter: value => value.trim(),
      transformer: value => `：${value}`
    }
  ]
  inquirer.prompt(promptList).then(({ msgName, hook }) => {
    if(msgName=="feishu"){
      inquirer.prompt(feishuList).then(({ token, email }) => {
        const packageJson = {
          "type": msgName,
          "hook": hook,
          "token": token,
          "email": email
        }
        packageString = JSON.stringify(packageJson, null, 2);
        fs.writeFile(`./config.json`, packageString, "utf8", err => {
          if (err) {
            console.log(chalk.red(err));
            process.exit();
          }
        })
      })
    }
    if(msgName=="qywx"){
      const packageJson = {
        "type": msgName,
        "hook": hook,
      }
      const packageString = JSON.stringify(packageJson, null, 2);
      fs.writeFile(`./config.json`, packageString, "utf8", err => {
        if (err) {
          console.log(chalk.red(err));
          process.exit();
        }
      })
    }
  })
})
program.parse(process.argv);

program.on("--help", function () {
  console.log("  Examples:");
  console.log("-a :添加一个新的swagger接口地址并发布");
  console.log("-a nopublish :添加一个新的swagger接口地址但不发布npm");
  console.log("-u :更新swagger地址并发布至npm");
  console.log("-u nopublish :仅更新swagger地址不发布");
  console.log("-s :配置通知服务");
  console.log("");
});

// 执行请求
async function getSwaggerJson(url, apiName, version) {
  axios.defaults.headers.common['Accept'] = 'application/json,*/*'
  axios.defaults.headers.common['Accept-Encoding'] = 'gzip, deflate'
  axios.defaults.headers.common['Accept-Language'] = 'zh-CN,zh;q=0.9,en;q=0.8'
  let res;
  try {
    res = await axios.get(url)
  } catch (error) {
    loading.fail("网络异常，接口请求失败！");
  }
  
  const config = {
    name: apiName + '/swagger-utils/',
    apiName: apiName + '/swagger-api/',
    typeDom: "",
    apiDom: ""
  }
  await mkdirs(apiName + '/swagger-utils')
  await mkdirs(apiName + '/swagger-api')
  if(url.indexOf('json')!=-1){
    res = formatV3(res)
  }
  const resData = res.data
  const pathList = res.data.paths;

  for (const key in pathList) {
    if (Object.hasOwnProperty.call(pathList, key)) {
      const element = typeData(pathList[key])
      QueryOneTree(resData, element, config, key)
      const data2 = {
        resData: resData,
        element: element,
        key: key,
        requestTypes: requestType(pathList[key]),
        swaggerItem: config
      }
      ResOneTree(data2)
    }
  }
  // 写入文件
  WriteFile(`./${config.name}index.ts`, `type integer = number\ntype array =[]\n` + config.typeDom)
  WriteFile(`./${config.apiName}index.ts`, apiInitDom('index') + config.apiDom)
  loading.succeed("swagger api同步完成！");
  if(!process.argv.includes('nopublish')){
    exec(`cd ${apiName} && npm publish`, function (error, stdout, stderr) {
      if (error) {
        loading.fail("发布失败！");
        console.error(error);
      }
      else {
        if(version){
          newVsion = version
        }
        readFile('./config.json').then(res=>{
          const config = JSON.parse(res)
          if( config.type == "qywx" ){
            qywxMsg(apiName.replace('./',''), newVsion, config.hook)
          }
          if( config.type == "feishu" ){
            fsMsg(apiName.replace('./',''), newVsion, config.hook, config.token, config.email)
          }

        })
        // qywxMsg(`${apiname}/${fsname}`, )
        loading.succeed(apiName+"，发布成功！版本："+newVsion);
      }
    });
  }
}


/**
   * ResOneTree 响应参数
   * @param {*} resData 
   * @param {*} element 
   * @param {*} key
   * @param {*} requestTypes 请求类型
   * @param {*} swaggerItem swaggerItem
   */
function ResOneTree(datas) {
  const { resData, element, key, requestTypes, swaggerItem } = datas
  if(!element['responses']['200']['schema']){
    ResTree('', resData, element, key, requestTypes, swaggerItem)
    return;
  }
  const pathQueryData = element['responses']['200']['schema']['$ref'];
  if (pathQueryData) {
    const itemData = FormatJsonDom(resData, pathQueryData) // 根据ref快速定位到JSON
    try {
      ResTree(itemData, resData, element, key, requestTypes, swaggerItem)
    } catch (error) {
      console.log(error,'path:',key)
    }
  }
}

/**
 * ResLoopTree 返回参数处理
 * @param {*} itemData ref对应的json
 * @param {*} resData swagger全部的数据
 * @param {*} element 当前这一条path数据
 * @param {*} key 当前这一条接口URL
 */
function ResTree(itemData, resData, element, key, requestTypes, swaggerItem) {
  let result;
  if(!itemData){
    result = 'any'
  } else {
    const properties = itemData['properties']
    result = properties.result || properties.data || 'any'
  }
  let name = rename(element,key)
  const RequestData = formatRequestData(element,name)
  if (result && result.$ref) {
    const resOneData = FormatJsonDom(resData, result.$ref)
    ResLoopTree(resData, resOneData, element, swaggerItem)
    let httpreauestDom = InitHttpDom(name, RequestData ? RequestData : '', 'types.' + resOneData['title'], key, element.summary, requestTypes)
    swaggerItem.apiDom = swaggerItem.apiDom + httpreauestDom + '\n'
  } else {
    if (result.type == "array" && result.items.$ref) {
      const resOneData = FormatJsonDom(resData, result.items.$ref)
      ResLoopTree(resData, resOneData, element, swaggerItem)
    }
    let httpreauestDom = InitHttpDom(name, RequestData ? RequestData : '',result=='any'?'any': (result.type == 'array' ? result.items.type || 'types.' + formatRefName(result) + '[]' : result.type || 'any'), key, element.summary, requestTypes)
    swaggerItem.apiDom = swaggerItem.apiDom + httpreauestDom + '\n'
  }
}
function ResLoopTree(resData, properties, element, swaggerItem) {
  try {
    if (!properties['properties']) {
      // 如果递归到最后一层，没有子属性且本身就是一个类型的话，并且没有定义过该名称
      if(properties.type&&!activeName.includes(properties.title)){
        swaggerItem.typeDom = swaggerItem.typeDom + `export type ${properties.title} = ${properties.type} \n`
        activeName.push(properties.title)
      }
      return;
    }
    const propertiesLength = Object.keys(properties['properties']).length;
    let nums = 0;
    let InitDom = initDom(properties.title, element ? element.summary + 'Res' : properties.title + 'Res')
    for (const i in properties['properties']) {
      nums++
      if (Object.hasOwnProperty.call(properties['properties'], i)) {
        const item = properties['properties'][i];
        if ((item.items && item.items.$ref)||item.$ref) {
          let nameRef = item.$ref?item.$ref:item.items.$ref,name;
          name = nameRef.split('/');
          name = name[name.length - 1]
          if (propertiesLength == nums) {
            InitDom = InitDom.replace('##', `${i}: ${formatInt64(item,true)};// ${item.description}`)
          } else {
            InitDom = InitDom.replace('##', `${i}: ${formatInt64(item,true)};// ${item.description}\n  ##`)
          }
          if (properties.title != name) {
            const propertiesItem = FormatJsonDom(resData, nameRef)
            ResLoopTree(resData, propertiesItem, '', swaggerItem)
          }
        } else {
          if (propertiesLength == nums) {
            InitDom = InitDom.replace('##', `${i}: ${formatInt64(item,true)};// ${item.description}`)
          } else {
            InitDom = InitDom.replace('##', `${i}: ${formatInt64(item,true)};// ${item.description}\n  ##`)
          }
        }
      }
    }
    if (activeName.includes(properties.title)) {
      return;
    }
    activeName.push(properties.title)
    swaggerItem.typeDom = swaggerItem.typeDom + InitDom + '\n'
  } catch (error) {
    console.log('path-error:',resOneData)
  }
  
}

/**
 * QueryOneTree
 * @param {*} resData 
 * @param {*} element 
 */
function QueryOneTree(resData, element, swaggerItem, key) {
  const pathQueryData = element['parameters'];
  if (pathQueryData) {
    const newArr2 = pathQueryData.filter((value) => {
      return value.in == "body"
    })
    const newArr = pathQueryData.filter((value) => {
      return value.in == "query"
    })
    // body 类型一定存在的 无参数除外
    if (newArr2.length != 0) {
      newArr2.map((item, i) => {
        LoopTree(item, resData, element, swaggerItem)
      })
    }
    // 如果是其他版本含有query参数的
    if (newArr.length != 0) {
      let initDomArr2;
      let name = rename(element,key)
      initDomArr2 = initDom(name,name)
      newArr.map((item,i)=>{
        if(newArr.length == i+1){
          initDomArr2 = initDomArr2.replace('##', `${item.name}?: ${item.schema.type?(item.schema.format=="int64"?"number|string":item.schema.type):item.name.substring(0,1).toUpperCase() + item.name.substring(1)};// ${item.description}`)
        } else {
          initDomArr2 = initDomArr2.replace('##', `${item.name}?: ${item.schema.type?(item.schema.format=="int64"?"number|string":item.schema.type):item.name.substring(0,1).toUpperCase() + item.name.substring(1)};// ${item.description}\n  ##`)
        }
        if(item.schema.$ref){
          LoopTree(item, resData, element, swaggerItem)
        }
      })
      if (activeName.includes(name)) {
        return;
      }
      activeName.push(name)
      swaggerItem.typeDom = swaggerItem.typeDom + initDomArr2 + '\n'
    }
  }

}

/**ss
 * 递归tree
 * @param {*} itemData 携带body的单条数据
 * @param {*} resData 全部的json数据，用来匹配
 * @param {*} element 当前这条数据，含path等
 */
function LoopTree(itemData, resData, element, swaggerItem, type=false) {
  try {
    let initDomArr2;
    let name = itemData.schema || itemData.items || itemData
    let name2 = name.$ref
    name = name2?.split('/')
    name = name[name.length - 1]
    const childAllData = FormatJsonDom(resData, name2);
    const propertiesData = childAllData['properties'];
    name = name.replace('«', '').replace('»', '')
    if(childAllData.type=="integer" || childAllData.type=="string"){
      initDomArr2 = defineInitDom(name,childAllData.format=="int64"?"number|string":childAllData.type)
    } else {
      if(!type){
        initDomArr2 = initDom(name, element?.summary || itemData.summary || itemData.description || name)
      }
      const numsetup = Object.keys(propertiesData).length
      let nums = 0
      for (const i in propertiesData) {
        if (Object.hasOwnProperty.call(propertiesData, i)) {
          const items = propertiesData[i];
          nums++
          
          // 如果还有继续递归 ts类型为 DTO[]
          if (items.items && items.items.$ref) {
            const urlname = items.items.$ref.split('/')
            if (numsetup == nums) {
              initDomArr2 = initDomArr2.replace('##', `${i}?: ${urlname[urlname.length - 1]}${items.type=='array'?'[]':''};// ${items.description || filterAttribute(i, element['parameters'])?.description}`)
            } else {
              initDomArr2 = initDomArr2.replace('##', `${i}?: ${urlname[urlname.length - 1]}${items.type=='array'?'[]':''};// ${items.description || filterAttribute(i, element['parameters'])?.description}\n  ##`)
            }
            LoopTree(items, resData, element, swaggerItem,type)
          } else {
            // 持续写入
            if (numsetup == nums) {
              initDomArr2 = initDomArr2.replace('##', `${i}?: ${formatInt64(items)};// ${items.description || filterAttribute(i, element['parameters'])?.description}`)
            } else {
              initDomArr2 = initDomArr2.replace('##', `${i}?: ${formatInt64(items)};// ${items.description || filterAttribute(i, element['parameters'])?.description}\n  ## `)
            }
          }
        }
      }
    }
    if (activeName.includes(name)) {
      return;
    }
    activeName.push(name)
    swaggerItem.typeDom = swaggerItem.typeDom + initDomArr2 + '\n'
  } catch (error) {
    console.log('error-path', element, error)
  }
}