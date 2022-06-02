/*
 * @Author: decong.li
 * @Date: 2022/03/08 10:05:32 Tuesday
 * @LastEditors: decong.li
 * @LastEditTime: 2022/03/08 15:49:46 Tuesday
 * @FilePath: /swagger-api-template/main.ts
 */
import * as types from './swagger-utils/index'
import * as Api from './swagger-api/index'
interface PostData {
  url: string;
  data?: any;
}


interface Request {
	$get<T>(PostData:PostData):(Promise<T>) 
	$post<T>(PostData:PostData):(Promise<T>) 
	$delete<T>(PostData:PostData):(Promise<T>) 
	$put<T>(PostData:PostData):(Promise<T>) 
}

let request:Request;
export function setRequest(requestInstant: any){
	request = requestInstant;
}


export function HttpRequest(){
	return {
		$get: request.$get,
		$post: request.$post,
		$delete: request.$delete,
		$put: request.$put,
	}
}

export type SwaggerResponse<R> = R

export {
  types,
	Api
}