type integer = number
type array =[]

/**
* abccodereportActivitybasicinfo
*/
export interface abccodereportActivitybasicinfo {
  ActivityId?: number|string;// 活动Id
  ProjectId?: number|string;// 项目Id
}


/**
* abccodereportDailylotteryinfo
*/
export interface abccodereportDailylotteryinfo {
  BeginTime?: string;// 开始时间
  EndTime?: string;// 结束时间
  ProjectId?: number|string;// 项目Id
  ProjectName?: string;// 项目名称
  ActivityId?: number|string;// 活动Id
  ActivityName?: string;// 活动名称
  ProvinceId?: number|string;// 省份Id
  CityId?: number|string;// 城市Id
  DepartmentId?: number|string;// 组织机构
  Type?: integer;// 类型（3，省市，4 组织机构）
  MechanismName?: string;// 抽奖类型
  ShopName?: string;// 门店名称
  SalesName?: string;// 业务员
  SalesmanPhone?: string;// 业务员手机号码
  RechargeGoods?: string;// 充值商品
  RechargeRole?: integer;// 充值角色
  ReChargeSerialNumber?: string;// 充值序列号
  CustomerColumns?: array;// 指定列导出
  PageIndex?: integer;// undefined
  PageSize?: integer;// undefined
}


/**
* AwardInfoRes
*/
export interface AwardInfo {
  GoodId: string;// 奖品编号
  Name: string;// 奖品名称
  Winners: number;// 中奖数量
}


/**
* DailyLotteryRes
*/
export interface DailyLottery {
  AwardInfos: AwardInfo[];// 奖项类型列表
  TypeId: number;// 类型id
  AwardTypeName: string;// 门店激活/门店销售/消费者抽奖
  Total: number;// 小计
}


/**
* DailyLotteryResponseRes
*/
export interface DailyLotteryResponse {
  AwardDate: string;// 抽奖日期
  DailyLotteries: DailyLottery[];// 明细
}


/**
* 每日抽奖数量Res
*/
export interface DailyLotteryResponsePagerList {
  PageIndex: integer;// undefined
  PageSize: integer;// undefined
  Total: integer;// undefined
  TotalPages: integer;// undefined
  Data: DailyLotteryResponse[];// undefined
  HasPrevPages: boolean;// undefined
  HasNextPages: boolean;// undefined
}


/**
* abccodereportDimensionlotteryinfo
*/
export interface abccodereportDimensionlotteryinfo {
  BeginTime?: string;// 开始时间
  EndTime?: string;// 结束时间
  ProjectId?: number|string;// 项目Id
  ProjectName?: string;// 项目名称
  ActivityId?: number|string;// 活动Id
  ActivityName?: string;// 活动名称
  ProvinceId?: number|string;// 省份Id
  CityId?: number|string;// 城市Id
  DepartmentId?: number|string;// 组织机构
  Type?: integer;// 类型（3，省市，4 组织机构）
  MechanismName?: string;// 抽奖类型
  ShopName?: string;// 门店名称
  SalesName?: string;// 业务员
  SalesmanPhone?: string;// 业务员手机号码
  RechargeGoods?: string;// 充值商品
  RechargeRole?: integer;// 充值角色
  ReChargeSerialNumber?: string;// 充值序列号
  CustomerColumns?: array;// 指定列导出
  PageIndex?: integer;// undefined
  PageSize?: integer;// undefined
}


/**
* MechanismDataResponseRes
*/
export interface MechanismDataResponse {
  MechanismName: string;// 机制名称
  Nums: integer;// 抽奖次数
  PersonTimes: integer;// 抽奖人数
}


/**
* AbcCodeAwardResponseRes
*/
export interface AbcCodeAwardResponse {
  Province: string;// 省份
  City: string;// 城市
  Date: string;// 省份
  Company: string;// 分公司
  Department: string;// 办事处
  CardCount: integer;// 奖卡数
  MechanismDataResponse: MechanismDataResponse[];// 数据
}


/**
* MechanismTotalResponseRes
*/
export interface MechanismTotalResponse {
  MechanismName: string;// 机制名称
  NumTotal: integer;// 抽奖次数
  PersonTimesTotal: integer;// 抽奖人数
}


/**
* 按省份统计抽奖Res
*/
export interface DimensionLotteryResponse {
  AbcCodeAwardResponse: AbcCodeAwardResponse[];// 数据
  Total: integer;// 条数
  CardTotalCount: integer;// 总奖卡数
  MechanismTotalResponse: MechanismTotalResponse[];// 总和
}


/**
* abccodereportCustomerawardlist
*/
export interface abccodereportCustomerawardlist {
  BeginTime?: string;// 开始时间
  EndTime?: string;// 结束时间
  ProjectId?: number|string;// 项目Id
  ProjectName?: string;// 项目名称
  ActivityId?: number|string;// 活动Id
  ActivityName?: string;// 活动名称
  ProvinceId?: number|string;// 省份Id
  CityId?: number|string;// 城市Id
  DepartmentId?: number|string;// 组织机构
  Type?: integer;// 类型（3，省市，4 组织机构）
  MechanismName?: string;// 抽奖类型
  ShopName?: string;// 门店名称
  SalesName?: string;// 业务员
  SalesmanPhone?: string;// 业务员手机号码
  RechargeGoods?: string;// 充值商品
  RechargeRole?: integer;// 充值角色
  ReChargeSerialNumber?: string;// 充值序列号
  CustomerColumns?: array;// 指定列导出
  PageIndex?: integer;// undefined
  PageSize?: integer;// undefined
}


/**
* CustomerAwardResponseRes
*/
export interface CustomerAwardResponse {
  orderNum: string;// 订单编号
  ProjectName: string;// 项目名称
  ActivityName: string;// 活动名称
  UserId: string;// 用户ID
  OpenId: string;// OpenId
  Province: string;// 省份
  City: string;// 城市
  Company: string;// 分公司
  Department: string;// 办事处
  OrderDate: string;// 抽奖时间
  OrderDateYear: string;// 抽奖时间
  OrderDateHour: string;// 抽奖时间
  PrizeName: string;// 奖品
  AwardName: string;// 奖项
  GoodsTotalPrice: number;// 奖品总价
  AwardStatus: integer;// 奖品状态
  AwardStatusName: string;// 奖品状态名称
  ShopNumber: string;// 所属激活门店编号
  ShopName: string;// 所属激活门店名称
  ActivateName: string;// 所属激活人员姓名
  ActivateMobile: string;// 所属激活人员手机号
  AwardTypeName: string;// 抽奖类型
  Goods: string;// 所属商品
  SalesName: string;// 业务员
  SalesmanPhone: string;// 业务员手机号码
}


/**
* 活动消费者数据明细Res
*/
export interface CustomerAwardResponsePagerList {
  PageIndex: integer;// undefined
  PageSize: integer;// undefined
  Total: integer;// undefined
  TotalPages: integer;// undefined
  Data: CustomerAwardResponse[];// undefined
  HasPrevPages: boolean;// undefined
  HasNextPages: boolean;// undefined
}


/**
* abccodereportGetgoodnames
*/
export interface abccodereportGetgoodnames {
  BusinessStatisticsType?: integer;// 统计类型 1.消费者抽奖 2.门店激活 3.门店充值 4.门店奖励
  ActivityId?: number|string;// 活动ID
}


/**
* abccodereportShopactivationlist
*/
export interface abccodereportShopactivationlist {
  BeginTime?: string;// 开始时间
  EndTime?: string;// 结束时间
  ProjectId?: number|string;// 项目Id
  ProjectName?: string;// 项目名称
  ActivityId?: number|string;// 活动Id
  ActivityName?: string;// 活动名称
  ProvinceId?: number|string;// 省份Id
  CityId?: number|string;// 城市Id
  DepartmentId?: number|string;// 组织机构
  Type?: integer;// 类型（3，省市，4 组织机构）
  MechanismName?: string;// 抽奖类型
  ShopName?: string;// 门店名称
  SalesName?: string;// 业务员
  SalesmanPhone?: string;// 业务员手机号码
  RechargeGoods?: string;// 充值商品
  RechargeRole?: integer;// 充值角色
  ReChargeSerialNumber?: string;// 充值序列号
  CustomerColumns?: array;// 指定列导出
  PageIndex?: integer;// undefined
  PageSize?: integer;// undefined
}


/**
* ShopActivationResponseRes
*/
export interface ShopActivationResponse {
  UserId: string;// 用户ID
  OrderDate: string;// 激活时间
  OrderDateYear: string;// 激活时间
  OrderDateHour: string;// 抽奖时间
  ProjectName: string;// 项目名称
  ActivityName: string;// 活动名称
  ActivityCode: string;// 活动编码
  ShopCode: string;// 门店编码
  ShopName: string;// 门店名称
  Address: string;// 定位地址
  Province: string;// 省
  City: string;// 市
  Company: string;// 分公司
  Department: string;// 办事处
  ShopMasterName: string;// 店主姓名
  ShopMasterMobile: string;// 店主手机号
  ShopMasterOpenId: string;// 店主OpenId
  TotalLuckDrawCount: integer;// 累计充值抽奖数
  TotalUseLuckDrawCount: integer;// 累计消耗抽奖次数
  TotalUseLuckDrawCountByA: integer;// A码累计消耗抽奖数
  TotalUseLuckDrawCountByB: integer;// B码累计消耗抽奖数
  SalesName: string;// 门店所属业务员
  SalesmanPhone: string;// 业务员手机号
  BRechargeCardCount: integer;// B码充值奖卡数
  ConsumptionBCard: integer;// B码消耗卡数
  RemainderDrawCount: integer;// 剩余门店奖励次数
}


/**
* 活动店主激活数据明细Res
*/
export interface ShopActivationResponsePagerList {
  PageIndex: integer;// undefined
  PageSize: integer;// undefined
  Total: integer;// undefined
  TotalPages: integer;// undefined
  Data: ShopActivationResponse[];// undefined
  HasPrevPages: boolean;// undefined
  HasNextPages: boolean;// undefined
}


/**
* abccodereportShoprechargelist
*/
export interface abccodereportShoprechargelist {
  BeginTime?: string;// 开始时间
  EndTime?: string;// 结束时间
  ProjectId?: number|string;// 项目Id
  ProjectName?: string;// 项目名称
  ActivityId?: number|string;// 活动Id
  ActivityName?: string;// 活动名称
  ProvinceId?: number|string;// 省份Id
  CityId?: number|string;// 城市Id
  DepartmentId?: number|string;// 组织机构
  Type?: integer;// 类型（3，省市，4 组织机构）
  MechanismName?: string;// 抽奖类型
  ShopName?: string;// 门店名称
  SalesName?: string;// 业务员
  SalesmanPhone?: string;// 业务员手机号码
  RechargeGoods?: string;// 充值商品
  RechargeRole?: integer;// 充值角色
  ReChargeSerialNumber?: string;// 充值序列号
  CustomerColumns?: array;// 指定列导出
  PageIndex?: integer;// undefined
  PageSize?: integer;// undefined
}


/**
* ShopRechargeResponseRes
*/
export interface ShopRechargeResponse {
  Province: string;// 省
  City: string;// 市
  Company: string;// 分公司
  Department: string;// 办事处
  RechargeTime: string;// 充值时间
  RechargeTimeYear: string;// 充值时间
  RechargeTimeHour: string;// 充值时间
  ProjectName: string;// 项目名称
  ActivityName: string;// 活动名称
  ActivityCode: string;// 活动编号
  ShopCode: string;// 门店编号
  ShopName: string;// 门店名称
  RechargeUserName: string;// 充值人员姓名
  RechargeUserMobile: string;// 充值人员手机号
  UserType: integer;// 奖励角色
  ShopMasterType: string;// 奖励角色
  Address: string;// 定位地址
  RechargeBoxCode: string;// 充值箱码
  RechargeRewardCount: integer;// 充值奖励数量
  GoodsName: string;// 充值奖励数量
  SalesName: string;// 门店所属业务员
  SalesmanPhone: string;// 业务员手机号
  ReChargeSerialNumber: string;// 充值序列号
}


/**
* 活动店主充值数据明细Res
*/
export interface ShopRechargeResponsePagerList {
  PageIndex: integer;// undefined
  PageSize: integer;// undefined
  Total: integer;// undefined
  TotalPages: integer;// undefined
  Data: ShopRechargeResponse[];// undefined
  HasPrevPages: boolean;// undefined
  HasNextPages: boolean;// undefined
}


/**
* abccodereportShopawardlist
*/
export interface abccodereportShopawardlist {
  BeginTime?: string;// 开始时间
  EndTime?: string;// 结束时间
  ProjectId?: number|string;// 项目Id
  ProjectName?: string;// 项目名称
  ActivityId?: number|string;// 活动Id
  ActivityName?: string;// 活动名称
  ProvinceId?: number|string;// 省份Id
  CityId?: number|string;// 城市Id
  DepartmentId?: number|string;// 组织机构
  Type?: integer;// 类型（3，省市，4 组织机构）
  MechanismName?: string;// 抽奖类型
  ShopName?: string;// 门店名称
  SalesName?: string;// 业务员
  SalesmanPhone?: string;// 业务员手机号码
  RechargeGoods?: string;// 充值商品
  RechargeRole?: integer;// 充值角色
  ReChargeSerialNumber?: string;// 充值序列号
  CustomerColumns?: array;// 指定列导出
  PageIndex?: integer;// undefined
  PageSize?: integer;// undefined
}


/**
* ShopAwardResponseRes
*/
export interface ShopAwardResponse {
  OrderNum: string;// 订单编号
  ProjectName: string;// 项目名称
  ActivityName: string;// 活动名称
  ActivityCode: string;// 活动编号
  OpenId: string;// OpenId
  ShopMasterName: string;// 奖励人员姓名
  UserType: integer;// 奖励角色
  ShopMasterType: string;// 奖励角色
  ShopMasterMobile: string;// 店主手机号
  ShopCode: string;// 门店编号
  ShopName: string;// 门店名称
  Province: string;// 省
  City: string;// 市
  Company: string;// 分公司
  Department: string;// 办事处
  Address: string;// 定位地址
  Awards: string;// 奖项
  Prize: string;// 奖品
  GoodsTotalPrice: number;// 奖品总价
  OrderTime: string;// 抽奖时间
  OrderDateYear: string;// 抽奖时间
  OrderDateHour: string;// 抽奖时间
  AwardStatus: integer;// 奖励状态
  RewardStatusName: string;// 奖励状态名称
  AwardTypeName: string;// 奖励来源
  SalesName: string;// 门店所属业务员
  SalesmanPhone: string;// 业务员手机号
  RemainsCount: integer;// 剩余抽奖次数
}


/**
* 人货场三码活动门店奖励数据明细Res
*/
export interface ShopAwardResponsePagerList {
  PageIndex: integer;// undefined
  PageSize: integer;// undefined
  Total: integer;// undefined
  TotalPages: integer;// undefined
  Data: ShopAwardResponse[];// undefined
  HasPrevPages: boolean;// undefined
  HasNextPages: boolean;// undefined
}


/**
* abccodereportExport
*/
export interface abccodereportExport {
  BeginTime?: string;// 开始时间
  EndTime?: string;// 结束时间
  ProjectId?: number|string;// 项目Id
  ProjectName?: string;// 项目名称
  ActivityId?: number|string;// 活动Id
  ActivityName?: string;// 活动名称
  ProvinceId?: number|string;// 省份Id
  CityId?: number|string;// 城市Id
  DepartmentId?: number|string;// 组织机构
  Type?: integer;// 类型（3，省市，4 组织机构）
  MechanismName?: string;// 抽奖类型
  ShopName?: string;// 门店名称
  SalesName?: string;// 业务员
  SalesmanPhone?: string;// 业务员手机号码
  RechargeGoods?: string;// 充值商品
  RechargeRole?: integer;// 充值角色
  ReChargeSerialNumber?: string;// 充值序列号
  CustomerColumns?: array;// 指定列导出
  PageIndex?: integer;// undefined
  PageSize?: integer;// undefined
}


/**
* abccodereportExportcolumn
*/
export interface abccodereportExportcolumn {
  BeginTime?: string;// 开始时间
  EndTime?: string;// 结束时间
  ProjectId?: number|string;// 项目Id
  ProjectName?: string;// 项目名称
  ActivityId?: number|string;// 活动Id
  ActivityName?: string;// 活动名称
  ProvinceId?: number|string;// 省份Id
  CityId?: number|string;// 城市Id
  DepartmentId?: number|string;// 组织机构
  Type?: integer;// 类型（3，省市，4 组织机构）
  MechanismName?: string;// 抽奖类型
  ShopName?: string;// 门店名称
  SalesName?: string;// 业务员
  SalesmanPhone?: string;// 业务员手机号码
  RechargeGoods?: string;// 充值商品
  RechargeRole?: integer;// 充值角色
  ReChargeSerialNumber?: string;// 充值序列号
  CustomerColumns?: array;// 指定列导出
  PageIndex?: integer;// undefined
  PageSize?: integer;// undefined
}


/**
* abccodereportExportactivitybasicinfo
*/
export interface abccodereportExportactivitybasicinfo {
  ActivityId?: number|string;// 活动Id
  ProjectId?: number|string;// 项目Id
}


/**
* abccodereportExportdailylottery
*/
export interface abccodereportExportdailylottery {
  BeginTime?: string;// 开始时间
  EndTime?: string;// 结束时间
  ProjectId?: number|string;// 项目Id
  ProjectName?: string;// 项目名称
  ActivityId?: number|string;// 活动Id
  ActivityName?: string;// 活动名称
  ProvinceId?: number|string;// 省份Id
  CityId?: number|string;// 城市Id
  DepartmentId?: number|string;// 组织机构
  Type?: integer;// 类型（3，省市，4 组织机构）
  MechanismName?: string;// 抽奖类型
  ShopName?: string;// 门店名称
  SalesName?: string;// 业务员
  SalesmanPhone?: string;// 业务员手机号码
  RechargeGoods?: string;// 充值商品
  RechargeRole?: integer;// 充值角色
  ReChargeSerialNumber?: string;// 充值序列号
  CustomerColumns?: array;// 指定列导出
  PageIndex?: integer;// undefined
  PageSize?: integer;// undefined
}


/**
* abccodereportExportdailylotterycolumn
*/
export interface abccodereportExportdailylotterycolumn {
  BeginTime?: string;// 开始时间
  EndTime?: string;// 结束时间
  ProjectId?: number|string;// 项目Id
  ProjectName?: string;// 项目名称
  ActivityId?: number|string;// 活动Id
  ActivityName?: string;// 活动名称
  ProvinceId?: number|string;// 省份Id
  CityId?: number|string;// 城市Id
  DepartmentId?: number|string;// 组织机构
  Type?: integer;// 类型（3，省市，4 组织机构）
  MechanismName?: string;// 抽奖类型
  ShopName?: string;// 门店名称
  SalesName?: string;// 业务员
  SalesmanPhone?: string;// 业务员手机号码
  RechargeGoods?: string;// 充值商品
  RechargeRole?: integer;// 充值角色
  ReChargeSerialNumber?: string;// 充值序列号
  CustomerColumns?: array;// 指定列导出
  PageIndex?: integer;// undefined
  PageSize?: integer;// undefined
}


/**
* 下载A码
*/
export interface IdRequest {
  Id?: number|string;// id
}


/**
* 获取扫码类型Res
*/
export interface GetScanCodeTypeResponse {
  CodeType: integer;// Id
  CodeTypeName: string;// 码类型
}


/**
* 添加 活动模板关系
作者：mouwei
*/
export interface CreateActivityConfigRequest {
  ActivityId?: number|string;// 活动Id
  TemplateId?: number|string;// 关联前端模板Id
  EntryUrl?: string;// 活动入口
  Remark?: string;// 描述   
}


/**
* 修改 活动模板关系
作者：mouwei
*/
export interface PutActivityConfigRequest {
  Id?: number|string;// ID主键
  ActivityId?: number|string;// 活动Id
  TemplateId?: number|string;// 关联前端模板Id
  EntryUrl?: string;// 活动入口
  Remark?: string;// 描述    
}


/**
* activityconfigGetmodelbyactivityid
*/
export interface activityconfigGetmodelbyactivityid {
  Id?: number|string;// id
}


/**
* 通过活动ID获取 活动模板关系
作者：mouweiRes
*/
export interface ActivityConfigResponse {
  Id: number;// ID主键
  TenantId: number;// 租户Id
  MainTenantId: number;// 主租户Id
  ActivityId: number;// 活动Id
  TemplateId: number;// 关联前端模板Id
  TemplateName: string;// 关联前端模板Name
  EntryUrl: string;// 活动入口
  CreateTime: number;// 创建时间
  UpdateTime: number;// 修改时间
  Remark: string;// 描述
}


/**
* activityconfigCreateactivityqrcode
*/
export interface activityconfigCreateactivityqrcode {
  Id?: number|string;// id
}


/**
* 批量添加 活动商品
作者：lizhen
*/
export interface CreateActivityGoodsRequest {
  GoodsName?: string;// 商品名称
  GoodsSpecs?: string;// 商品规格
  ActivityId?: number|string;// 活动Id
  GoodsId?: number|string;// 商品Id
  GoodsCode?: string;// 商品编码
  BrandCategoryId?: number|string;// 品牌Id
  BrandCategoryName?: string;// 品牌名称
  GoodsCategoryId?: number|string;// 品类Id
  GoodsCategoryName?: string;// 品类名称
  RechargeNum?: integer;// 充值次数
  Remark?: string;// 描述          
}


/**
* 批量添加 活动商品
作者：lizhen
*/
export interface CreateActivityGoodsListRequest {
  ActivityGoodsList?: CreateActivityGoodsRequest[];// 活动商品集合
}


/**
* 修改 活动商品
作者：lizhen
*/
export interface PutActivityGoodsRequest {
  Id?: number|string;// ID
  RechargeNum?: integer;// 充值次数 
}


/**
* activitygoodsGetmodelbyid
*/
export interface activitygoodsGetmodelbyid {
  Id?: number|string;// id
}


/**
* 通过ID获取 活动商品
作者：lizhenRes
*/
export interface ActivityGoodsResponse {
  Id: number;// ID
  GoodsName: string;// 商品名称
  GoodsSpecs: string;// 商品规格
  ActivityId: number;// 活动Id
  GoodsId: number;// 商品Id
  GoodsCode: string;// 商品编码
  BrandCategoryId: number;// 品牌Id
  BrandCategoryName: string;// 品牌名称
  GoodsCategoryId: number;// 品类Id
  GoodsCategoryName: string;// 品类名称
  RechargeNum: integer;// 充值次数
  Remark: string;// 描述
  CreateTime: number;// 创建时间
}


/**
* activitygoodsGetlistbyactivityid
*/
export interface activitygoodsGetlistbyactivityid {
  Id?: number|string;// id
}


/**
* activitygoodsGetactivitygoodspagelist
*/
export interface activitygoodsGetactivitygoodspagelist {
  ActivityId?: number|string;// 活动ID（必传）
  MechanismId?: number|string;// 机制ID
  BrandCategoryIds?: array;// 品牌ID
  GoodsCategoryIds?: array;// 品类ID
  PageIndex?: integer;// undefined
  PageSize?: integer;// undefined
}


/**
* 通过活动ID获取活动商品分页Res
*/
export interface ActivityGoodsResponsePagerList {
  PageIndex: integer;// undefined
  PageSize: integer;// undefined
  Total: integer;// undefined
  TotalPages: integer;// undefined
  Data: ActivityGoodsResponse[];// undefined
  HasPrevPages: boolean;// undefined
  HasNextPages: boolean;// undefined
}


/**
* 删除 活动商品(批量删除)
作者：lizhen
*/
export interface IdsAbcRequest {
  Ids?: number[]|string[];// Id集合
}


/**
* 添加 活动机制
作者：lizhen
*/
export interface GoodsDto {
  Id?: number|string;// ID
  GoodsName?: string;// 商品名称
  GoodsSpecs?: string;// 商品规格
  ActivityId?: number|string;// 活动Id
  GoodsId?: number|string;// 商品Id
  GoodsCode?: string;// 商品编码
  BrandCategoryId?: number|string;// 品牌Id
  BrandCategoryName?: string;// 品牌名称
  GoodsCategoryId?: number|string;// 品类Id
  GoodsCategoryName?: string;// 品类名称         
}


/**
* 添加 活动机制
作者：lizhen
*/
export interface ParticipationConditionModel {
  ConsumerLotteryCount?: integer;// 消费者奖励抽奖次数
  ConsumerScanCount?: integer;// 消费者扫描B码次数
  ShopLotteryCount?: integer;// 门店奖励抽奖次数
  GoodsList?: GoodsDto[];// 商品集合   
}


/**
* 添加 活动机制
作者：lizhen
*/
export interface CreateActivityMechanismRequest {
  ActivityId?: number|string;// 活动id
  MechanismName?: string;// 机制名称
  ParticipationCondition?: integer;// 参与条件(1:扫码即可参与活动;2:指定条件)
  ParticipationConditionModel?: ParticipationConditionModel;// undefined
  LotteryType?: integer;// 奖励形式(1:抽奖)
  ShowName?: string;// 前端展示名称    
}


/**
* 修改 活动机制
作者：lizhen
*/
export interface PutActivityMechanismRequest {
  Id?: number|string;// 主键ID
  ActivityId?: number|string;// 活动id
  MechanismName?: string;// 机制名称
  ParticipationCondition?: integer;// 参与条件(1:扫码即可参与活动;2:指定条件)
  ParticipationConditionModel?: ParticipationConditionModel;// undefined
  LotteryType?: integer;// 奖励形式(1:抽奖)
  ShowName?: string;// 前端展示名称     
}


/**
* activitymechanismGetmodelbyid
*/
export interface activitymechanismGetmodelbyid {
  Id?: number|string;// id
}


/**
* 通过ID获取 活动机制
作者：lizhenRes
*/
export interface ActivityMechanismResponse {
  Id: number;// 主键ID
  ActivityId: number;// 活动id
  ShowName: string;// 前端展示名称
  MechanismName: string;// 机制名称
  ParticipationCondition: integer;// 参与条件(1:扫码即可参与活动;2:指定条件)
  ParticipationConditionValue: string;// 参与条件值(json字符串)
  LotteryType: integer;// 奖励形式(1:抽奖)
  LotteryCount: integer;// 奖励数量
  ParticipationConditionModel: ParticipationConditionModel;// undefined
}


/**
* activitymechanismGetlistbyactivityid
*/
export interface activitymechanismGetlistbyactivityid {
  Id?: number|string;// id
}


/**
* activitymechanismGetpassrecordlistbyactivityid
*/
export interface activitymechanismGetpassrecordlistbyactivityid {
  Id?: number|string;// id
}


/**
* activitymechanismGetmsmechanismlist
*/
export interface activitymechanismGetmsmechanismlist {
  MechanismType?: integer;// 机制类型(A码1 B码 2)
  ActivityId?: number|string;// 活动ID
  IsPassRecord?: boolean;// 是否读审核后的数据
}


/**
* 获取营销策略机制Res
*/
export interface GetMsMechanismListResponse {
  Id: number;// 主键ID
  ActivityId: number;// 活动id
  ShowName: string;// 前端展示名称
  MechanismName: string;// 机制名称
  IsDefault: integer;// 是否为默认机制(0:否;1:是)
  ActivityMechanism: integer;// 活动机制(1:单机制;2:多机制)
  ParticipationCondition: integer;// 参与条件(1:扫码即可参与活动;2:指定条件)
  ParticipationConditionValue: string;// 参与条件值(json字符串)
  ParticipationConditionAbcValue: string;// 三码数据信息
  LotteryType: integer;// 奖励形式(1:抽奖)
  LotteryCount: integer;// 奖励数量
  Remark: string;// 备注
}


/**
* activitymechanismGetconstraintmechanismdrop
*/
export interface activitymechanismGetconstraintmechanismdrop {
  ActivityId?: number|string;// 活动ID
  IsSearchActivity?: boolean;// 是否查询激活数据
}


/**
* 获取活动限制机制下拉Res
*/
export interface GetConstraintMechanismDropResponse {
  MechanismId: number;// 活动机制名称
  MechanismName: string;// 活动机制名称
}


/**
* activitymechanismGetactivitygoodslist
*/
export interface activitymechanismGetactivitygoodslist {
  Id?: number|string;// id
}


/**
* 根据营销策略机制id获取商品信息Res
*/
export interface GetActivityGoodsListResponse {
  GoodsId: number;// 商品ID
  GoodsCode: string;// 商品编码
  GoodsName: string;// 商品名称
}


/**
* activitymechanismValbcodemechanism
*/
export interface activitymechanismValbcodemechanism {
  Id?: number|string;// id
}


/**
* activitymechanismValacodemechanism
*/
export interface activitymechanismValacodemechanism {
  Id?: number|string;// id
}


/**
* orderCustomerscancodelist
*/
export interface orderCustomerscancodelist {
  ScanNum?: string;// 扫码记录编号
  ActivityId?: number|string;// 活动Id
  OpenId?: string;// OpenID
  UserId?: string;// 用户Id
  SKU?: string;// SKU
  ScanType?: integer;// 扫码类型
  MechanismId?: number|string;// 机制Id
  ScanSerialNumber?: string;// 充值序列号
  StartCreateTime?: string;// 开始扫码创建时间
  EndCreateTime?: string;// 结束扫码创建时间
  ScanCodeName?: string;// 被扫码人名称
  ScanCodeMobile?: string;// 被扫码人手机号
  ShopId?: number|string;// 门店Id
  ShopName?: string;// 门店名称
  ShopProvinceId?: number|string;// 门店行政省Id
  ShopCityId?: number|string;// 门店行政市Id
  ShopCountyId?: number|string;// 门店行政区Id
  DepartmentIds?: array;// 所属部门Id
  DepartmentName?: string;// 所属部门名称
  PageIndex?: integer;// undefined
  PageSize?: integer;// undefined
}


/**
* CustomerScanCodeResponseRes
*/
export interface CustomerScanCodeResponse {
  Id: number;// ID
  ActivityId: number;// 活动id
  ScanNum: string;// 扫码订单编号
  CredentialNum: string;// 策略凭据编号
  ActivityName: string;// 活动名称
  ActivityCode: string;// 活动编码
  SelfProjectId: number;// 自有项目Id
  SelfProjecName: string;// 自有项目名称
  UserId: string;// UserId
  OpenId: string;// Openid
  ShopId: number;// 门店id
  ProvinceId: number;// 行政省Id
  ProvinceName: string;// 行政省
  CityId: number;// 行政市Id
  CityName: string;// 行政市
  CountyId: number;// 行政区Id
  CountyName: string;// 行政区
  Longitude: number;// 经度
  Latitude: number;// 纬度
  CoordinateAddress: string;// 定位详细地址
  IPAddress: string;// IP地址
  IPProvinceId: number;// IP定位行政省Id
  IPProvinceName: string;// IP定位行政省
  IPCityId: number;// IP定位行政市Id
  IPCityName: string;// IP定位行政市
  IPCountyId: number;// IP定位行政区Id
  IPCountyName: string;// IP定位行政区
  ShopName: string;// 门店名称
  ShopProvinceId: number;// 门店行政省Id
  ShopProvinceName: string;// 门店行政省
  ShopCityId: number;// 门店行政市Id
  ShopCityName: string;// 门店行政市
  ShopCountyId: number;// 门店行政区Id
  ShopCode: string;// 门店编码
  ShopCountyName: string;// 门店行政区
  ShopAddress: string;// 门店详细地址
  RegionName: number;// 区域名称
  DetailedAddress: string;// 详细地址
  CreateTime: number;// 创建时间
  RelationOrderNumber: string;// 关联订单编号
  ScanType: integer;// 扫码类型
  ScanTypeEnum: string;// 扫码类型Enum
  MechanismId: number;// 营销策略机制Id
  ScanSerialNumber: string;// 充值序列号
  ScanCodeName: string;// 被扫码人名称
  ScanCodeMobile: string;// 被扫码人手机号
  ScanCodePosition: string;// 被扫码人角色
  DepartmentName: string;// 所属部门名称
}


/**
* 消费者扫码订单列表Res
*/
export interface CustomerScanCodeResponsePagerList {
  PageIndex: integer;// undefined
  PageSize: integer;// undefined
  Total: integer;// undefined
  TotalPages: integer;// undefined
  Data: CustomerScanCodeResponse[];// undefined
  HasPrevPages: boolean;// undefined
  HasNextPages: boolean;// undefined
}


/**
* orderExportcustomerscancode
*/
export interface orderExportcustomerscancode {
  ScanNum?: string;// 扫码记录编号
  ActivityId?: number|string;// 活动Id
  OpenId?: string;// OpenID
  UserId?: string;// 用户Id
  SKU?: string;// SKU
  ScanType?: integer;// 扫码类型
  MechanismId?: number|string;// 机制Id
  ScanSerialNumber?: string;// 充值序列号
  StartCreateTime?: string;// 开始扫码创建时间
  EndCreateTime?: string;// 结束扫码创建时间
  ScanCodeName?: string;// 被扫码人名称
  ScanCodeMobile?: string;// 被扫码人手机号
  ShopId?: number|string;// 门店Id
  ShopName?: string;// 门店名称
  ShopProvinceId?: number|string;// 门店行政省Id
  ShopCityId?: number|string;// 门店行政市Id
  ShopCountyId?: number|string;// 门店行政区Id
  DepartmentIds?: array;// 所属部门Id
  DepartmentName?: string;// 所属部门名称
  PageIndex?: integer;// undefined
  PageSize?: integer;// undefined
}


/**
* orderCustomerscancodedetail
*/
export interface orderCustomerscancodedetail {
  Id?: number|string;// id
}


/**
* orderShoprechargelist
*/
export interface orderShoprechargelist {
  StartRechargeTime?: string;// 开始充值时间
  EndRechargeTime?: string;// 结束充值时间
  Id?: number|string;// 充值记录编号
  ShopId?: number|string;// 门店Id
  ShopName?: string;// 门店名称
  RechargeCode?: string;// 充值串码
  ActivityId?: number|string;// 活动id
  OpenId?: string;// openid
  Phone?: string;// 手机号
  GoodsId?: number|string;// 商品Id
  ReChargeSerialNumber?: string;// 充值序列号
  ShopProvinceId?: number|string;// 门店行政省Id
  ShopCityId?: number|string;// 门店行政市Id
  ShopCountyId?: number|string;// 门店行政区Id
  DepartmentIds?: array;// 所属部门Id
  DepartmentName?: string;// 所属部门名称
  ShopCode?: string;// 门店编号
  PageIndex?: integer;// undefined
  PageSize?: integer;// undefined
}


/**
* GetShopRechargeResponseRes
*/
export interface GetShopRechargeResponse {
  Id: number;// 充值记录编号
  ShopId: number;// 门店Id
  ShopName: string;// 门店名称
  ShopCode: string;// 门店编码
  OpenId: string;// openid
  Name: string;// 充值人员姓名
  Phone: string;// 充值人员手机号
  Num: integer;// 充值奖励次数
  RechargeTime: number;// 充值时间
  ProjectName: string;// 项目名称
  ActivityName: string;// 活动名称
  ActivityId: number;// 活动id
  RechargeCode: string;// 充值串码
  GoodsName: string;// 产品名称
  IsEnable: boolean;// 是否启用
  Status: integer;// 状态:0未作废 1已作废
  EnumStatusDesc: EnumStatusDesc;// undefined
  StatusDesc: string;// 状态显示
  Actions: string[];// 按钮控制
  ReChargeSerialNumber: string;// 充值序列号
  DepartmentName: string;// 所属部门名称
  ShopProvinceName: string;// 门店行政省
  ShopCityName: string;// 门店行政市
  ShopCountyName: string;// 门店行政区
}


/**
* 订单管理-门店充值记录 -abccode_recharge_recordRes
*/
export interface GetShopRechargeResponsePagerList {
  PageIndex: integer;// undefined
  PageSize: integer;// undefined
  Total: integer;// undefined
  TotalPages: integer;// undefined
  Data: GetShopRechargeResponse[];// undefined
  HasPrevPages: boolean;// undefined
  HasNextPages: boolean;// undefined
}


/**
* orderExportshoprecharge
*/
export interface orderExportshoprecharge {
  StartRechargeTime?: string;// 开始充值时间
  EndRechargeTime?: string;// 结束充值时间
  Id?: number|string;// 充值记录编号
  ShopId?: number|string;// 门店Id
  ShopName?: string;// 门店名称
  RechargeCode?: string;// 充值串码
  ActivityId?: number|string;// 活动id
  OpenId?: string;// openid
  Phone?: string;// 手机号
  GoodsId?: number|string;// 商品Id
  ReChargeSerialNumber?: string;// 充值序列号
  ShopProvinceId?: number|string;// 门店行政省Id
  ShopCityId?: number|string;// 门店行政市Id
  ShopCountyId?: number|string;// 门店行政区Id
  DepartmentIds?: array;// 所属部门Id
  DepartmentName?: string;// 所属部门名称
  ShopCode?: string;// 门店编号
  PageIndex?: integer;// undefined
  PageSize?: integer;// undefined
}


/**
* 修改B是否启用
*/
export interface UpdateBCodeRechargeStatusRequest {
  Id?: number|string;// Id
}


/**
* orderShoprechargedetail
*/
export interface orderShoprechargedetail {
  Id?: number|string;// id
}


/**
* EnumOperationStatus --自定义类型
*/
type EnumOperationStatus = integer


/**
* orderOperationstatus
*/
export interface orderOperationstatus {
  Id?: number|string;// Id
  OperationStatus?: OperationStatus;// 操作类型0|Enable|启用B码, 1|Stop|停用B码, 2|Cannel|作废B码
}


/**
* rechargeGetshopmemberlist
*/
export interface rechargeGetshopmemberlist {
  ShopId?: number|string;// 门店Id-必传
  Name?: string;// 人员名称（模糊）
  Code?: string;// 人员Code（模糊）
}


/**
* 门店管理-获取门店人员列表（管理端）Res
*/
export interface GetShopMemberResponse {
  Id: number;// 主键
  TenantId: number;// 租户Id
  ShopId: number;// 门店Id
  Code: string;// 用户编码
  Name: string;// 姓名
  Tel: string;// 手机号
  Position: string;// 职位
  EmailAddress: string;// 邮件地址
  IsMainLeader: boolean;// 是否为店主
  Status: boolean;// 状态
  Remark: string;// 描述
  CreateTime: string;// 创建时间
  UpdateTime: string;// 修改时间
  UserId: string;// 用户编号
}


/**
* B码指派
*/
export interface TransferBcodeRechargeRequest {
  Id?: number|string;// 充值记录Id
  ShopMemberId?: number|string;// 店员Id
  ProcessingType?: integer;// 处理形式 0 单个处理 1 处理该用户全部未核销的B码充值记录  
}


/**
* rechargeTransferbcodedetail
*/
export interface rechargeTransferbcodedetail {
  Id?: number|string;// id
}


/**
* B码指派详情Res
*/
export interface TransferBCodeDetailResponse {
  Operator: string;// 操作人
  OperatorTel: string;// 操作人手机号
  OldUserName: string;// 原用户
  OldUserId: string;// 原用户Id
  OldUserTel: string;// 旧用户手机号
  NewUserName: string;// 新用户
  NewUserId: string;// 新用户Id
  NewUserTel: string;// 新用户手机号
  OperationTime: string;// 操作时间
}


/**
* scheduleResendorder
*/
export interface scheduleResendorder {
  date?: string;// undefined
  activityId?: number|string;// undefined
}


/**
* scheduleResetacodecretentialtotal
*/
export interface scheduleResetacodecretentialtotal {
  activityId?: number|string;// undefined
}


/**
* shopactivityGetshopactivityrecordlist
*/
export interface shopactivityGetshopactivityrecordlist {
  LogCode?: string;// 激活编号
  ShopId?: number|string;// 门店Id
  ShopName?: string;// 门店名称
  ActivityId?: number|string;// 活动ID
  Tel?: string;// 手机号
  OpenId?: string;// openId
  StartCreateTime?: string;// 开始创建时间
  EndCreateTime?: string;// 结束创建时间
  ShopProvinceId?: number|string;// 门店行政省Id
  ShopCityId?: number|string;// 门店行政市Id
  ShopCountyId?: number|string;// 门店行政区Id
  DepartmentIds?: array;// 所属部门Id
  DepartmentName?: string;// 所属部门名称
  PageIndex?: integer;// undefined
  PageSize?: integer;// undefined
}


/**
* GetShopActivityResponseRes
*/
export interface GetShopActivityResponse {
  Id: number;// ID
  TenantId: number;// 租户Id
  MainTenantId: number;// 主租户Id
  UserId: string;// 用户中心标识Id
  OpenId: string;// OpenId
  ActivityName: string;// 活动名称
  ShopId: number;// 门店Id
  ShopName: string;// 门店名称
  ShopCode: string;// 门店编码
  ProjectName: string;// 关联项目名称
  ProjectId: number;// 关联项目id
  LogCode: string;// 激活记录编码
  ActivityId: number;// 活动Id
  ProvinceName: string;// 行政省
  CityName: string;// 行政市
  CountyName: string;// 行政区
  ProvinceId: number;// 行政省
  CityId: number;// 行政市
  CountyId: number;// 行政区
  Longitude: number;// 经度
  Latitude: number;// 纬度
  Address: string;// 门店地址
  Name: string;// 姓名
  Tel: string;// 手机号
  ShopMemberId: number;// 门店店员表id
  UnbindCount: integer;// 解绑次数
  Remark: string;// 描述
  CreateTime: number;// 创建时间(激活时间)
  ActivityCode: string;// 活动编码
  DepartmentName: string;// 所属部门名称
  ShopProvinceName: string;// 门店行政省
  ShopCityName: string;// 门店行政市
  ShopCountyName: string;// 门店行政区
}


/**
* 获取门店激活记录Res
*/
export interface GetShopActivityResponsePagerList {
  PageIndex: integer;// undefined
  PageSize: integer;// undefined
  Total: integer;// undefined
  TotalPages: integer;// undefined
  Data: GetShopActivityResponse[];// undefined
  HasPrevPages: boolean;// undefined
  HasNextPages: boolean;// undefined
}


/**
* shopactivityGetshopactivityids
*/
export interface shopactivityGetshopactivityids {
  LogCode?: string;// 激活编号
  ShopName?: string;// 门店名称
  ActivityId?: number|string;// 活动ID
  Tel?: string;// 手机号
  OpenId?: string;// openId
}


/**
* shopactivityGetmodelbyid
*/
export interface shopactivityGetmodelbyid {
  Id?: number|string;// id
}


/**
* 修改定位
*/
export interface UpdateLocationRequest {
  Id?: number|string;// ID
  ProvinceName?: string;// 行政省
  CityName?: string;// 行政市
  CountyName?: string;// 行政区
  ProvinceId?: number|string;// 行政省
  CityId?: number|string;// 行政市
  CountyId?: number|string;// 行政区
  Longitude?: number;// 经度
  Latitude?: number;// 纬度
  Address?: string;// 门店地址         
}


/**
* shopactivityExport
*/
export interface shopactivityExport {
  LogCode?: string;// 激活编号
  ShopId?: number|string;// 门店Id
  ShopName?: string;// 门店名称
  ActivityId?: number|string;// 活动ID
  Tel?: string;// 手机号
  OpenId?: string;// openId
  StartCreateTime?: string;// 开始创建时间
  EndCreateTime?: string;// 结束创建时间
  ShopProvinceId?: number|string;// 门店行政省Id
  ShopCityId?: number|string;// 门店行政市Id
  ShopCountyId?: number|string;// 门店行政区Id
  DepartmentIds?: array;// 所属部门Id
  DepartmentName?: string;// 所属部门名称
  PageIndex?: integer;// undefined
  PageSize?: integer;// undefined
}


/**
* EnumSmsLogStatus --自定义类型
*/
type EnumSmsLogStatus = integer


/**
* shopactivityGetsmslogpage
*/
export interface shopactivityGetsmslogpage {
  Tel?: string;// 手机号
  SendStartDate?: number|string;// 发送开始时间
  SendEndDate?: number|string;// 发送结束时间
  Status?: Status;// 短信状态0|Success|发送成功, 1|Fail|发送异常
  PageIndex?: integer;// undefined
  PageSize?: integer;// undefined
}


/**
* GetSmsLogPageResponseRes
*/
export interface GetSmsLogPageResponse {
  Tel: string;// 手机号
  Code: string;// 验证码
  StatusDes: string;// 短信状态
  IsError: boolean;// 是否异常
  FailReason: string;// 失败原因
  SendTime: number;// 发送时间
}


/**
* 获取短信日志分页Res
*/
export interface GetSmsLogPageResponsePagerList {
  PageIndex: integer;// undefined
  PageSize: integer;// undefined
  Total: integer;// undefined
  TotalPages: integer;// undefined
  Data: GetSmsLogPageResponse[];// undefined
  HasPrevPages: boolean;// undefined
  HasNextPages: boolean;// undefined
}


/**
* shopactivityExportbyactivtyid
*/
export interface shopactivityExportbyactivtyid {
  Id?: number|string;// id
}


/**
* 设置三码活动范围里面活动对象和活动渠道信息
*/
export interface SetShopMechanismRequest {
  ActivityId?: number|string;// 活动id
  TenantId?: number|string;// 当前租户id
  MainTenantId?: number|string;// 当前主租户
  IsShopEarlyRegistration?: boolean;// 店主是否提前注册
  EarlyRegistrationStartTime?: number|string;// 提前注册开始时间
  EarlyRegistrationEndTime?: number|string;// 提前注册结束时间
  IsClertGetReward?: boolean;// 店员是否获取奖励
  ConsumerAndShopDistance?: integer;// 消费者距门店定位(米)
  IsConsumerOfficialAccount?: boolean;// 消费者是否强制关注公众号
  OfficialAccountId?: number|string;// 关注公众号Id
  OfficialAccounName?: string;// 关注公众号名称
  OfficialAccountImageId?: string;// 关注公众号图片链接
  DeliveryChannelNumber?: integer;// 投放渠道数量
  ConsumerShare?: boolean;// 消费者是否强制关注公众号
  TargetShopCount?: integer;// 目标门店数              
}


/**
* shopmechanismGetshopmechanism
*/
export interface shopmechanismGetshopmechanism {
  ActivityId?: number|string;// 活动id
  TenantId?: number|string;// 当前租户id
}


/**
* 获取三码活动范围里面活动对象和活动渠道信息Res
*/
export interface ShopMechanismResponse {
  Id: number;// Id
  TenantId: number;// 租户Id
  MainTenantId: number;// 主租户Id
  ActivityId: number;// 活动id
  IsShopEarlyRegistration: boolean;// 店主是否提前注册
  EarlyRegistrationStartTime: number;// 提前注册开始时间
  EarlyRegistrationEndTime: number;// 提前注册结束时间
  IsClertGetReward: boolean;// 店员是否获取奖励
  ConsumerAndShopDistance: integer;// 消费者距门店定位(米)
  IsConsumerOfficialAccount: boolean;// 消费者是否强制关注公众号
  OfficialAccountId: number;// 关注公众号Id
  OfficialAccounName: string;// 关注公众号名称
  OfficialAccountImageId: string;// 关注公众号图片链接
  DeliveryChannelNumber: integer;// 投放渠道数量
  RechargeRewardNumber: integer;// 充值奖励数量
  ActivityBannerImage: string;// 活动banner图
  ConsumerShare: boolean;// 消费者是否强制关注公众号
  TargetShopCount: integer;// 目标门店数
}


/**
* shopmechanismGetactivitybannerimage
*/
export interface shopmechanismGetactivitybannerimage {
  ActivityId?: number|string;// 活动id
  TenantId?: number|string;// 当前租户id
  MainTenantId?: number|string;// 当前主租户id
  ActivityBannerImage?: string;// 活动banner图
}


/**
* 设置活动banner图
*/
export interface GetActivityBannerRequest {
  ActivityId?: number|string;// 活动id
  TenantId?: number|string;// 当前租户id
  MainTenantId?: number|string;// 当前主租户id
  ActivityBannerImage?: string;// 活动banner图   
}


/**
* shopmechanismGetshoprechargecount
*/
export interface shopmechanismGetshoprechargecount {
  ActivityId?: number|string;// 活动id
  TenantId?: number|string;// 当前租户id
}


/**
* 更新门店B码的充值奖励次数
*/
export interface UpdateShopRechargeCountRequest {
  ActivityId?: number|string;// 活动id
  TenantId?: number|string;// 当前租户id
  Count?: integer;// 充值奖励次数  
}


/**
* shopmechanismGetactivityshopmechanismdetail
*/
export interface shopmechanismGetactivityshopmechanismdetail {
  Id?: number|string;// id
  IsPassRecord?: boolean;// 是否读取审核后数据
}


/**
* 回填a和c码三个机制id
*/
export interface UpdateAbcCodeMechanismRequest {
  ActivityId?: number|string;// 活动id
  TenantId?: number|string;// 当前租户id
  ShopActivationMeId?: number|string;// 店主激活机制Id
  ShopRechargeMeId?: number|string;// 店主充值机制Id
  ConsumerWriteOffMeId?: number|string;// 消费者核销机制Id    
}


/**
* shopmechanismGetactivitymechanism
*/
export interface shopmechanismGetactivitymechanism {
  ActivityId?: number|string;// 活动Id
  MechanismType?: integer;// 获取机制类型 0 全部 1 消费者 2 门店
}


/**
* 获取机制Res
*/
export interface MsMechanismResponse {
  Id: number;// 主键ID
  ActivityId: number;// 活动id
  MechanismName: string;// 机制名称
  IsDefault: integer;// 是否为默认机制(0:否;1:是)
  ActivityMechanism: integer;// 活动机制(1:单机制;2:多机制)
  ParticipationCondition: integer;// 参与条件(1:扫码即可参与活动;2:指定条件)
  ParticipationConditionValue: string;// 参与条件值(json字符串)
  LotteryType: integer;// 奖励形式(1:抽奖)
  LotteryCount: integer;// 奖励数量
  Remark: string;// 备注
}


/**
* UpdateProofRequest
*/
export interface UpdateProofRequest {
  Ids?: number[]|string[];// 活动Id
}


/**
* UpdateProofUserInfoRes
*/
export interface UpdateProofUserInfo {
  OldOpenId: string;// 旧OpenId
  NewOpenId: string;// 新OpenId
}


/**
* Res
*/
export interface UpdateProofOpenIdRequesst {
  ActivityId: number;// 活动Id
  UserInfo: UpdateProofUserInfo[];// 用户信息
}


/**
* EnumEarlyWarnUnit --自定义类型
*/
type EnumEarlyWarnUnit = integer


/**
* 设置奖池预警接口
*/
export interface LuckDrawEarlyWarnContent {
  EarlyWarnStartNumber?: integer;// 预警开始次数
  EarlyWarnUnit?: EnumEarlyWarnUnit;// undefined
  EarlyWarnNumber?: integer;// 预警次数(多少次后不再提醒)
  SMSTemplateId?: number|string;// 短信模板Id
  EarlyWarnInterval?: integer;// 预警间隔   
}


/**
* 设置奖池预警接口
*/
export interface SetActivityLuckDrawEarlyWarnRequest {
  ActivityId?: number|string;// 活动Id
  IsOpenLuckDrawEarlyWarn?: boolean;// 是否开启预警
  LuckDrawEarlyWarnContent?: LuckDrawEarlyWarnContent;// undefined  
}


/**
* shopmechanismGetactivityluckdrawearlywarn
*/
export interface shopmechanismGetactivityluckdrawearlywarn {
  Id?: number|string;// id
}


/**
* 获取奖池预警信息Res
*/
export interface GetActivityLuckDrawEarlyWarnResponse {
  IsOpenLuckDrawEarlyWarn: boolean;// 是否开启预警
  LuckDrawEarlyWarnContent: LuckDrawEarlyWarnContent;// undefined
}


/**
* 获取奖池预警短信模板Res
*/
export interface GetLuckDrawEarlyWarnSMSTemplateResponse {
  Id: number;// id
  Name: string;// 短信名称
  Content: string;// 短信内容
}


/**
* shopmechanismGetactivitypagelist
*/
export interface shopmechanismGetactivitypagelist {
  Key?: string;// 活动编号/名称
  Status?: integer;// 活动状态
null 查询所有
 0.待配置
 20.待提交
 30.待审核
 40.待上线
 50.进行中
 60.已暂停
 70 已下线
 80 已取消
  StartTime?: string;// 活动开始时间
  EndTime?: string;// 活动结束时间
  FlowStatus?: integer;// 流程状态
  ActivityType?: integer;// 创建三码活动时需要传ABCCode = 5，进销联无需传该值
  ShopBeginTime?: string;// 门店开始时间
  ShopEndTime?: string;// 门店接受时间
  PageIndex?: integer;// undefined
  PageSize?: integer;// undefined
}


/**
* GetActivityPageListResponseRes
*/
export interface GetActivityPageListResponse {
  ShopBeginTime: string;// 门店开始时间
  ShopEndTime: string;// 门店接受时间
  Id: number;// 主键
  SelfProjectId: number;// 自定义项目ID
  SelfProjecName: string;// 自定义项目名称
  SelfProjecCode: string;// 项目编号
  SceneCode: string;// 活动编号
  Name: string;// 活动名称
  StartTime: string;// 开始时间
  EndTime: string;// 结束时间
  Remark: string;// 描述
  Status: integer;// 活动状态
  StatusDesc: string;// 活动状态
  SortNo: number;// 排序字段
  Budget: number;// 活动预算(分)
  BudgetId: number;// 活动预算(分)
  BudgetName: string;// 活动预算名称
  BudgetYuan: number;// 活动预算(元)
  TaxType: string;// 税费类型
  TaxTypeDescription: string;// 税费描述
  CreateTime: string;// 创建时间
  UpdateTime: string;// 修改时间
  CreateUserId: number;// 创建人账号
  CreateUserName: string;// 创建人姓名
  FlowId: number;// 流程ID
  AuditStatus: integer;// 审核状态(1.待审核 10通过 20 驳回)
  AuditStatusName: string;// 审核状态(待审核/通过/驳回)
  AuditTime: string;// 审核时间
  AuditStatusDescription: string;// 审核状态描述
  TennatName: string;// 租户名称
}


/**
* 获取活动列表Res
*/
export interface GetActivityPageListResponsePagerDataList {
  Total: integer;// 总和
  TotalAmount: number;// 总金额
  Data: GetActivityPageListResponse[];// 列表
}


/**
* 创建模板
*/
export interface TemplateCopyRequest {
  id?: number|string;// 模板id
  TemplateName?: string;// 模板名称
  Remark?: string;// 备注  
}


/**
* 创建模板Res
*/
export interface BaseResponse {
  Id: number;// 主键Id
}


/**
* templateList
*/
export interface templateList {
  name?: string;// 模板名称
  status?: integer;// 发布状态
  templateLevel?: integer;// 模板级别
  PageIndex?: integer;// undefined
  PageSize?: integer;// undefined
}


/**
* TemplateResponseRes
*/
export interface TemplateResponse {
  id: number;// id
  TemplateIndex: number;// 模板编号
  TemplateIcon: string;// 图标
  TemplateName: string;// 名称
  Status: integer;// 状态
  StatusName: string;// 状态名称
  CreateTime: number;// 创建时间
  CreateName: string;// 创建人
  PreviewUrl: string;// 预览链接
  PreviewQrcode: string;// 预览二维码地址
  Remark: string;// 备注
}


/**
* 获取模板列表Res
*/
export interface TemplateResponsePagerList {
  PageIndex: integer;// undefined
  PageSize: integer;// undefined
  Total: integer;// undefined
  TotalPages: integer;// undefined
  Data: TemplateResponse[];// undefined
  HasPrevPages: boolean;// undefined
  HasNextPages: boolean;// undefined
}


/**
* 获取当前租户的模板状态Res
*/
export interface TemplateLevelResponse {
  id: integer;// 枚举id
  name: string;// 枚举值
}


/**
* templateDetail
*/
export interface templateDetail {
  Id?: number|string;// id
}


/**
* TemplatePageDataResponseRes
*/
export interface TemplatePageDataResponse {
  id: number;// id
  TemplateContent: string;// 内容
  PageType: string;// 页面枚举标题
  PreviewUrl: string;// 预览链接
  PreviewQrcode: string;// 预览二维码地址
}


/**
* TemplatePageInfoResponseRes
*/
export interface TemplatePageInfoResponse {
  ClientType: integer;// 客户端
  ClientTypeName: string;// 客户端名称
  Data: TemplatePageDataResponse[];// 页面内容
}


/**
* 根据ID获取模板信息Res
*/
export interface TemplateDetailResponse {
  Id: number;// Id
  TemplateName: string;// 模板名称
  TemplatePage: TemplatePageInfoResponse[];// 模板集合
}


/**
* 保存模板
*/
export interface TemplateRequest {
  id?: number|string;// 全局配置 id
  PageTemplateId?: number|string;// 页面配置id
  TemplateName?: string;// 模板名称
  PageType?: string;// 页面类型
  Content?: string;// 配置内容
  ClientType?: integer;// 客户端类型（1.店主端 2.消费者端）     
}


/**
* 发布模板
*/
export interface OperateRequest {
  status?: boolean;// 状态
  Id?: number|string;// id 
}


/**
* 批量保存
*/
export interface TemplatePageDate {
  id?: number|string;// id
  TemplateContent?: string;// 内容
  PageType?: string;// 页面枚举标题  
}


/**
* 批量保存
*/
export interface TemplatePageRequest {
  ClientType?: integer;// 客户端
  ClientTypeName?: string;// 客户端名称
  Data?: TemplatePageDate[];// 页面内容  
}


/**
* 批量保存
*/
export interface BatchTemplateRequest {
  Id?: number|string;// Id
  TemplateName?: string;// 模板名称
  TemplatePage?: TemplatePageRequest[];// 模板集合  
}

