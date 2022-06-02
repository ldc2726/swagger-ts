
# demo-api
api地址：[swagger-doc](http://10.100.20.166:10001/swagger/v1/swagger.json)

根据`swagger.json`地址迅速生成接口相关的`interface`定义类型模块命令行工具。

## 教程

### 1. 安装

```
npm install demo-api -S
```

### 2. 引入使用API 请求参数/相应参数的判断
```
import { Api, types } from 'demo-api'

type CreateAuditConfigVO = types.CreateAuditConfigVO

const datas = ref<CreateAuditConfigVO>({
  createAuditConfigRoleList:[]
})

Api.createOrgUsingPOST(datas.value).then( res=> {
    console.log(res)
})
```
### 3. 修改请求拦截的操作---必须定义完毕在src中引用
做了一点优化，当项目存在多个api时，只需要引入`setRequest`方法即可享用全局的axios实例
```
import { setRequest } from "demo-api";
import axios from 'axios'
interface PostData {
  url: string;
  data?: any;
}
export interface IDataType<T = any> {
  code: number
  isSuccess?: boolean
  message: string
  result: T
} 
class Http {
  static $http = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL
  })
  static $delete = async <T>(postda: PostData) => {
		const res = await Http.$http.delete<IDataType<T>>(postda.url, {params:postda.data?postda.data:{}})
		return res.data.result
	}
  static $get = async <T>(postda: PostData) => {
		const res = await Http.$http.get<IDataType<T>>(postda.url, {params:postda.data?postda.data:{}})
		return res.data.result
	}
  static $post = async <T>(postda: PostData) => {
		const res = await Http.$http.post<IDataType<T>>(postda.url, {params:postda.data?postda.data:{}})
		return res.data.result
	}
  static $put = async <T>(postda: PostData) => {
		const res = await Http.$http.put<IDataType<T>>(postda.url, {params:postda.data?postda.data:{}})
		return res.data.result
	}
}
setRequest(Http)
```

