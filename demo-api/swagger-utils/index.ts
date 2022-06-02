type integer = number
type array =[]

/**
* PrizeTypeDefine --自定义类型
*/
type PrizeTypeDefine = integer


/**
* 获取资源分配列表
*/
export interface TenantAllocationRecordListDto {
  pageIndex?: integer;// undefined
  pageSize?: integer;// undefined
  tenantId?: number|string;// 租户Id
  allocateNum?: string;// 分配编号
  campaignKeyWord?: string;// 活动编号或名称
  materialKeyWord?: string;// 资源编号或名称
  prizeType?: PrizeTypeDefine;// undefined      
}

export type MaterialKindsTypeDefine = integer 

/**
* CampaignSimpleVoRes
*/
export interface CampaignSimpleVo {
  code: string;// 活动编号
  name: string;// 活动名称
}


/**
* AllocationRecordListVoRes
*/
export interface AllocationRecordListVo {
  id: number;// 分配记录Id
  allocateNum: string;// 分配编号
  tenantId: number;// 租户Id
  campaignId: number;// 活动ID
  tenantMaterialId: number;// 租户资源ID
  materialKinds: MaterialKindsTypeDefine;// undefined
  sourceId: number;// 来源ID(交付批次明细ID)
  deliverNum: string;// 交付编号
  allocatedCount: integer;// 已分配数量（小于来源记录所包含的数量）
  usedCount: integer;// 已使用数量（等于分配数量时为已用完）
  allocationDescription: string;// 分配说明
  createdByName: string;// 创建人
  createdBy: number;// 创建人
  createdAt: string;// 创建时间
  enabled: boolean;// 是否作废
  disabledCount: integer;// 作废数量
  campaign: CampaignSimpleVo;// undefined
  materialCode: string;// 租户资源编号
  materialName: string;// 租户资源名称
  prizeType: PrizeTypeDefine;// undefined
  prizeTypeName: string;// 租户资源类型名称
}


/**
* 获取资源分配列表Res
*/
export interface AllocationRecordListVoPageModel {
  pageIndex: integer;// undefined
  pageSize: integer;// undefined
  dataCount: integer;// undefined
  data: AllocationRecordListVo[];// undefined
}


/**
* 租户资源活动分配记录列表简洁查询
*/
export interface AllocationRecordListSimpleDto {
  pageIndex?: integer;// undefined
  pageSize?: integer;// undefined
  tenantId?: number|string;// 租户Id
  tenantMaterialId?: number|string;// 租户资源Id
  campaignKeyWord?: string;// 活动编号或名称    
}


/**
* AllocationRecordListSimpleVoRes
*/
export interface AllocationRecordListSimpleVo {
  campaignId: number;// 活动ID
  tenantMaterialId: number;// 租户资源ID
  allocatedCount: integer;// 已分配数量（小于来源记录所包含的数量）
  usedCount: integer;// 已使用数量（等于分配数量时为已用完）
  campaign: CampaignSimpleVo;// undefined
}


/**
* 租户资源活动分配记录列表简洁查询Res
*/
export interface AllocationRecordListSimpleVoPageModel {
  pageIndex: integer;// undefined
  pageSize: integer;// undefined
  dataCount: integer;// undefined
  data: AllocationRecordListSimpleVo[];// undefined
}


/**
* 租户资源活动分配记录列表非分页简洁查询
*/
export interface AllocationRecordNonPagedListDto {
  tenantId?: number|string;// 租户Id
  deliverId?: number|string;// 交付明细Id 
}


/**
* 创建资源分配
*/
export interface CreateAllocationRecordDto {
  tenantId?: number|string;// 租户Id
  campaignId?: number|string;// 活动ID
  tenantMaterialId?: number|string;// 租户资源ID
  materialKinds?: MaterialKindsTypeDefine;// undefined
  sourceId?: number|string;// 来源ID(交付批次明细ID)
  allocatedCount?: integer;// 已分配数量（小于来源记录所包含的数量）
  usedCount?: integer;// 已使用数量（等于分配数量时为已用完）
  allocationDescription?: string;// 分配说明      
}


/**
* 资源分配作废
*/
export interface DisableAllocationRecordDto {
  id?: number|string;// 资源分配记录Id
  tenantId?: number|string;// 租户Id 
}


/**
* 查看资源分配详情
*/
export interface ViewAllocationRecordDto {
  id?: number|string;// 资源分配记录Id
  tenantId?: number|string;// 租户Id 
}


/**
* MaterialSimpleVoRes
*/
export interface MaterialSimpleVo {
  id: number;// 资源ID
  code: string;// 资源编号
  name: string;// 资源名称
  prizeType: PrizeTypeDefine;// undefined
  prizeTypeName: string;// 资源类型名称
}


/**
* TenantMaterialSimpleVoRes
*/
export interface TenantMaterialSimpleVo {
  id: number;// 租户资源Id
  code: string;// 资源编号
  name: string;// 资源名称
  prizeType: PrizeTypeDefine;// undefined
  prizeTypeName: string;// 资源类型名称
  realMaterial: MaterialSimpleVo;// undefined
}


/**
* SourceInfoVoRes
*/
export interface SourceInfoVo {
  sourcePlatform: string;// 来源平台名称
  sourceProjectName: string;// 来源项目名称
  sourceMaterialName: string;// 来源资源名称
  sourceBatchNo: string;// 来源批次号
}


/**
* 查看资源分配详情Res
*/
export interface ViewAllocationRecordVo {
  id: number;// 分配记录Id
  tenantId: number;// 租户Id
  campaignId: number;// 活动ID
  campaign: CampaignSimpleVo;// undefined
  tenantMaterialId: number;// 租户资源ID
  tenantMaterial: TenantMaterialSimpleVo;// undefined
  deliverNum: string;// 交付编号
  materialKinds: MaterialKindsTypeDefine;// undefined
  sourceId: number;// 来源ID(交付批次明细ID)
  source: SourceInfoVo;// undefined
  allocatedCount: integer;// 已分配数量（小于来源记录所包含的数量）
  usedCount: integer;// 已使用数量（等于分配数量时为已用完）
  allocationDescription: string;// 分配说明
  enabled: boolean;// 是否作废
}


/**
* 批量分配资源
*/
export interface BatchAllocationRecordDto {
  ticketsId?: number|string;// 资源申请ID
  tenantId?: number|string;// 租户Id
  records?: CreateAllocationRecordDto[];// 分配明细  
}


/**
* CouponTypeDefine --自定义类型
*/
type CouponTypeDefine = integer


/**
* 获取优惠券列表
*/
export interface SelectCouponListDto {
  pageIndex?: integer;// undefined
  pageSize?: integer;// undefined
  name?: string;// 资源编号或类型
  prizeType?: PrizeTypeDefine;// undefined
  couponType?: CouponTypeDefine;// undefined   
}


/**
* SelectCouponListVoRes
*/
export interface SelectCouponListVo {
  id: string;// 资源ID
  code: string;// 资源编号
  name: string;// 资源名称
  prizeType: PrizeTypeDefine;// undefined
  prizeTypeName: string;// 资源类型名称
  enabled: boolean;// 状态：是否启用
  createdByName: string;// 创建人
  createdBy: number;// 创建人
  createdAt: string;// 创建时间
  updatedByName: string;// 修改人
  updatedBy: number;// 修改人
  updatedAt: string;// 修改时间
  materialRelationId: string;// 优惠券绑定的优惠资源ID真实资源
  couponType: CouponTypeDefine;// undefined
  discountRange: number;// 折扣或优惠幅度，依据类型
  materialPrimitiveCost: number;// 绑定真实资源的资源原价
  originCost: number;// 商品原价、优惠券优惠之前的价格(跟实际绑定资源的价格没有关系)
}


/**
* 获取优惠券列表Res
*/
export interface SelectCouponListVoPageModel {
  pageIndex: integer;// undefined
  pageSize: integer;// undefined
  dataCount: integer;// undefined
  data: SelectCouponListVo[];// undefined
}


/**
* 创建优惠券
*/
export interface CreateCouponDto {
  materialId?: number|string;// 资源ID
  code?: string;// 资源编号
  name?: string;// 资源名称
  prizeType?: PrizeTypeDefine;// undefined
  pic?: string;// 资源图片
  cost?: number;// 资源价值
  enabled?: boolean;// 是否启用
  description?: string;// 资源说明
  materialRelationId?: number|string;// 优惠券绑定的优惠资源ID真实资源
  couponType?: CouponTypeDefine;// undefined
  discountRange?: number;// 折扣或优惠幅度，依据类型
  originCost?: number;// 商品原价、优惠券优惠之前的价格(跟实际绑定资源的价格没有关系)         
}


/**
* 删除优惠券
*/
export interface CouponDto {
  materialId?: number|string;// 资源ID
}


/**
* 查看优惠券Res
*/
export interface ViewCouponVo {
  materialId: string;// 资源ID
  code: string;// 资源编号
  name: string;// 资源名称
  prizeType: PrizeTypeDefine;// undefined
  pic: string;// 资源图片
  cost: number;// 资源价值
  enabled: boolean;// 是否启用
  description: string;// 资源说明
  totalCount: integer;// 资源总数量
  reMainCount: integer;// 入库剩余量
  deliveryCount: integer;// 已交付量
  materialRelationId: string;// 优惠券绑定的优惠资源ID真实资源
  materialRelationType: PrizeTypeDefine;// undefined
  couponType: CouponTypeDefine;// undefined
  discountRange: number;// 折扣或优惠幅度，依据类型
  materialPrimitiveCost: number;// 绑定真实资源的资源原价
  originCost: number;// 商品原价、优惠券优惠之前的价格(跟实际绑定资源的价格没有关系)
}


/**
* 编辑优惠券
*/
export interface UpdateCouponDto {
  materialId?: number|string;// 资源ID
  code?: string;// 资源编号
  name?: string;// 资源名称
  prizeType?: PrizeTypeDefine;// undefined
  pic?: string;// 资源图片
  cost?: number;// 资源价值
  enabled?: boolean;// 是否启用
  description?: string;// 资源说明
  materialRelationId?: number|string;// 优惠券绑定的优惠资源ID真实资源
  couponType?: CouponTypeDefine;// undefined
  discountRange?: number;// 折扣或优惠幅度，依据类型
  originCost?: number;// 商品原价、优惠券优惠之前的价格(跟实际绑定资源的价格没有关系)         
}


/**
* 启用/禁用
*/
export interface EnabledCouponDto {
  materialId?: number|string;// 资源ID
  enabled?: boolean;// 设置启用-TRUE、禁用-FALSE 
}


/**
* AllocatedStateDefine --自定义类型
*/
type AllocatedStateDefine = integer


/**
* 获取租户交付信息列表
*/
export interface TenantInboundListDto {
  pageIndex?: integer;// undefined
  pageSize?: integer;// undefined
  tenantId?: number|string;// 租户Id
  deliverNum?: string;// 交付编号
  applyNum?: string;// 工单申请编号
  materialKeyWord?: string;// 资源编号或名称
  prizeType?: PrizeTypeDefine;// undefined
  allocatedState?: AllocatedStateDefine;// undefined      
}


/**
* TenantInboundListVoRes
*/
export interface TenantInboundListVo {
  id: number;// 交付Id
  deliverNum: string;// 交付编号
  tenantId: number;// 租户Id
  ticketsId: number;// 工单申请Id
  applyNum: string;// 工单申请编号
  tenantMaterialId: number;// 租户资源ID
  materialInboundId: number;// 平台资源入库记录ID
  inboundDeliveryCount: integer;// 交付数量
  allocationCount: integer;// 已分配数量
  inboundDescription: string;// 备注
  createdByName: string;// 创建人
  createdBy: number;// 创建人
  createdAt: string;// 创建时间
  enabled: boolean;// 是否作废
  allocatedState: AllocatedStateDefine;// undefined
  disabledCount: integer;// 作废数量
  tenantMaterial: TenantMaterialSimpleVo;// undefined
  source: SourceInfoVo;// undefined
}


/**
* 获取租户交付信息列表Res
*/
export interface TenantInboundListVoPageModel {
  pageIndex: integer;// undefined
  pageSize: integer;// undefined
  dataCount: integer;// undefined
  data: TenantInboundListVo[];// undefined
}


/**
* 查看交付信息
*/
export interface ViewTenantInboundDto {
  id?: number|string;// 交付明细Id
  tenantId?: number|string;// 租户Id 
}

export type SourcePlatformDefine = integer 

/**
* SourceInfoSimpleVoRes
*/
export interface SourceInfoSimpleVo {
  id: number;// 平台资源入库记录
  materialId: number;// 平台资源Id
  inboundNum: string;// 平台资源入库批次号
  sourcePlatform: SourcePlatformDefine;// undefined
  sourcePlatformName: string;// 来源平台名称
  sourceProjectName: string;// 来源项目名称
  sourceMaterialName: string;// 来源资源名称
  sourceBatchNo: string;// 来源批次号
  inBoundCount: integer;// 入库总数
  reMainCount: integer;// 入库剩余量
  enabled: boolean;// 
}


/**
* 查看交付信息Res
*/
export interface ViewTenantInboundVo {
  id: number;// 分配记录Id
  deliverNum: string;// 交付编号
  tenantId: number;// 租户Id
  tenantMaterialId: number;// 租户资源ID
  tenantMaterial: TenantMaterialSimpleVo;// undefined
  platformMaterialId: number;// 关联的平台资源ID
  materialInboundId: number;// 平台资源入库记录表Id/来源入库批次Id
  source: SourceInfoSimpleVo;// undefined
  ticketsId: number;// 工单申请Id - 交付明细表内
  applyNum: string;// 工单申请编号
  inboundDeliveryCount: integer;// 交付数量/本次交付数量
  ticketsDetailId: number;// 申请工单详情Id
  applyCount: integer;// 当前资源申请数/应交付数量 - 工单详情表内
  inboundBatchId: number;// 交付批次主表ID
  inboundDescription: string;// 交付备注 - 交付批次主表内
}


/**
* 资源交付作废
*/
export interface DisableTenantInboundRecordDto {
  id?: number|string;// 资源交付明细Id
}


/**
* 资源交付
*/
export interface CreateTenantInboundRecordDto {
  tenantMaterialId?: number|string;// 租户资源ID
  inboundDeliveryCount?: integer;// 交付数量
  materialInboundId?: number|string;// 平台资源入库记录ID  
}


/**
* 资源交付
*/
export interface CreateTenantInboundDto {
  ticketsId?: number|string;// 工单申请Id
  inboundDescription?: string;// 备注
  details?: CreateTenantInboundRecordDto[];// 交付明细  
}


/**
* SourceProductTypeDefine --自定义类型
*/
type SourceProductTypeDefine = integer


/**
* 资源入库操作
*/
export interface InBoundDto {
  prizeType?: PrizeTypeDefine;// undefined
  materialId?: number|string;// 入库资源ID
  sourcePlatformDefine?: SourcePlatformDefine;// undefined
  sourceProductTypeDefine?: SourceProductTypeDefine;// undefined
  sourceProject?: string;// 请输入来源项目(名称)
  sourceMaterialId?: integer;// 来源资源
  sourceBatchNo?: string;// 来源批次号
  inBoundCount?: integer;// 入库数量    
}


/**
* InBoundGetOriginProjectInfo
*/
export interface InBoundGetOriginProjectInfo {
  SourcePlatformDefine?: SourcePlatformDefine;// 来源平台
  ProjectNo?: string;// 来源项目编号
}


/**
* OriginBatchNumModelRes
*/
export interface OriginBatchNumModel {
  originBatchNum: string;// 入库批次号
  originAvailableQty: number;// 可调用数量
}


/**
* OriginMaterialModelRes
*/
export interface OriginMaterialModel {
  originMaterialId: number;// 来源资源Id
  originMaterialCode: string;// 来源资源Code
  originMaterialName: string;// 来源资源名称
  originProductType: SourceProductTypeDefine;// undefined
  originBatchNumList: OriginBatchNumModel[];// 来源批次号
}


/**
* 根据源平台+源项目编号
            获取项目的所有配置信息+资源输出类别+资源编号 + 来源批次号Res
*/
export interface OriginProjectInfoVo {
  originProjectId: integer;// 来源项目id
  originProjectNum: string;// 来源项目编号
  originProjectName: string;// 来源项目名称
  originMaterialList: OriginMaterialModel[];// 源资源实体列表
}


/**
* 入库列表查询
*/
export interface SelectInBoundListDto {
  pageIndex?: integer;// undefined
  pageSize?: integer;// undefined
  inBoundBatchNum?: string;// 入库批次号
  selectName?: string;// 资源编号/名称
  prizeTypeDefine?: PrizeTypeDefine;// undefined    
}


/**
* SelectInBoundListVoRes
*/
export interface SelectInBoundListVo {
  inBoundId: string;// 入库记录ID
  inBoundBatchNum: string;// 入库批次号
  materialCode: string;// 资源编号
  materialName: string;// 资源名称
  prizeTypeDefine: PrizeTypeDefine;// undefined
  prizeTypeName: string;// 资源类型
  inBoundCount: integer;// 入库数量
  sourceInfo: SourceInfoVo;// undefined
  createName: string;// 创建人
  createTime: string;// 创建时间
  enabled: boolean;// 启用true/禁用false状态
}


/**
* 入库列表查询Res
*/
export interface SelectInBoundListVoPageModel {
  pageIndex: integer;// undefined
  pageSize: integer;// undefined
  dataCount: integer;// undefined
  data: SelectInBoundListVo[];// undefined
}


/**
* 查看入库信息详情 By 入库记录ID
*/
export interface ViewInBoundDto {
  inBoundId?: number|string;// 入库记录ID
}


/**
* 查看入库信息详情 By 入库记录IDRes
*/
export interface ViewInBoundVo {
  inBoundId: string;// 入库记录ID
  inBoundBatchNum: string;// 入库批次号
  materialCode: string;// 资源编号
  materialName: string;// 资源名称
  prizeTypeDefine: PrizeTypeDefine;// undefined
  prizeTypeName: string;// 资源类型
  inBoundCount: integer;// 入库数量
  sourceInfo: SourceInfoVo;// undefined
  createName: string;// 创建人
  createTime: string;// 创建时间
  enabled: boolean;// 启用true/禁用false状态
}


/**
* 作废入库记录
*/
export interface EnableInBoundDto {
  inBoundId?: number|string;// 入库记录ID
  enabled?: boolean;// 启用true /禁用 false 
}


/**
* 查询平台资源入库信息
*/
export interface SourceInfoNonPageListDto {
  materialId?: number|string;// 平台资源Id
  ids?: number[]|string[];// 平台资源入库记录Ids 
}


/**
* 获取平台资源列表
*/
export interface SelectMaterialListDto {
  pageIndex?: integer;// undefined
  pageSize?: integer;// undefined
  name?: string;// 资源编号或类型
  prizeType?: PrizeTypeDefine;// undefined   
}


/**
* SelectMaterialListVoRes
*/
export interface SelectMaterialListVo {
  id: string;// 资源ID
  code: string;// 资源编号
  name: string;// 资源名称
  prizeType: PrizeTypeDefine;// undefined
  prizeTypeName: string;// 资源类型名称
  enabled: boolean;// 状态：是否启用
  createdByName: string;// 创建人
  createdBy: number;// 创建人
  createdAt: string;// 创建时间
  updatedByName: string;// 修改人
  updatedBy: number;// 修改人
  updatedAt: string;// 修改时间
}


/**
* 获取平台资源列表Res
*/
export interface SelectMaterialListVoPageModel {
  pageIndex: integer;// undefined
  pageSize: integer;// undefined
  dataCount: integer;// undefined
  data: SelectMaterialListVo[];// undefined
}


/**
* 创建资源
*/
export interface CreateMaterialDto {
  materialId?: number|string;// 资源ID
  code?: string;// 资源编号
  name?: string;// 资源名称
  prizeType?: PrizeTypeDefine;// undefined
  pic?: string;// 资源图片
  cost?: number;// 资源价值
  enabled?: boolean;// 是否启用
  description?: string;// 资源说明      
}


/**
* 删除资源
*/
export interface DeleteMaterialDto {
  materialId?: number|string;// 资源ID
}


/**
* 启用/禁用资源
*/
export interface EnabledMaterialDto {
  materialId?: number|string;// 资源ID
  enabled?: boolean;// 设置启用-TRUE、禁用-FALSE 
}


/**
* 启用/禁用资源前的检查
*/
export interface CheckMaterialEnabledDto {
  materialId?: number|string;// 资源ID
  enabled?: boolean;// 设置启用-TRUE、禁用-FALSE 
}


/**
* 查看资源
*/
export interface MaterialDto {
  materialId?: number|string;// 资源ID
}


/**
* 查看资源Res
*/
export interface ViewMaterialVo {
  materialId: string;// 资源ID
  code: string;// 资源编号
  name: string;// 资源名称
  prizeType: PrizeTypeDefine;// undefined
  pic: string;// 资源图片
  cost: number;// 资源价值
  enabled: boolean;// 是否启用
  description: string;// 资源说明
  totalCount: integer;// 资源总数量
  reMainCount: integer;// 入库剩余量
  deliveryCount: integer;// 已交付量
}


/**
* 授权资源
*/
export interface EmpowerMaterialDto {
  tenantId?: number|string;// 租户Id
  materialIds?: number[]|string[];// 资源Ids 
}


/**
* 管理端查询授权给租户的资源列表
*/
export interface EmpoweredTenantMaterialListDto {
  pageIndex?: integer;// undefined
  pageSize?: integer;// undefined
  tenantId?: number|string;// 租户Id
  keyWord?: string;// 资源编号或名称
  prizeType?: PrizeTypeDefine;// undefined    
}


/**
* EmpoweredTenantMaterialListVoRes
*/
export interface EmpoweredTenantMaterialListVo {
  id: number;// 租户资源Id
  tenantId: string;// 租户Id
  materialId: number;// 平台资源ID
  enabled: boolean;// 资源状态
  code: string;// 资源编号
  name: string;// 资源名称
  prizeType: PrizeTypeDefine;// undefined
  prizeTypeName: string;// 资源类型名称（1-红包、2-电子、3-直充、4-实物、5-优惠券）
  pic: string;// 资源图片
  cost: number;// 资源价值
  status: boolean;// 状态
  description: string;// 资源说明
  createdByName: string;// 创建人
  createdBy: number;// 创建人
  createdAt: string;// 创建时间
}


/**
* 管理端查询授权给租户的资源列表Res
*/
export interface EmpoweredTenantMaterialListVoPageModel {
  pageIndex: integer;// undefined
  pageSize: integer;// undefined
  dataCount: integer;// undefined
  data: EmpoweredTenantMaterialListVo[];// undefined
}


/**
* 平台资源联动查询
*/
export interface MaterialOptionDto {
  prizeType?: PrizeTypeDefine;// undefined
}


/**
* 平台资源联动查询Res
*/
export interface MaterialOptionVo {
  id: number;// 资源Id
  code: string;// 资源编号
  name: string;// 资源名称
  cost: number;// 资源价值
  prizeType: PrizeTypeDefine;// undefined
  prizeTypeName: string;// 资源类型名称
}


/**
* TicketStateDefine --自定义类型
*/
type TicketStateDefine = integer


/**
* 获取租户资源申请信息列表
*/
export interface TicketsInfoListDto {
  pageIndex?: integer;// undefined
  pageSize?: integer;// undefined
  tenantId?: number|string;// 租户Id
  applyNum?: string;// 申请编号
  applyAccountName?: string;// 申请人
  states?: TicketStateDefine[];// 工单状态1-待提交;2-已驳回;4-待审核;8-待交付;16-已交付;24-部分交付(8+16)
  description?: string;// 备注     
}


/**
* TicketsInfoListVoRes
*/
export interface TicketsInfoListVo {
  id: number;// 申请主表Id
  tenantId: number;// 租户Id
  applyAccountId: number;// 申请人ID
  applyAccountName: string;// 申请人
  ticketsStatus: TicketStateDefine;// undefined
  applyNum: string;// 申请编号
  applyItemCount: integer;// 申请资源项数
  description: string;// 备注
  createdAt: string;// 创建时间
}


/**
* 获取租户资源申请信息列表Res
*/
export interface TicketsInfoListVoPageModel {
  pageIndex: integer;// undefined
  pageSize: integer;// undefined
  dataCount: integer;// undefined
  data: TicketsInfoListVo[];// undefined
}


/**
* 查询租户申请资源工单数量
*/
export interface TicketsInfoListCountDto {
  tenantId?: number|string;// 租户Id
  applyNum?: string;// 申请编号
  applyAccountName?: string;// 申请人
  description?: string;// 备注   
}


/**
* 查询租户申请资源工单数量Res
*/
export interface TicketsInfoCountVo {
  states: TicketStateDefine[];// 工单状态
  statesName: string;// 工单状态名称
  totalCount: integer;// 查询数量
}


/**
* ApplyMaterialTypeDefine --自定义类型
*/
type ApplyMaterialTypeDefine = integer


/**
* 租户申请资源下拉联动查询
*/
export interface TenantApplyMaterialTypeOptionDto {
  tenantId?: number|string;// 租户Id
  applyMaterialType?: ApplyMaterialTypeDefine;// undefined 
}


/**
* 租户申请资源下拉联动查询Res
*/
export interface TenantApplyMaterialTypeOptionVo {
  id: number;// 资源Id
  code: string;// 资源编号
  name: string;// 资源名称
  prizeType: PrizeTypeDefine;// undefined
  typeName: string;// 资源类型名称
  couponType: CouponTypeDefine;// undefined
}


/**
* 创建资源申请
*/
export interface ApplyMaterialDetailDto {
  id?: number|string;// 资源申请详情ID
  materialId?: number|string;// 租户资源ID
  count?: integer;// 申请数量  
}


/**
* 创建资源申请
*/
export interface CreateTenantApplyDto {
  details?: ApplyMaterialDetailDto[];// 申请资源详情信息
  description?: string;// 资源说明
  tenantId?: number|string;// 租户Id
  isSubmit?: boolean;// 是否一并提交
  ticketsStatus?: TicketStateDefine;// undefined   
}


/**
* 编辑资源申请
*/
export interface EditTenantApplyDto {
  details?: ApplyMaterialDetailDto[];// 申请资源详情信息
  description?: string;// 资源说明
  tenantId?: number|string;// 租户Id
  isSubmit?: boolean;// 是否一并提交
  ticketsStatus?: TicketStateDefine;// undefined
  id?: number|string;// 资源申请ID   
}


/**
* 删除资源申请
*/
export interface DeleteTenantApplyDto {
  id?: number|string;// 资源申请Id
  tenantId?: number|string;// 租户Id 
}


/**
* 查看交付信息
*/
export interface ViewTicketsInfoDto {
  tenantId?: number|string;// 租户Id
  id?: number|string;// 租户资源申请ID 
}


/**
* ViewTicketsDetialVoRes
*/
export interface ViewTicketsDetialVo {
  id: number;// 详情Id
  materialId: number;// 租户资源Id
  code: string;// 资源编号
  name: string;// 资源名称
  prizeType: PrizeTypeDefine;// undefined
  typeName: string;// 资源类型名称
  applyCount: integer;// 申请数量
  deliveryCount: integer;// 交付数量
  remainCount: integer;// 剩余交付数量
  couponType: CouponTypeDefine;// undefined
  deliveryStatus: TicketStateDefine;// undefined
}


/**
* 查看交付信息Res
*/
export interface ViewTicketsInfoVo {
  id: number;// 申请Id
  applyNum: string;// 申请编号
  tenantId: number;// 租户Id
  ticketsStatus: TicketStateDefine;// undefined
  details: ViewTicketsDetialVo[];// 资源申请详情
  description: string;// 备注
}


/**
* 更新资源申请状态
*/
export interface EditTicketStatusDto {
  id?: number|string;// 资源申请Id
  tenantId?: number|string;// 租户Id
  ticketsStatus?: TicketStateDefine;// undefined  
}


/**
* 查看申请交付详情
*/
export interface ViewApplyInboundInfoDto {
  tenantId?: number|string;// 租户Id
  id?: number|string;// 租户资源申请ID 
}


/**
* ViewApplicationDeliveryDetailVoRes
*/
export interface ViewApplicationDeliveryDetailVo {
  id: number;// 详情Id
  materialId: number;// 租户资源Id
  code: string;// 资源编号
  name: string;// 资源名称
  prizeType: PrizeTypeDefine;// undefined
  typeName: string;// 资源类型名称
  applyCount: integer;// 申请数量
  couponType: CouponTypeDefine;// undefined
  deliveryStatus: TicketStateDefine;// undefined
  platformMaterialId: number;// 平台资源Id
  deliveryCount: integer;// 实际交付数量
  remainCount: integer;// 剩余未交付数量
}


/**
* 查看申请交付详情Res
*/
export interface ViewApplicationDeliveryVo {
  id: number;// 申请Id
  applyNum: string;// 申请编号
  tenantId: number;// 租户Id
  ticketsStatus: TicketStateDefine;// undefined
  description: string;// 备注
  deliveringDetails: ViewApplicationDeliveryDetailVo[];// 交付中详情
  finishedDetails: ViewApplicationDeliveryDetailVo[];// 已完成详情
}


/**
* 查看资源申请交付记录
*/
export interface ViewTenantApplicationDelieveryRecordsDto {
  tenantId?: number|string;// 租户Id
  id?: number|string;// 租户资源申请ID 
}


/**
* ViewTenantInboundSimpleVoRes
*/
export interface ViewTenantInboundSimpleVo {
  id: number;// 交付Id
  deliverNum: string;// 交付编号
  tenantId: number;// 租户Id
  ticketsId: number;// 工单申请Id
  applyNum: string;// 工单申请编号
  tenantMaterialId: number;// 租户资源ID
  materialInboundId: number;// 平台资源入库记录ID
  inboundDeliveryCount: integer;// 交付数量
  tenantMaterial: TenantMaterialSimpleVo;// undefined
  source: SourceInfoVo;// undefined
}


/**
* 查看资源申请交付记录Res
*/
export interface ViewTenantApplicationDelieveryRecordsVo {
  id: number;// 申请Id
  tenantId: number;// 租户Id
  ticketsStatus: TicketStateDefine;// undefined
  applyNum: string;// 申请编号
  description: string;// 备注
  delieveryCollection: ViewTenantInboundSimpleVo[];// 交付记录
}


/**
* 查询租户端资源交付记录
*/
export interface ViewTenantInboundSimpleDto {
  id?: number|string;// 交付明细Id
  tenantId?: number|string;// 租户Id
  ticketsId?: number|string;// 工单申请Id
  enabled?: boolean;// 查询是否有效数据   
}


/**
* 租户端资源交付信息联动查询
*/
export interface TenantInboundRecordOptionDto {
  tenantId?: number|string;// 租户Id
  tenantMaterialId?: number|string;// 租户资源Id 
}


/**
* 租户端资源交付信息联动查询Res
*/
export interface TenantInboundRecordOptionVo {
  id: number;// 交付信息Id
  deliverNum: string;// 交付编号
  source: SourceInfoVo;// undefined
}


/**
* 获取租户资源列表
*/
export interface TenantMaterialListDto {
  pageIndex?: integer;// undefined
  pageSize?: integer;// undefined
  tenantId?: number|string;// 租户Id
  keyWord?: string;// 资源编号或名称
  prizeType?: PrizeTypeDefine;// undefined
  prizeTypes?: PrizeTypeDefine[];// 多资源类型查询
  couponType?: CouponTypeDefine;// undefined    
}


/**
* TenantMaterialListVoRes
*/
export interface TenantMaterialListVo {
  id: number;// 租户资源Id
  tenantId: string;// 租户Id
  materialId: number;// 平台资源ID
  enabled: boolean;// 资源状态
  code: string;// 资源编号
  name: string;// 资源名称
  prizeType: PrizeTypeDefine;// undefined
  prizeTypeName: string;// 资源类型名称（1-红包、2-电子、3-直充、4-实物、5-优惠券）
  pic: string;// 资源图片
  cost: number;// 资源价值
  status: boolean;// 状态
  description: string;// 资源说明
  createdByName: string;// 创建人
  createdBy: number;// 创建人
  createdAt: string;// 创建时间
  totalCount: integer;// 总数量
  allocatedCount: integer;// 已分配数量
  unAllocatedCount: integer;// 未分配数量
  couponType: CouponTypeDefine;// undefined
  discountRange: number;// 折扣或优惠幅度，依据类型 - 资源类型为优惠券时使用
}


/**
* 获取租户资源列表Res
*/
export interface TenantMaterialListVoPageModel {
  pageIndex: integer;// undefined
  pageSize: integer;// undefined
  dataCount: integer;// undefined
  data: TenantMaterialListVo[];// undefined
}


/**
* 获取租户资源列表查询数量
*/
export interface TenantMaterialListCountDto {
  tenantId?: number|string;// 租户Id
  prizeType?: PrizeTypeDefine;// undefined
  keyWord?: string;// 资源编号或名称 
}


/**
* 获取租户资源列表查询数量Res
*/
export interface TenantMaterialListCountVo {
  name: string;// 资源名称
  prizeTypes: PrizeTypeDefine[];// 资源类型
  totalCount: number;// 资源查询数量
}


/**
* 创建租户资源
*/
export interface CreateTenantMaterialDto {
  tenantId?: number|string;// 租户Id
  materialId?: number|string;// 平台资源ID
  enabled?: boolean;// 资源状态
  code?: string;// 资源编号
  name?: string;// 资源名称
  prizeType?: PrizeTypeDefine;// undefined
  pic?: string;// 资源图片
  cost?: number;// 资源价值
  status?: boolean;// 状态
  description?: string;// 资源说明
  count?: integer;// 数量         
}


/**
* 编辑租户资源
*/
export interface EditTenantMaterialDto {
  tenantId?: number|string;// 租户Id
  materialId?: number|string;// 平台资源ID
  enabled?: boolean;// 资源状态
  code?: string;// 资源编号
  name?: string;// 资源名称
  prizeType?: PrizeTypeDefine;// undefined
  pic?: string;// 资源图片
  cost?: number;// 资源价值
  status?: boolean;// 状态
  description?: string;// 资源说明
  count?: integer;// 数量
  id?: number|string;// 租户资源Id          
}


/**
* 删除租户资源
*/
export interface DeleteTenantMaterialDto {
  id?: number|string;// 租户资源Id
  tenantId?: number|string;// 租户Id 
}


/**
* 查看资源
*/
export interface ViewTenantMaterialDto {
  tenantId?: number|string;// 租户Id
  id?: number|string;// 租户资源ID 
}


/**
* 查看资源Res
*/
export interface ViewTenantMaterialVo {
  id: number;// 租户资源Id
  tenantId: string;// 租户Id
  materialId: number;// 平台资源ID
  enabled: boolean;// 资源状态
  code: string;// 资源编号
  name: string;// 资源名称
  prizeType: PrizeTypeDefine;// undefined
  prizeTypeName: string;// 资源类型名称（1-红包、2-电子、3-直充、4-实物、5-优惠券）
  pic: string;// 资源图片
  cost: number;// 资源价值
  status: boolean;// 状态
  description: string;// 资源说明
  createdByName: string;// 创建人
  createdBy: number;// 创建人
  createdAt: string;// 创建时间
  count: integer;// 入库数量
  realMaterial: MaterialSimpleVo;// undefined
  allocatedTotalCount: integer;// 资源分配总数量
  usedCount: integer;// 资源已使用数量
  remainCount: integer;// 资源剩余数量
  couponType: CouponTypeDefine;// undefined
  discountRange: number;// 折扣或优惠幅度，依据类型 - 资源类型为优惠券时使用
}


/**
* 租户资源联动查询
*/
export interface TenantMaterialOptionDto {
  tenantId?: number|string;// 租户Id
  prizeType?: PrizeTypeDefine;// undefined 
}


/**
* 租户资源联动查询Res
*/
export interface TenantMaterialOptionVo {
  id: number;// 资源Id
  code: string;// 资源编号
  name: string;// 资源名称
  cost: number;// 资源价值
}


/**
* ToolTakeDefaultCode
*/
export interface ToolTakeDefaultCode {
  prizeTypeDefine?: PrizeTypeDefine;// 资源类型定义
}


/**
* ToolTryDeSerializeToId
*/
export interface ToolTryDeSerializeToId {
  resourceCode?: string;// [默认]资源编号
}

export type StringPrizeTypeDefineValueTuple = object 

/**
* 源平台定义Res
*/
export interface SourcePlatformDefineVo {
  id: integer;// 类型值Value[id]
  typeName: string;// 类型名称
}


/**
* 奖品类型定义Res
*/
export interface PrizeTypeDefineVo {
  id: integer;// 类型值Value[id]
  typeName: string;// 类型名称
}


/**
* 获取优惠券类型定义Res
*/
export interface CouponTypeDefineVo {
  id: integer;// 类型值Value[id]
  typeName: string;// 类型名称
}

