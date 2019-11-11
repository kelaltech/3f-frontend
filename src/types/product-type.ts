export type ProductCategoryType =
  | 'DINING_ROOM_FURNITURE'
  | 'LIVING_ROOM_FURNITURE'
  | 'BEDROOM_FURNITURE'
  | 'SPRING_MATTRESS'
  | 'SOFA'
  | 'OFFICE_FURNITURE'
  | 'DOORS'
  | 'CUPBOARDS'
  | 'ACRYLIC_KITCHEN_CABINETS'
  | 'ZEBRANO_KITCHEN_CABINETS'
  | 'PVC_KITCHEN_CABINETS'
  | 'CONDO_KITCHEN_CABINETS'
  | 'KITCHEN_ACCESSORIES'
  | 'LOCKS_AND_HANDLES'
  | 'IMPORTED_FURNITURE'

export type FabricIdType = any // todo

export type ProductType = {
  itemNumber: string
  name: string
  description: string
  category: ProductCategoryType
  prices: number[]
  fabrics: FabricIdType[]
}
