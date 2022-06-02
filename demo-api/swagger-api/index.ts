
import * as types from './../swagger-utils/index'
import { HttpRequest } from './../main'  

type integer = number  


/**
 * 获取资源分配列表
 */
export const allocationRecordQueryPageList = (data: types.TenantAllocationRecordListDto) => {
  return HttpRequest().$post<types.AllocationRecordListVoPageModel>({
    url: '/res/v1/AllocationRecord/QueryPageList',
    data: data
  })
}


/**
 * 租户资源活动分配记录列表简洁查询
 */
export const allocationRecordQuerySimplePageList = (data: types.AllocationRecordListSimpleDto) => {
  return HttpRequest().$post<types.AllocationRecordListSimpleVoPageModel>({
    url: '/res/v1/AllocationRecord/QuerySimplePageList',
    data: data
  })
}


/**
 * 租户资源活动分配记录列表非分页简洁查询
 */
export const allocationRecordQuerySimpleNonPagedList = (data: types.AllocationRecordNonPagedListDto) => {
  return HttpRequest().$post<types.AllocationRecordListSimpleVo[]>({
    url: '/res/v1/AllocationRecord/QuerySimpleNonPagedList',
    data: data
  })
}


/**
 * 创建资源分配
 */
export const allocationRecordCreate = (data: types.CreateAllocationRecordDto) => {
  return HttpRequest().$post<string>({
    url: '/res/v1/AllocationRecord/Create',
    data: data
  })
}


/**
 * 资源分配作废
 */
export const allocationRecordDisable = (data: types.DisableAllocationRecordDto) => {
  return HttpRequest().$post<boolean>({
    url: '/res/v1/AllocationRecord/Disable',
    data: data
  })
}


/**
 * 查看资源分配详情
 */
export const allocationRecordView = (data: types.ViewAllocationRecordDto) => {
  return HttpRequest().$post<types.ViewAllocationRecordVo>({
    url: '/res/v1/AllocationRecord/View',
    data: data
  })
}


/**
 * 批量分配资源
 */
export const allocationRecordBatchCreate = (data: types.BatchAllocationRecordDto) => {
  return HttpRequest().$post<boolean>({
    url: '/res/v1/AllocationRecord/BatchCreate',
    data: data
  })
}


/**
 * 获取优惠券列表
 */
export const couponGetCouponList = (data: types.SelectCouponListDto) => {
  return HttpRequest().$post<types.SelectCouponListVoPageModel>({
    url: '/res/v1/Coupon/GetCouponList',
    data: data
  })
}


/**
 * 创建优惠券
 */
export const couponCreateCoupon = (data: types.CreateCouponDto) => {
  return HttpRequest().$post<string>({
    url: '/res/v1/Coupon/CreateCoupon',
    data: data
  })
}


/**
 * 删除优惠券
 */
export const couponDeleteCoupon = (data: types.CouponDto) => {
  return HttpRequest().$post<boolean>({
    url: '/res/v1/Coupon/DeleteCoupon',
    data: data
  })
}


/**
 * 查看优惠券
 */
export const couponViewCoupon = (data: types.CouponDto) => {
  return HttpRequest().$post<types.ViewCouponVo>({
    url: '/res/v1/Coupon/ViewCoupon',
    data: data
  })
}


/**
 * 编辑优惠券
 */
export const couponEditCoupon = (data: types.UpdateCouponDto) => {
  return HttpRequest().$post<boolean>({
    url: '/res/v1/Coupon/EditCoupon',
    data: data
  })
}


/**
 * 启用/禁用
 */
export const couponEnabledCoupon = (data: types.EnabledCouponDto) => {
  return HttpRequest().$post<boolean>({
    url: '/res/v1/Coupon/EnabledCoupon',
    data: data
  })
}


/**
 * 获取租户交付信息列表
 */
export const deliveryQueryPageList = (data: types.TenantInboundListDto) => {
  return HttpRequest().$post<types.TenantInboundListVoPageModel>({
    url: '/res/v1/Delivery/QueryPageList',
    data: data
  })
}


/**
 * 查看交付信息
 */
export const deliveryView = (data: types.ViewTenantInboundDto) => {
  return HttpRequest().$post<types.ViewTenantInboundVo>({
    url: '/res/v1/Delivery/View',
    data: data
  })
}


/**
 * 资源交付作废
 */
export const deliveryDisable = (data: types.DisableTenantInboundRecordDto) => {
  return HttpRequest().$post<boolean>({
    url: '/res/v1/Delivery/Disable',
    data: data
  })
}


/**
 * 资源交付
 */
export const deliveryCreateAysnc = (data: types.CreateTenantInboundDto) => {
  return HttpRequest().$post<string>({
    url: '/res/v1/Delivery/CreateAysnc',
    data: data
  })
}


/**
 * 资源入库操作
 */
export const inBoundMaterialInBound = (data: types.InBoundDto) => {
  return HttpRequest().$post<boolean>({
    url: '/res/v1/InBound/MaterialInBound',
    data: data
  })
}


/**
 * 根据源平台+源项目编号
            获取项目的所有配置信息+资源输出类别+资源编号 + 来源批次号
 */
export const inBoundGetOriginProjectInfo = (data: types.InBoundGetOriginProjectInfo) => {
  return HttpRequest().$get<types.OriginProjectInfoVo>({
    url: '/res/v1/InBound/GetOriginProjectInfo',
    data: data
  })
}


/**
 * 入库列表查询
 */
export const inBoundSelectInBoundList = (data: types.SelectInBoundListDto) => {
  return HttpRequest().$post<types.SelectInBoundListVoPageModel>({
    url: '/res/v1/InBound/SelectInBoundList',
    data: data
  })
}


/**
 * 查看入库信息详情 By 入库记录ID
 */
export const inBoundViewInBound = (data: types.ViewInBoundDto) => {
  return HttpRequest().$post<types.ViewInBoundVo>({
    url: '/res/v1/InBound/ViewInBound',
    data: data
  })
}


/**
 * 作废入库记录
 */
export const inBoundEnableInBound = (data: types.EnableInBoundDto) => {
  return HttpRequest().$post<boolean>({
    url: '/res/v1/InBound/EnableInBound',
    data: data
  })
}


/**
 * 查询平台资源入库信息
 */
export const inBoundQueryInbounRecords = (data: types.SourceInfoNonPageListDto) => {
  return HttpRequest().$post<types.SourceInfoSimpleVo[]>({
    url: '/res/v1/InBound/QueryInbounRecords',
    data: data
  })
}


/**
 * 查询可用平台资源入库信息
 */
export const inBoundQueryUsableInbounRecords = (data: types.SourceInfoNonPageListDto) => {
  return HttpRequest().$post<types.SourceInfoSimpleVo[]>({
    url: '/res/v1/InBound/QueryUsableInbounRecords',
    data: data
  })
}


/**
 * 获取平台资源列表
 */
export const materialGetMaterialList = (data: types.SelectMaterialListDto) => {
  return HttpRequest().$post<types.SelectMaterialListVoPageModel>({
    url: '/res/v1/Material/GetMaterialList',
    data: data
  })
}


/**
 * 创建资源
 */
export const materialCreateMaterial = (data: types.CreateMaterialDto) => {
  return HttpRequest().$post<string>({
    url: '/res/v1/Material/CreateMaterial',
    data: data
  })
}


/**
 * 删除资源
 */
export const materialDeleteMaterial = (data: types.DeleteMaterialDto) => {
  return HttpRequest().$post<boolean>({
    url: '/res/v1/Material/DeleteMaterial',
    data: data
  })
}


/**
 * 删除前的检查
 */
export const materialCheckMaterialDeleteState = (data: types.DeleteMaterialDto) => {
  return HttpRequest().$post<string>({
    url: '/res/v1/Material/CheckMaterialDeleteState',
    data: data
  })
}


/**
 * 编辑资源
 */
export const materialEditMaterial = (data: types.CreateMaterialDto) => {
  return HttpRequest().$post<boolean>({
    url: '/res/v1/Material/EditMaterial',
    data: data
  })
}


/**
 * 启用/禁用资源
 */
export const materialEnabledMaterial = (data: types.EnabledMaterialDto) => {
  return HttpRequest().$post<boolean>({
    url: '/res/v1/Material/EnabledMaterial',
    data: data
  })
}


/**
 * 启用/禁用资源前的检查
 */
export const materialCheckMaterialEnabledState = (data: types.CheckMaterialEnabledDto) => {
  return HttpRequest().$post<string>({
    url: '/res/v1/Material/CheckMaterialEnabledState',
    data: data
  })
}


/**
 * 查看资源
 */
export const materialViewMaterial = (data: types.MaterialDto) => {
  return HttpRequest().$post<types.ViewMaterialVo>({
    url: '/res/v1/Material/ViewMaterial',
    data: data
  })
}


/**
 * 授权资源
 */
export const materialEmpowerMaterial = (data: types.EmpowerMaterialDto) => {
  return HttpRequest().$post<boolean>({
    url: '/res/v1/Material/EmpowerMaterial',
    data: data
  })
}


/**
 * 管理端查询授权给租户的资源列表
 */
export const materialGetEmpoweredMaterialList = (data: types.EmpoweredTenantMaterialListDto) => {
  return HttpRequest().$post<types.EmpoweredTenantMaterialListVoPageModel>({
    url: '/res/v1/Material/GetEmpoweredMaterialList',
    data: data
  })
}


/**
 * 平台资源联动查询
 */
export const materialGetMaterialOptions = (data: types.MaterialOptionDto) => {
  return HttpRequest().$post<types.MaterialOptionVo[]>({
    url: '/res/v1/Material/GetMaterialOptions',
    data: data
  })
}


/**
 * 获取租户资源申请信息列表
 */
export const tenantApplyQueryPageList = (data: types.TicketsInfoListDto) => {
  return HttpRequest().$post<types.TicketsInfoListVoPageModel>({
    url: '/res/v1/TenantApply/QueryPageList',
    data: data
  })
}


/**
 * 查询租户申请资源工单数量
 */
export const tenantApplyQueryPageListCount = (data: types.TicketsInfoListCountDto) => {
  return HttpRequest().$post<types.TicketsInfoCountVo[]>({
    url: '/res/v1/TenantApply/QueryPageListCount',
    data: data
  })
}


/**
 * 租户申请资源下拉联动查询
 */
export const tenantApplyGetApplyMaterialTypeOptions = (data: types.TenantApplyMaterialTypeOptionDto) => {
  return HttpRequest().$post<types.TenantApplyMaterialTypeOptionVo[]>({
    url: '/res/v1/TenantApply/GetApplyMaterialTypeOptions',
    data: data
  })
}


/**
 * 创建资源申请
 */
export const tenantApplyCreate = (data: types.CreateTenantApplyDto) => {
  return HttpRequest().$post<string>({
    url: '/res/v1/TenantApply/Create',
    data: data
  })
}


/**
 * 编辑资源申请
 */
export const tenantApplyEdit = (data: types.EditTenantApplyDto) => {
  return HttpRequest().$post<string>({
    url: '/res/v1/TenantApply/Edit',
    data: data
  })
}


/**
 * 删除资源申请
 */
export const tenantApplyDelete = (data: types.DeleteTenantApplyDto) => {
  return HttpRequest().$post<boolean>({
    url: '/res/v1/TenantApply/Delete',
    data: data
  })
}


/**
 * 查看交付信息
 */
export const tenantApplyView = (data: types.ViewTicketsInfoDto) => {
  return HttpRequest().$post<types.ViewTicketsInfoVo>({
    url: '/res/v1/TenantApply/View',
    data: data
  })
}


/**
 * 更新资源申请状态
 */
export const tenantApplyUpdateStatus = (data: types.EditTicketStatusDto) => {
  return HttpRequest().$post<boolean>({
    url: '/res/v1/TenantApply/UpdateStatus',
    data: data
  })
}


/**
 * 查看申请交付详情
 */
export const tenantApplyViewDelivery = (data: types.ViewApplyInboundInfoDto) => {
  return HttpRequest().$post<types.ViewApplicationDeliveryVo>({
    url: '/res/v1/TenantApply/ViewDelivery',
    data: data
  })
}


/**
 * 查看资源申请交付记录
 */
export const tenantApplyViewDeliveryRecords = (data: types.ViewTenantApplicationDelieveryRecordsDto) => {
  return HttpRequest().$post<types.ViewTenantApplicationDelieveryRecordsVo>({
    url: '/res/v1/TenantApply/ViewDeliveryRecords',
    data: data
  })
}


/**
 * 资源申请查询分配列表
 */
export const tenantApplyViewDeliveryAllocations = (data: types.ViewTenantApplicationDelieveryRecordsDto) => {
  return HttpRequest().$post<types.ViewTenantApplicationDelieveryRecordsVo>({
    url: '/res/v1/TenantApply/ViewDeliveryAllocations',
    data: data
  })
}


/**
 * 获取租户交付信息列表
 */
export const tenantInboundQueryPageList = (data: types.TenantInboundListDto) => {
  return HttpRequest().$post<types.TenantInboundListVoPageModel>({
    url: '/res/v1/TenantInbound/QueryPageList',
    data: data
  })
}


/**
 * 查看交付信息
 */
export const tenantInboundView = (data: types.ViewTenantInboundDto) => {
  return HttpRequest().$post<types.ViewTenantInboundVo>({
    url: '/res/v1/TenantInbound/View',
    data: data
  })
}


/**
 * 查询租户端资源交付记录
 */
export const tenantInboundQueryDeliveryRecords = (data: types.ViewTenantInboundSimpleDto) => {
  return HttpRequest().$post<types.ViewTenantInboundSimpleVo[]>({
    url: '/res/v1/TenantInbound/QueryDeliveryRecords',
    data: data
  })
}


/**
 * 租户端资源交付信息联动查询
 */
export const tenantInboundGetTenantInboundRecordOptions = (data: types.TenantInboundRecordOptionDto) => {
  return HttpRequest().$post<types.TenantInboundRecordOptionVo[]>({
    url: '/res/v1/TenantInbound/GetTenantInboundRecordOptions',
    data: data
  })
}


/**
 * 获取租户资源列表
 */
export const tenantMaterialQueryPageList = (data: types.TenantMaterialListDto) => {
  return HttpRequest().$post<types.TenantMaterialListVoPageModel>({
    url: '/res/v1/TenantMaterial/QueryPageList',
    data: data
  })
}


/**
 * 获取租户资源列表查询数量
 */
export const tenantMaterialQueryPageListCount = (data: types.TenantMaterialListCountDto) => {
  return HttpRequest().$post<types.TenantMaterialListCountVo[]>({
    url: '/res/v1/TenantMaterial/QueryPageListCount',
    data: data
  })
}


/**
 * 创建租户资源
 */
export const tenantMaterialCreateMaterial = (data: types.CreateTenantMaterialDto) => {
  return HttpRequest().$post<string>({
    url: '/res/v1/TenantMaterial/CreateMaterial',
    data: data
  })
}


/**
 * 编辑租户资源
 */
export const tenantMaterialEditMaterial = (data: types.EditTenantMaterialDto) => {
  return HttpRequest().$post<boolean>({
    url: '/res/v1/TenantMaterial/EditMaterial',
    data: data
  })
}


/**
 * 删除租户资源
 */
export const tenantMaterialDeleteMaterial = (data: types.DeleteTenantMaterialDto) => {
  return HttpRequest().$post<boolean>({
    url: '/res/v1/TenantMaterial/DeleteMaterial',
    data: data
  })
}


/**
 * 查看资源
 */
export const tenantMaterialViewMaterial = (data: types.ViewTenantMaterialDto) => {
  return HttpRequest().$post<types.ViewTenantMaterialVo>({
    url: '/res/v1/TenantMaterial/ViewMaterial',
    data: data
  })
}


/**
 * 租户资源联动查询
 */
export const tenantMaterialGetTenantMaterialOptions = (data: types.TenantMaterialOptionDto) => {
  return HttpRequest().$post<types.TenantMaterialOptionVo[]>({
    url: '/res/v1/TenantMaterial/GetTenantMaterialOptions',
    data: data
  })
}


/**
 * 获取租户资源申请信息列表
 */
export const ticketsQueryPageList = (data: types.TicketsInfoListDto) => {
  return HttpRequest().$post<types.TicketsInfoListVoPageModel>({
    url: '/res/v1/Tickets/QueryPageList',
    data: data
  })
}


/**
 * 查询租户申请资源工单数量
 */
export const ticketsQueryPageListCount = (data: types.TicketsInfoListCountDto) => {
  return HttpRequest().$post<types.TicketsInfoCountVo[]>({
    url: '/res/v1/Tickets/QueryPageListCount',
    data: data
  })
}


/**
 * 查看交付信息
 */
export const ticketsView = (data: types.ViewTicketsInfoDto) => {
  return HttpRequest().$post<types.ViewTicketsInfoVo>({
    url: '/res/v1/Tickets/View',
    data: data
  })
}


/**
 * 更新资源申请状态
 */
export const ticketsUpdateStatus = (data: types.EditTicketStatusDto) => {
  return HttpRequest().$post<boolean>({
    url: '/res/v1/Tickets/UpdateStatus',
    data: data
  })
}


/**
 * 查看申请交付详情
 */
export const ticketsViewDelivery = (data: types.ViewApplyInboundInfoDto) => {
  return HttpRequest().$post<types.ViewApplicationDeliveryVo>({
    url: '/res/v1/Tickets/ViewDelivery',
    data: data
  })
}


/**
 * 获取一个资源的默认Code
 */
export const toolTakeDefaultCode = (data: types.ToolTakeDefaultCode) => {
  return HttpRequest().$get<string>({
    url: '/res/v1/Tool/TakeDefaultCode',
    data: data
  })
}


/**
 * 尝试反序列化到资源ID值：前端用不上
 */
export const toolTryDeSerializeToId = (data: types.ToolTryDeSerializeToId) => {
  return HttpRequest().$post<types.StringPrizeTypeDefineValueTuple>({
    url: '/res/v1/Tool/TryDeSerializeToId',
    data: data
  })
}


/**
 * 源平台定义
 */
export const toolGetSourcePlatformDefine = () => {
  return HttpRequest().$get<types.SourcePlatformDefineVo[]>({
    url: '/res/v1/Tool/GetSourcePlatformDefine'
  })
}


/**
 * 奖品类型定义
 */
export const toolGetPrizeTypeDefine = () => {
  return HttpRequest().$get<types.PrizeTypeDefineVo[]>({
    url: '/res/v1/Tool/GetPrizeTypeDefine'
  })
}


/**
 * 获取优惠券类型定义
 */
export const toolGetCouponTypeDefine = () => {
  return HttpRequest().$get<types.CouponTypeDefineVo[]>({
    url: '/res/v1/Tool/GetCouponTypeDefine'
  })
}


/**
 * 租户端获取申请资源类型定义
 */
export const toolGetApplyMaterialTypeDefine = () => {
  return HttpRequest().$get<types.PrizeTypeDefineVo[]>({
    url: '/res/v1/Tool/GetApplyMaterialTypeDefine'
  })
}

