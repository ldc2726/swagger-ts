# swagger-ts-api
当前端web项目中应用了ts，我们不可能对成千上百的接口进行 `interface`的类型定义,那样效率是极低的，但是我们又需要ts智能友好的提示信息，该怎么办？这是我们必须要面对的问题。

⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️开源不易，点个star⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️

## 介绍
根据`swagger.json`地址迅速生成ts接口，以及相关请求响应参的`interface`模块命令行工具。且支持swagger的V1和V2版本。该插件的宗旨是利用swagger接口文档让前端的效率变得更高，接口的请求参、响应参以及接口命名将不在需要手动引入，让前端更聚焦在业务功能的开发，接口将全面与swagger进行同步。

## 快速入门

### 1. 安装

```
npm install swagger-ts-api -g
```

### 2. 跟随引导操作

##### 在自己目录中执行添加命令：
```
swagger -a #添加新的swagger api
swagger -a + #添加新的swagger api 并发布到npm，请确保自己的npm已经登陆

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
swagger -u #更新的swagger api
swagger -u + #更新的swagger api并发布到npm，请确保自己的npm已经登陆
swagger -h  #查看帮助
```

```
# 效果：
swagger -u
? 请选择更新的api: test-api
✔ swagger api同步完成！
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

ps：这里不建议大家添加swagger接口直接生成到开发项目中去，更建议大家结合`npm私服`的版本管理方式，否则每次更新将全部替换代码，让我们的前端代码变得不可控。同时也要求swagger文档字段定义清晰，不规范的文档将会有很多不可控的因素。

