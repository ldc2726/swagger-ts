
import * as types from './../swagger-utils/index'
import { HttpRequest } from './../main'  

type integer = number  


/**
 * 活动基础数据
 */
export const abccodereportActivitybasicinfo = (data: types.abccodereportActivitybasicinfo) => {
  return HttpRequest().$get<object>({
    url: '/api/v1/abccodereport/activitybasicinfo',
    data: data
  })
}


/**
 * 每日抽奖数量
 */
export const abccodereportDailylotteryinfo = (data: types.abccodereportDailylotteryinfo) => {
  return HttpRequest().$get<types.DailyLotteryResponsePagerList>({
    url: '/api/v1/abccodereport/dailylotteryinfo',
    data: data
  })
}


/**
 * 按省份统计抽奖
 */
export const abccodereportDimensionlotteryinfo = (data: types.abccodereportDimensionlotteryinfo) => {
  return HttpRequest().$get<types.DimensionLotteryResponse>({
    url: '/api/v1/abccodereport/dimensionlotteryinfo',
    data: data
  })
}


/**
 * 活动消费者数据明细
 */
export const abccodereportCustomerawardlist = (data: types.abccodereportCustomerawardlist) => {
  return HttpRequest().$get<types.CustomerAwardResponsePagerList>({
    url: '/api/v1/abccodereport/customerawardlist',
    data: data
  })
}


/**
 * 获取商品名称列表
 */
export const abccodereportGetgoodnames = (data: types.abccodereportGetgoodnames) => {
  return HttpRequest().$get<string>({
    url: '/api/v1/abccodereport/getgoodnames',
    data: data
  })
}


/**
 * 活动店主激活数据明细
 */
export const abccodereportShopactivationlist = (data: types.abccodereportShopactivationlist) => {
  return HttpRequest().$get<types.ShopActivationResponsePagerList>({
    url: '/api/v1/abccodereport/shopactivationlist',
    data: data
  })
}


/**
 * 活动店主充值数据明细
 */
export const abccodereportShoprechargelist = (data: types.abccodereportShoprechargelist) => {
  return HttpRequest().$get<types.ShopRechargeResponsePagerList>({
    url: '/api/v1/abccodereport/shoprechargelist',
    data: data
  })
}


/**
 * 人货场三码活动门店奖励数据明细
 */
export const abccodereportShopawardlist = (data: types.abccodereportShopawardlist) => {
  return HttpRequest().$get<types.ShopAwardResponsePagerList>({
    url: '/api/v1/abccodereport/shopawardlist',
    data: data
  })
}


/**
 * 列表导出
 */
export const abccodereportExport = (data: types.abccodereportExport) => {
  return HttpRequest().$get<any>({
    url: '/api/v1/abccodereport/export',
    data: data
  })
}


/**
 * 获取报表 M:YH.Customized.AbcCode.AdminApi.Controllers.V1.AbcCodeReportController.Export(YH.Customized.AbcCode.Application.ReportExportRequest) 表头
 */
export const abccodereportExportcolumn = (data: types.abccodereportExportcolumn) => {
  return HttpRequest().$get<string>({
    url: '/api/v1/abccodereport/exportcolumn',
    data: data
  })
}


/**
 * 导出基础信息
 */
export const abccodereportExportactivitybasicinfo = (data: types.abccodereportExportactivitybasicinfo) => {
  return HttpRequest().$get<any>({
    url: '/api/v1/abccodereport/exportactivitybasicinfo',
    data: data
  })
}


/**
 * 导出每日抽奖数据
 */
export const abccodereportExportdailylottery = (data: types.abccodereportExportdailylottery) => {
  return HttpRequest().$get<any>({
    url: '/api/v1/abccodereport/exportdailylottery',
    data: data
  })
}


/**
 * 获取报表 M:YH.Customized.AbcCode.AdminApi.Controllers.V1.AbcCodeReportController.ExportDailyLottery(YH.Customized.AbcCode.Application.ReportSearchRequest) 表头
 */
export const abccodereportExportdailylotterycolumn = (data: types.abccodereportExportdailylotterycolumn) => {
  return HttpRequest().$get<string>({
    url: '/api/v1/abccodereport/exportdailylotterycolumn',
    data: data
  })
}


/**
 * 下载A码
 */
export const accodeDownloadacode = (data: types.IdRequest) => {
  return HttpRequest().$post<any>({
    url: '/api/v1/accode/downloadacode',
    data: data
  })
}


/**
 * 下载C码
 */
export const accodeDownloadccode = (data: types.IdRequest) => {
  return HttpRequest().$post<any>({
    url: '/api/v1/accode/downloadccode',
    data: data
  })
}


/**
 * 获取扫码类型
 */
export const accodeGetscancodetype = () => {
  return HttpRequest().$get<types.GetScanCodeTypeResponse[]>({
    url: '/api/v1/accode/getscancodetype'
  })
}


/**
 * 添加 活动模板关系
作者：mouwei
 */
export const activityconfigCreateactivityconfig = (data: types.CreateActivityConfigRequest) => {
  return HttpRequest().$post<any>({
    url: '/api/v1/activityconfig/createactivityconfig',
    data: data
  })
}


/**
 * 修改 活动模板关系
作者：mouwei
 */
export const activityconfigPutactivityconfig = (data: types.PutActivityConfigRequest) => {
  return HttpRequest().$post<any>({
    url: '/api/v1/activityconfig/putactivityconfig',
    data: data
  })
}


/**
 * 通过活动ID获取 活动模板关系
作者：mouwei
 */
export const activityconfigGetmodelbyactivityid = (data: types.activityconfigGetmodelbyactivityid) => {
  return HttpRequest().$get<types.ActivityConfigResponse>({
    url: '/api/v1/activityconfig/getmodelbyactivityid',
    data: data
  })
}


/**
 * 生成活动预览二维码
作者：mouwei
 */
export const activityconfigCreateactivityqrcode = (data: types.activityconfigCreateactivityqrcode) => {
  return HttpRequest().$get<any>({
    url: '/api/v1/activityconfig/createactivityqrcode',
    data: data
  })
}


/**
 * 批量添加 活动商品
作者：lizhen
 */
export const activitygoodsCreateactivitygoodslist = (data: types.CreateActivityGoodsListRequest) => {
  return HttpRequest().$post<any>({
    url: '/api/v1/activitygoods/createactivitygoodslist',
    data: data
  })
}


/**
 * 修改 活动商品
作者：lizhen
 */
export const activitygoodsPutactivitygoods = (data: types.PutActivityGoodsRequest) => {
  return HttpRequest().$post<any>({
    url: '/api/v1/activitygoods/putactivitygoods',
    data: data
  })
}


/**
 * 通过ID获取 活动商品
作者：lizhen
 */
export const activitygoodsGetmodelbyid = (data: types.activitygoodsGetmodelbyid) => {
  return HttpRequest().$get<types.ActivityGoodsResponse>({
    url: '/api/v1/activitygoods/getmodelbyid',
    data: data
  })
}


/**
 * 通过活动ID获取 活动商品
作者：lizhen
 */
export const activitygoodsGetlistbyactivityid = (data: types.activitygoodsGetlistbyactivityid) => {
  return HttpRequest().$get<types.ActivityGoodsResponse[]>({
    url: '/api/v1/activitygoods/getlistbyactivityid',
    data: data
  })
}


/**
 * 通过活动ID获取活动商品分页
 */
export const activitygoodsGetactivitygoodspagelist = (data: types.activitygoodsGetactivitygoodspagelist) => {
  return HttpRequest().$get<types.ActivityGoodsResponsePagerList>({
    url: '/api/v1/activitygoods/getactivitygoodspagelist',
    data: data
  })
}


/**
 * 删除 活动商品
作者：lizhen
 */
export const activitygoodsDelete = (data: types.IdRequest) => {
  return HttpRequest().$post<any>({
    url: '/api/v1/activitygoods/delete',
    data: data
  })
}


/**
 * 删除 活动商品(批量删除)
作者：lizhen
 */
export const activitygoodsDeletes = (data: types.IdsAbcRequest) => {
  return HttpRequest().$post<any>({
    url: '/api/v1/activitygoods/deletes',
    data: data
  })
}


/**
 * 添加 活动机制
作者：lizhen
 */
export const activitymechanismCreateactivitymechanism = (data: types.CreateActivityMechanismRequest) => {
  return HttpRequest().$post<any>({
    url: '/api/v1/activitymechanism/createactivitymechanism',
    data: data
  })
}


/**
 * 修改 活动机制
作者：lizhen
 */
export const activitymechanismPutactivitymechanism = (data: types.PutActivityMechanismRequest) => {
  return HttpRequest().$post<any>({
    url: '/api/v1/activitymechanism/putactivitymechanism',
    data: data
  })
}


/**
 * 通过ID获取 活动机制
作者：lizhen
 */
export const activitymechanismGetmodelbyid = (data: types.activitymechanismGetmodelbyid) => {
  return HttpRequest().$get<types.ActivityMechanismResponse>({
    url: '/api/v1/activitymechanism/getmodelbyid',
    data: data
  })
}


/**
 * 通过活动ID获取 活动机制
作者：lizhen
 */
export const activitymechanismGetlistbyactivityid = (data: types.activitymechanismGetlistbyactivityid) => {
  return HttpRequest().$get<types.ActivityMechanismResponse[]>({
    url: '/api/v1/activitymechanism/getlistbyactivityid',
    data: data
  })
}


/**
 * 删除 活动机制
作者：lizhen
 */
export const activitymechanismDelete = (data: types.IdRequest) => {
  return HttpRequest().$post<any>({
    url: '/api/v1/activitymechanism/delete',
    data: data
  })
}


/**
 * 获取活动机制（下拉列表）
作者：zengdecheng
 */
export const activitymechanismGetpassrecordlistbyactivityid = (data: types.activitymechanismGetpassrecordlistbyactivityid) => {
  return HttpRequest().$get<types.ActivityMechanismResponse[]>({
    url: '/api/v1/activitymechanism/getpassrecordlistbyactivityid',
    data: data
  })
}


/**
 * 获取营销策略机制
 */
export const activitymechanismGetmsmechanismlist = (data: types.activitymechanismGetmsmechanismlist) => {
  return HttpRequest().$get<types.GetMsMechanismListResponse[]>({
    url: '/api/v1/activitymechanism/getmsmechanismlist',
    data: data
  })
}


/**
 * 获取活动限制机制下拉
 */
export const activitymechanismGetconstraintmechanismdrop = (data: types.activitymechanismGetconstraintmechanismdrop) => {
  return HttpRequest().$get<types.GetConstraintMechanismDropResponse[]>({
    url: '/api/v1/activitymechanism/getconstraintmechanismdrop',
    data: data
  })
}


/**
 * 根据营销策略机制id获取商品信息
 */
export const activitymechanismGetactivitygoodslist = (data: types.activitymechanismGetactivitygoodslist) => {
  return HttpRequest().$get<types.GetActivityGoodsListResponse[]>({
    url: '/api/v1/activitymechanism/getactivitygoodslist',
    data: data
  })
}


/**
 * 验证B码机制
 */
export const activitymechanismValbcodemechanism = (data: types.activitymechanismValbcodemechanism) => {
  return HttpRequest().$get<string>({
    url: '/api/v1/activitymechanism/valbcodemechanism',
    data: data
  })
}


/**
 * 验证A码机制
 */
export const activitymechanismValacodemechanism = (data: types.activitymechanismValacodemechanism) => {
  return HttpRequest().$get<string>({
    url: '/api/v1/activitymechanism/valacodemechanism',
    data: data
  })
}


/**
 * 消费者扫码订单列表
 */
export const orderCustomerscancodelist = (data: types.orderCustomerscancodelist) => {
  return HttpRequest().$get<types.CustomerScanCodeResponsePagerList>({
    url: '/api/v1/order/customerscancodelist',
    data: data
  })
}


/**
 * 消费者扫码列表导出
 */
export const orderExportcustomerscancode = (data: types.orderExportcustomerscancode) => {
  return HttpRequest().$post<any>({
    url: '/api/v1/order/exportcustomerscancode',
    data: data
  })
}


/**
 * 消费者扫码记录详情
 */
export const orderCustomerscancodedetail = (data: types.orderCustomerscancodedetail) => {
  return HttpRequest().$get<types.CustomerScanCodeResponse>({
    url: '/api/v1/order/customerscancodedetail',
    data: data
  })
}


/**
 * 订单管理-门店充值记录 -abccode_recharge_record
 */
export const orderShoprechargelist = (data: types.orderShoprechargelist) => {
  return HttpRequest().$get<types.GetShopRechargeResponsePagerList>({
    url: '/api/v1/order/shoprechargelist',
    data: data
  })
}


/**
 * 导出 订单管理-门店充值记录 -abccode_recharge_record
 */
export const orderExportshoprecharge = (data: types.orderExportshoprecharge) => {
  return HttpRequest().$get<any>({
    url: '/api/v1/order/exportshoprecharge',
    data: data
  })
}


/**
 * 修改B是否启用
 */
export const orderUpdatebcodestatus = (data: types.UpdateBCodeRechargeStatusRequest) => {
  return HttpRequest().$post<boolean>({
    url: '/api/v1/order/updatebcodestatus',
    data: data
  })
}


/**
 * 订单管理-门店充值记录详情
 */
export const orderShoprechargedetail = (data: types.orderShoprechargedetail) => {
  return HttpRequest().$get<types.GetShopRechargeResponse>({
    url: '/api/v1/order/shoprechargedetail',
    data: data
  })
}


/**
 * 操作B码状态
 */
export const orderOperationstatus = (data: types.orderOperationstatus) => {
  return HttpRequest().$post<boolean>({
    url: '/api/v1/order/operationstatus',
    data: data
  })
}


/**
 * 门店管理-获取门店人员列表（管理端）
 */
export const rechargeGetshopmemberlist = (data: types.rechargeGetshopmemberlist) => {
  return HttpRequest().$get<types.GetShopMemberResponse[]>({
    url: '/api/v1/recharge/getshopmemberlist',
    data: data
  })
}


/**
 * B码指派
 */
export const rechargeTransferbcoderecharge = (data: types.TransferBcodeRechargeRequest) => {
  return HttpRequest().$post<any>({
    url: '/api/v1/recharge/transferbcoderecharge',
    data: data
  })
}


/**
 * B码指派详情
 */
export const rechargeTransferbcodedetail = (data: types.rechargeTransferbcodedetail) => {
  return HttpRequest().$get<types.TransferBCodeDetailResponse[]>({
    url: '/api/v1/recharge/transferbcodedetail',
    data: data
  })
}


/**
 * 执行数据抽取
 */
export const reportDatatransfer = () => {
  return HttpRequest().$get<any>({
    url: '/api/v1/report/datatransfer'
  })
}


/**
 * 执行数据清洗
 */
export const reportDataexecution = () => {
  return HttpRequest().$get<any>({
    url: '/api/v1/report/dataexecution'
  })
}


/**
 * 执行数据抽取
 */
export const scheduleDatatransfer = () => {
  return HttpRequest().$get<any>({
    url: '/api/v1/schedule/datatransfer'
  })
}


/**
 * 执行数据清洗
 */
export const scheduleDataexecution = () => {
  return HttpRequest().$get<any>({
    url: '/api/v1/schedule/dataexecution'
  })
}


/**
 * 补发订单
因订订单服务异常导致订单创建无法完成，需按T+1方式进行补发订单
 */
export const scheduleResendorder = (data: types.scheduleResendorder) => {
  return HttpRequest().$post<any>({
    url: '/api/v1/schedule/resendorder',
    data: data
  })
}


/**
 * 补发店主奖励
 */
export const scheduleResendshopawards = () => {
  return HttpRequest().$get<any>({
    url: '/api/v1/schedule/resendshopawards'
  })
}


/**
 * 重置A码计数信息
 */
export const scheduleResetacodecretentialtotal = (data: types.scheduleResetacodecretentialtotal) => {
  return HttpRequest().$get<any>({
    url: '/api/v1/schedule/resetacodecretentialtotal',
    data: data
  })
}


/**
 * 发送奖池预警SMS
 */
export const scheduleSendluckdrawearlywarnsms = () => {
  return HttpRequest().$get<boolean>({
    url: '/api/v1/schedule/sendluckdrawearlywarnsms'
  })
}


/**
 * 获取门店激活记录
 */
export const shopactivityGetshopactivityrecordlist = (data: types.shopactivityGetshopactivityrecordlist) => {
  return HttpRequest().$get<types.GetShopActivityResponsePagerList>({
    url: '/api/v1/shopactivity/getshopactivityrecordlist',
    data: data
  })
}


/**
 * 查询激活门店Id
 */
export const shopactivityGetshopactivityids = (data: types.shopactivityGetshopactivityids) => {
  return HttpRequest().$get<integer>({
    url: '/api/v1/shopactivity/getshopactivityids',
    data: data
  })
}


/**
 * 根据Id获取门店激活数据
 */
export const shopactivityGetmodelbyid = (data: types.shopactivityGetmodelbyid) => {
  return HttpRequest().$get<types.GetShopActivityResponse>({
    url: '/api/v1/shopactivity/getmodelbyid',
    data: data
  })
}


/**
 * 修改定位
 */
export const shopactivityUpdatelocation = (data: types.UpdateLocationRequest) => {
  return HttpRequest().$post<boolean>({
    url: '/api/v1/shopactivity/updatelocation',
    data: data
  })
}


/**
 * 解绑
 */
export const shopactivityDelete = (data: types.IdRequest) => {
  return HttpRequest().$post<boolean>({
    url: '/api/v1/shopactivity/delete',
    data: data
  })
}


/**
 * 门店激活列表导出
 */
export const shopactivityExport = (data: types.shopactivityExport) => {
  return HttpRequest().$post<any>({
    url: '/api/v1/shopactivity/export',
    data: data
  })
}


/**
 * 获取短信日志分页
 */
export const shopactivityGetsmslogpage = (data: types.shopactivityGetsmslogpage) => {
  return HttpRequest().$get<types.GetSmsLogPageResponsePagerList>({
    url: '/api/v1/shopactivity/getsmslogpage',
    data: data
  })
}


/**
 * 导出门店
 */
export const shopactivityExportbyactivtyid = (data: types.shopactivityExportbyactivtyid) => {
  return HttpRequest().$get<any>({
    url: '/api/v1/shopactivity/exportbyactivtyid',
    data: data
  })
}


/**
 * 设置三码活动范围里面活动对象和活动渠道信息
 */
export const shopmechanismSetshopmechanism = (data: types.SetShopMechanismRequest) => {
  return HttpRequest().$post<boolean>({
    url: '/api/v1/shopmechanism/setshopmechanism',
    data: data
  })
}


/**
 * 获取三码活动范围里面活动对象和活动渠道信息
 */
export const shopmechanismGetshopmechanism = (data: types.shopmechanismGetshopmechanism) => {
  return HttpRequest().$get<types.ShopMechanismResponse>({
    url: '/api/v1/shopmechanism/getshopmechanism',
    data: data
  })
}


/**
 * 获取店主未下线的活动数据
 */
export const shopmechanismGetshoponlineactivityids = () => {
  return HttpRequest().$get<integer>({
    url: '/api/v1/shopmechanism/getshoponlineactivityids'
  })
}


/**
 * 获取活动banner图
 */
export const shopmechanismGetactivitybannerimage = (data: types.shopmechanismGetactivitybannerimage) => {
  return HttpRequest().$get<string>({
    url: '/api/v1/shopmechanism/getactivitybannerimage',
    data: data
  })
}


/**
 * 设置活动banner图
 */
export const shopmechanismSetactivitybannerimage = (data: types.GetActivityBannerRequest) => {
  return HttpRequest().$post<boolean>({
    url: '/api/v1/shopmechanism/setactivitybannerimage',
    data: data
  })
}


/**
 * 获取门店B码的充值奖励次数
 */
export const shopmechanismGetshoprechargecount = (data: types.shopmechanismGetshoprechargecount) => {
  return HttpRequest().$get<integer>({
    url: '/api/v1/shopmechanism/getshoprechargecount',
    data: data
  })
}


/**
 * 更新门店B码的充值奖励次数
 */
export const shopmechanismUpdateshoprechargecount = (data: types.UpdateShopRechargeCountRequest) => {
  return HttpRequest().$post<boolean>({
    url: '/api/v1/shopmechanism/updateshoprechargecount',
    data: data
  })
}


/**
 * 根据活动id获取活动详情活动对象机制相关
 */
export const shopmechanismGetactivityshopmechanismdetail = (data: types.shopmechanismGetactivityshopmechanismdetail) => {
  return HttpRequest().$get<types.ShopMechanismResponse>({
    url: '/api/v1/shopmechanism/getactivityshopmechanismdetail',
    data: data
  })
}


/**
 * 回填a和c码三个机制id
 */
export const shopmechanismUpdatebccodemechanism = (data: types.UpdateAbcCodeMechanismRequest) => {
  return HttpRequest().$post<boolean>({
    url: '/api/v1/shopmechanism/updatebccodemechanism',
    data: data
  })
}


/**
 * 获取机制
 */
export const shopmechanismGetactivitymechanism = (data: types.shopmechanismGetactivitymechanism) => {
  return HttpRequest().$get<types.MsMechanismResponse[]>({
    url: '/api/v1/shopmechanism/getactivitymechanism',
    data: data
  })
}


/**
 * 
 */
export const shopmechanismUpdateproof = (data: types.UpdateProofRequest) => {
  return HttpRequest().$post<types.UpdateProofOpenIdRequesst[]>({
    url: '/api/v1/shopmechanism/updateproof',
    data: data
  })
}


/**
 * 设置奖池预警接口
 */
export const shopmechanismSetactivityluckdrawearlywarn = (data: types.SetActivityLuckDrawEarlyWarnRequest) => {
  return HttpRequest().$post<boolean>({
    url: '/api/v1/shopmechanism/setactivityluckdrawearlywarn',
    data: data
  })
}


/**
 * 获取奖池预警信息
 */
export const shopmechanismGetactivityluckdrawearlywarn = (data: types.shopmechanismGetactivityluckdrawearlywarn) => {
  return HttpRequest().$get<types.GetActivityLuckDrawEarlyWarnResponse>({
    url: '/api/v1/shopmechanism/getactivityluckdrawearlywarn',
    data: data
  })
}


/**
 * 获取奖池预警短信模板
 */
export const shopmechanismGetluckdrawearlywarnsmstemplate = () => {
  return HttpRequest().$get<types.GetLuckDrawEarlyWarnSMSTemplateResponse[]>({
    url: '/api/v1/shopmechanism/getluckdrawearlywarnsmstemplate'
  })
}


/**
 * 获取活动列表
 */
export const shopmechanismGetactivitypagelist = (data: types.shopmechanismGetactivitypagelist) => {
  return HttpRequest().$get<types.GetActivityPageListResponsePagerDataList>({
    url: '/api/v1/shopmechanism/getactivitypagelist',
    data: data
  })
}


/**
 * 活动列表
 */
export const taskActivityshoplist = () => {
  return HttpRequest().$get<boolean>({
    url: '/api/v1/task/activityshoplist'
  })
}


/**
 * 创建模板
 */
export const templateCreate = (data: types.TemplateCopyRequest) => {
  return HttpRequest().$post<types.BaseResponse>({
    url: '/api/v1/template/create',
    data: data
  })
}


/**
 * 获取模板列表
 */
export const templateList = (data: types.templateList) => {
  return HttpRequest().$get<types.TemplateResponsePagerList>({
    url: '/api/v1/template/list',
    data: data
  })
}


/**
 * 获取当前租户的模板状态
 */
export const templateTemplatelevellist = () => {
  return HttpRequest().$get<types.TemplateLevelResponse[]>({
    url: '/api/v1/template/templatelevellist'
  })
}


/**
 * 根据ID获取模板信息
 */
export const templateDetail = (data: types.templateDetail) => {
  return HttpRequest().$get<types.TemplateDetailResponse>({
    url: '/api/v1/template/detail',
    data: data
  })
}


/**
 * 复制模板
 */
export const templateCopy = (data: types.TemplateCopyRequest) => {
  return HttpRequest().$post<types.BaseResponse>({
    url: '/api/v1/template/copy',
    data: data
  })
}


/**
 * 保存模板
 */
export const templateSave = (data: types.TemplateRequest) => {
  return HttpRequest().$post<types.BaseResponse>({
    url: '/api/v1/template/save',
    data: data
  })
}


/**
 * 发布模板
 */
export const templatePublish = (data: types.OperateRequest) => {
  return HttpRequest().$post<types.BaseResponse>({
    url: '/api/v1/template/publish',
    data: data
  })
}


/**
 * 删除模板
 */
export const templateDeleted = (data: types.IdRequest) => {
  return HttpRequest().$post<types.BaseResponse>({
    url: '/api/v1/template/deleted',
    data: data
  })
}


/**
 * 获取发布的模板列表
 */
export const templateListbypublish = () => {
  return HttpRequest().$get<types.TemplateResponse[]>({
    url: '/api/v1/template/listbypublish'
  })
}


/**
 * 批量保存
 */
export const templateBatchsave = (data: types.BatchTemplateRequest) => {
  return HttpRequest().$post<types.BaseResponse>({
    url: '/api/v1/template/batchsave',
    data: data
  })
}


/**
 * 刷新二维码
 */
export const templateRefreshcode = (data: types.IdRequest) => {
  return HttpRequest().$post<types.BaseResponse>({
    url: '/api/v1/template/refreshcode',
    data: data
  })
}

