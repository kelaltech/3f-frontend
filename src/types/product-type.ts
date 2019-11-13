import { IImgSrcInput } from '../lib/img-src'

export type ProductCategoryType =
  | 'DINING_ROOM_FURNITURE'
  | 'LIVING_ROOM_FURNITURE'
  | 'BEDROOM_FURNITURE'
  | 'SPRING_MATTRESS'
  | 'SOFA'
  | 'OFFICE_FURNITURE'
  | 'DOORS'
  | 'CUPBOARDS'
  | 'KITCHEN_CABINETS'

export type FabricIdType = any // todo

export type ProductType = {
  _id: string
  name: string
  description: {
    composition: string[]
    material: string[]
    dimension: {
      height: number
      width: number
      length: number
    }[]
    color: string[]
  }
  imgSrc: IImgSrcInput
  category: ProductCategoryType
  prices: number[]
  fabrics: FabricIdType[]
}
