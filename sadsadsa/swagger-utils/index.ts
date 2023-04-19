type integer = number
type array =[]

/**
* 词云接口
*/
export interface ConditionGroupVo {
  key?: string;// 筛选条件
  operator?: string;// 操作 例如[=,!=,exist]
  value?: string;// 操作对应的值
  allowNull?: integer;// 是否允许空值-0不允许-1允许    
}


/**
* 词云接口
*/
export interface RowVo {
  id?: number|string;// 维度对应的id 
}


/**
* 词云接口
*/
export interface ColumnVo {
  id?: number|string;// 维度对应的id 
}


/**
* 词云接口
*/
export interface MetricsVo {
  id?: number|string;// 度量对应的id
  type?: integer;// 度量对应的操作类型[max,min,card,Range等],具体对应枚举  
}


/**
* 词云接口
*/
export interface WordCloudQueryRequest {
  mainPartyId?: number|string;// 查询主体id
  startDate?: string;// 查询开始时间
  endDate?: string;// 查询结束时间
  extraCondition?: ConditionGroupVo[];// 查询外条件组
  rowVo?: RowVo[];// 查询条件-行
  columnVo?: ColumnVo;// undefined
  metricsVo?: MetricsVo[];// 查询条件-度量
  top?: integer;// 查询条件-数量限制    
}


/**
* WordCloudVoRes[]
*/
export interface WordCloudVoRes {
  word: string;// undefined
  frequency: number;// undefined
  docCount: integer;// undefined
  pos: string;// undefined
}


/**
* DocSourceVoRes[]
*/
export interface DocSourceVoRes {
  docId: string;// undefined
  title: string;// undefined
  author: string;// undefined
  mediaSource: string;// undefined
  createTime: string;// undefined
}


/**
* 词云接口
*/
export interface QueryRes {
  wordCloud: WordCloudVoRes[];// undefined
  docSource: DocSourceVoRes[];// undefined
}


/**
* 下钻接口
*/
export interface DrillDownRequest {
  mainPartyId?: number|string;// 查询主体id
  startDate?: string;// 查询开始时间
  endDate?: string;// 查询结束时间
  extraCondition?: ConditionGroupVo[];// 查询外条件组
  rowVo?: RowVo[];// 查询条件-行
  columnVo?: ColumnVo;// undefined
  metricsVo?: MetricsVo[];// 查询条件-度量
  top?: integer;// 查询条件-数量限制    
}


/**
* StatisticsVoRes[]
*/
export interface StatisticsVoRes {
  key: string;// undefined
  value: string[];// undefined
  children: StatisticsVoRes[];// undefined
}


/**
* 下钻接口
*/
export interface DrillDownRes {
  data: StatisticsVoRes[];// undefined
  columnNames: string[];// undefined
}


/**
* 文档源接口
*/
export interface DocSourceRequest {
  mainPartyId?: number|string;// 查询主体id
  startDate?: string;// 查询开始时间
  endDate?: string;// 查询结束时间
  extraCondition?: ConditionGroupVo[];// 查询外条件组
  rowVo?: RowVo[];// 查询条件-行
  columnVo?: ColumnVo;// undefined
  metricsVo?: MetricsVo[];// 查询条件-度量
  top?: integer;// 查询条件-数量限制    
}


/**
* 文档源接口
*/
export interface SourceRes {
  docSource: DocSourceVoRes[];// undefined
}


/**
* 保存主体以及规则接口
*/
export interface ConditionGroupsVo {
  vos?: ConditionGroupVo[];// 外条件组包含内条件组
}


/**
* 保存主体以及规则接口
*/
export interface MainPartyRequest {
  organizationId?: number|string;// 机构id
  userId?: number|string;// 用户id
  rangeOfAction?: string;// 作用范围,[用分号；拼接成字符串]
  contains?: array[];// 包含子词组,组成一个二维数组
  excludes?: string[];// 不包含子词组,组成一个数组
  conditions?: ConditionGroupsVo[];// 外条件组,外条件组是数组，包含内条件组，内条件组也是数组
  type?: string;// 类型
  name?: string;// 主体名称
  group?: string;// 主体所在的分组名        
}


/**
* 保存主体以及规则接口
*/
export interface SaveMainPartyRes {
  success: boolean;// undefined
  errorMessage: string;// undefined
  errorCode: integer;// undefined
  data: object;// undefined
}


/**
* 保存自定义维度接口
*/
export interface DimensionRequest {
  organizationId?: number|string;// 机构id
  userId?: number|string;// 用户id
  rangeOfAction?: string;// 作用范围,[用分号；拼接成字符串]
  contains?: array[];// 包含子词组,组成一个二维数组
  excludes?: string[];// 不包含子词组,组成一个数组
  conditions?: ConditionGroupsVo[];// 外条件组,外条件组是数组，包含内条件组，内条件组也是数组
  isShare?: integer;// 是否共享 0不共享 1共享
  dimensionName?: string;// 自定义维度名称
  dimensionValue?: string;// 自定义维度的值
  type?: string;// 自定义维度的类型值[参考页面]         
}


/**
* 保存自定义维度接口
*/
export interface SaveDimensionRes {
  success: boolean;// undefined
  errorMessage: string;// undefined
  errorCode: integer;// undefined
  data: object;// undefined
}


/**
* 数据查询接口
*/
export interface QueryRequest {
  mainPartyId?: number|string;// 查询主体id
  startDate?: string;// 查询开始时间
  endDate?: string;// 查询结束时间
  extraCondition?: ConditionGroupVo[];// 查询外条件组
  rowVo?: RowVo[];// 查询条件-行
  columnVo?: ColumnVo;// undefined
  metricsVo?: MetricsVo[];// 查询条件-度量
  top?: integer;// 查询条件-数量限制    
}


/**
* QueryResponse
*/
export interface QueryResponse {
  data: StatisticsVoRes[];// undefined
  columnNames: string[];// undefined
}


/**
* 数据查询接口
*/
export interface Query_1Res {
  success: boolean;// undefined
  errorMessage: string;// undefined
  errorCode: integer;// undefined
  data: QueryResponse;// undefined
}


/**
* MainpartyListResponseRes[]
*/
export interface MainpartyListResponseRes {
  name: string;// undefined
  type: string;// undefined
  group: string;// undefined
  mainPartyId: number;// undefined
}


/**
* 查询主体的下拉框的数据接口
*/
export interface QueryMainPartyListRes {
  success: boolean;// undefined
  errorMessage: string;// undefined
  errorCode: integer;// undefined
  data: MainpartyListResponseRes[];// undefined
}


/**
* 查询信源接口
*/
export interface BaseRequest {
  organizationId?: number|string;// 机构id
  userId?: number|string;// 用户id  
}


/**
* SourceVoRes[]
*/
export interface SourceVoRes {
  id: number;// undefined
  name: string;// undefined
}


/**
* 查询信源接口
*/
export interface QuerySourcesRes {
  success: boolean;// undefined
  errorMessage: string;// undefined
  errorCode: integer;// undefined
  data: SourceVoRes[];// undefined
}


/**
* QueryMetricsList
*/
export interface QueryMetricsList {
  sourceIdList?: array;// 信源id集合
}


/**
* AggsStatisticsEnum --自定义类型
*/
type AggsStatisticsEnum = string


/**
* MetricsResponseRes[]
*/
export interface MetricsResponseRes {
  id: number;// undefined
  showChineseNameString: string;// undefined
  type: AggsStatisticsEnum;// undefined
  metricsName: string;// undefined
}


/**
* 查询度量的组册列表接口
*/
export interface QueryMetricsListRes {
  success: boolean;// undefined
  errorMessage: string;// undefined
  errorCode: integer;// undefined
  data: MetricsResponseRes[];// undefined
}


/**
* QueryDimensionList
*/
export interface QueryDimensionList {
  sourceIdList?: array;// 信源id集合
}


/**
* DimensionBySourceRes[]
*/
export interface DimensionBySourceRes {
  id: number;// undefined
  showChineseName: string;// undefined
  fieldName: string;// undefined
}


/**
* 查询普通维度接口
*/
export interface QueryDimensionListRes {
  success: boolean;// undefined
  errorMessage: string;// undefined
  errorCode: integer;// undefined
  data: DimensionBySourceRes[];// undefined
}


/**
* DimensionListResponseRes[]
*/
export interface DimensionListResponseRes {
  dimensionName: string;// undefined
  type: string;// undefined
  isShare: integer;// undefined
  subDimensionNames: string[];// undefined
  subDimensionIds: number[];// undefined
}


/**
* 自定义维度列表接口
*/
export interface DimensionListCustomerRes {
  success: boolean;// undefined
  errorMessage: string;// undefined
  errorCode: integer;// undefined
  data: DimensionListResponseRes[];// undefined
}

