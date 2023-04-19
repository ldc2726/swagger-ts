
import * as types from './../swagger-utils/index'
import { HttpRequest } from './../main'  

type integer = number  


/**
 * 词云接口
 */
export const Query = (data: types.WordCloudQueryRequest) => {
  return HttpRequest().$post<types.QueryRes>({
    url: '/extend/word-cloud',
    data: data
  })
}


/**
 * 下钻接口
 */
export const DrillDown = (data: types.DrillDownRequest) => {
  return HttpRequest().$post<types.DrillDownRes>({
    url: '/extend/drill-down',
    data: data
  })
}


/**
 * 文档源接口
 */
export const Source = (data: types.DocSourceRequest) => {
  return HttpRequest().$post<types.SourceRes>({
    url: '/extend/doc-source',
    data: data
  })
}


/**
 * 保存主体以及规则接口
 */
export const SaveMainParty = (data: types.MainPartyRequest) => {
  return HttpRequest().$post<types.SaveMainPartyRes>({
    url: '/dataCenter/saveMainParty',
    data: data
  })
}


/**
 * 保存自定义维度接口
 */
export const SaveDimension = (data: types.DimensionRequest) => {
  return HttpRequest().$post<types.SaveDimensionRes>({
    url: '/dataCenter/saveDimension',
    data: data
  })
}


/**
 * 数据查询接口
 */
export const Query_1 = (data: types.QueryRequest) => {
  return HttpRequest().$post<types.Query_1Res>({
    url: '/dataCenter/query',
    data: data
  })
}


/**
 * 查询主体的下拉框的数据接口
 */
export const QueryMainPartyList = () => {
  return HttpRequest().$post<types.QueryMainPartyListRes>({
    url: '/dataCenter/queryMainPartyList'
  })
}


/**
 * 查询信源接口
 */
export const QuerySources = (data: types.BaseRequest) => {
  return HttpRequest().$post<types.QuerySourcesRes>({
    url: '/dataCenter/query/querySources',
    data: data
  })
}


/**
 * 查询度量的组册列表接口
 */
export const QueryMetricsList = (data: types.QueryMetricsList) => {
  return HttpRequest().$post<types.QueryMetricsListRes>({
    url: '/dataCenter/metrics/list',
    data: data
  })
}


/**
 * 查询普通维度接口
 */
export const QueryDimensionList = (data: types.QueryDimensionList) => {
  return HttpRequest().$post<types.QueryDimensionListRes>({
    url: '/dataCenter/dimension/list',
    data: data
  })
}


/**
 * 自定义维度列表接口
 */
export const DimensionListCustomer = () => {
  return HttpRequest().$post<types.DimensionListCustomerRes>({
    url: '/dataCenter/dimension/list/custom'
  })
}


/**
 * undefined
 */
export const Index = () => {
  return HttpRequest().$get<any>({
    url: '/_health'
  })
}

