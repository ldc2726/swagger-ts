# swagger-ts-api
当前端web项目中应用了ts，我们不可能对成千上百的接口进行 `interface`的类型定义,那样效率是极低的，但是我们又需要ts智能友好的提示信息，该怎么办？这是我们必须要面对的问题。
## 介绍
根据`swagger.json`地址迅速生成ts接口，以及相关请求响应参的`interface`模块命令行工具。且支持swagger的V1、V2、V3版本。该插件的宗旨是利用swagger接口文档让前端的效率变得更高，接口的请求参、响应参以及接口命名将不在需要手动引入，让前端更聚焦在业务功能的开发，接口将全面与swagger进行同步。
## 使用方式
1.我们该插件推荐大家结合`git`和`npm`对生成的每个版本的ts请求文件进行版本管控，这样可以防止swagger变更带来的问题以便回退到旧的版本，因此你需要额外建立一个git用于存储本次生成的所有的api，一个npm发布管控npm包，项目组按照npm的版本进行拉去引入使用。

```mermaid
graph LR
A[api服务] -- 发布生成 --> B(swagger)
B -- 调用该插件 --> C{命令}
C -- -a命令添加-->D(生成ts请求文件与声明文件)
C -- -u命令更新 -->E(更新ts请求文件与声明文件)
D-->F(git)
E-->F
F-- 更新版本发布 -->G(npm)
G--拉取npm包-->前端业务代码
```

2.可以直接在项目中进行使用，这种方法稍微简单一点，缺点是一旦操作，代码将全部覆盖，不能回退，所以你要确保后端对接口文档没有进行调整，如命名、DTO命名、字段、类型等。所以不是特别推荐，但是简单，同样的你可以通过git历史来进行查找。

```mermaid
graph LR
A[api服务] -- 发布生成 --> B(swagger)
B -- 调用该插件 --> C{命令}
C -- -a命令添加-->D(生成ts请求文件与声明文件)
C -- -u命令更新 -->E(更新ts请求文件与声明文件)
D-->F(前端业务代码)
E-->F
```

## OSCS
[![OSCS Status](https://www.oscs1024.com/platform/badge/ldc2726/swagger-ts.svg?size=large)](https://www.oscs1024.com/project/ldc2726/swagger-ts?ref=badge_large)

## 快速入门

### 1. 安装

```
# 全局安装
npm install swagger-ts-api -g  
# 开发依赖安装
npm install swagger-ts-api -D 
# 生产依赖安装
npm install swagger-ts-api -S 
```

### 2. 跟随引导操作

##### 在自己目录中执行添加命令(发布npm和不发布npm的区别就在于 `nopublish` )：
```
swagger-ts -a #添加新的swagger api 并发布到npm，请确保自己的npm已经登陆

swagger-ts -a nopublish #添加新的swagger api，通常用于仅添加本地不采用npm管理版本，这句命令你也直接可以放到项目中的`package.json`，然后直接执行对应的命令

```

```javascript
{
  "scripts": {
    "swagger:add": "swagger-ts -a nopublish",
    "swagger:update": "swagger-ts -u nopublish"
  }
}
```


```
# 效果：
? 请输入swagger.json的地址 ：http://xxx/diap-bc/v1/swagger.json
? 请输入swagger apidoc的地址方便记录 ：http://xxx/dv1/swagger.html
? 请输入生成api的名称 ：test-api
⠼ 接口生成中，请稍后⋯⋯string
✔ swagger api同步完成！
```



##### 在自己目录中执行更新命令：
```
swagger-ts -u #更新的swagger api并发布到npm，请确保自己的npm已经登陆
swagger-ts -u nopublish #仅更新的swagger api，通常用于本地不采用npm管理版本
swagger-ts -h  #查看帮助
```

```
# 效果：
swagger-ts -u 
? 请选择更新的api: test-api
✔ swagger api同步完成！
```

##### 新增机器人通知服务（企业微信、飞书）：
```
swagger-ts -s
```
### 3. 如何使用生成的接口
生成的api会变成以下目录：
```
        ├── test-api                           // 生成的api目录
        │   ├── swagger-api                    // 请求文件
        │   │   ├── index.ts                   
        │   ├── swagger-utils                  // 请求参数、响应参数的类型声明和接口定义
        │   │   ├── index.ts                   
        │   ├── main.ts                        // 入口文件，如果未发布npm可以直接导入该路径    
        │   ├── package.json                   // 备用，控制 api 版本
        │   ├── .npmignore                     // npm包发布过滤项 
        │   ├── README.md                      // api使用介绍 （这里是以发布npm为例的使用介绍）
```   

我们每个接口都有对应的注释说明，这样也就方便大家直接检索，严格按照swagger文档进行解析而来，需要注意的是`int64`和`int32`在前端js里面无法进行严格的区分，只有`number`类型，为避免`number`js长度限制所以我们这里会直接定义`number｜string`类型.文件内容展示：

``` javascript
// test-api/swagger-api/index.ts

import * as types from './../swagger-utils/index'
import { HttpRequest } from './../main'
/**
 * 获取：地址编码[地址信息入参]
 */
export const mapGetGeo = (data: types.GetGeoDto) => {
  return HttpRequest().$post<types.GeoAddressVo>({
    url: '/infra/v1/Map/GetGeo',
    data: data
  })
}
```
``` javascript
// test-api/swagger-utils/index.ts

/**
* 获取：地址编码[地址信息入参]
*/
export interface GetGeoDto {
  address?: string;// 地址：结构化地址信息
  province?: string;// 省份
  city?: string;// 城市名称  
}

/**
* 获取：地址编码[地址信息入参]Res
*/
export interface GeoAddressVo {
  name: string;
  streetNumber: string;
  level: string;
  precise: boolean;
  confidence: integer;
  tenantId?: number|string;// 租户id
}

```
### 4. 如何使用生成的接口
生成后项目中，以xxx-api为例，项目内部有一个`README.md `文件，可以按步骤操作或者点击[使用说明](https://github.com/ldc2726/swagger-api-template)

### 注意：
1. 这里不建议大家添加swagger接口直接生成到开发项目中去，更建议大家结合`npm私服`的版本管理方式，否则每次更新将全部替换代码，让我们的前端代码变得不可控。
2. 要求swagger文档字段定义清晰，不规范的文档将会有很多不可控的因素。
3. 项目中接口方法命名，请求参原则上是以`operationId`和 `DTO`进行命名，如果没有，插件将会以`path路径`后两位进行命名，如：
`/api/v1/abccodereport/getgoodnames` => `abccodereportGetgoodnames`

⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️开源不易，麻烦大家点个star，谢谢⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️



