export interface Product {
  id: number
  productCatagoryType: ProductCategoryType
  created_at: string
  updated_at: string
  descriptions: string
  productTypes: ProductType[]
}

export interface ProductType {
  id: number
  name: string
  descriptions: string
  eachProduct: EachProduct[]
}

export interface EachProduct {
  id: number
  title: string
  images: Image[]
}

export interface Image {
  id: number
  name: string
  alternativeText: string
  caption: string
  width: number
  height: number
  formats: Formats
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: null
  provider: string
  provider_metadata: null
  created_at: string
  updated_at: string
}

export interface Formats {
  large: Large
  small: Large
  medium: Large
  thumbnail: Large
}

export interface Large {
  ext: string
  url: string
  hash: string
  mime: string
  path: null
  size: number
  width: number
  height: number
}

export type ProductCategoryType =
  | 'sofa_set'
  | 'bed'
  | 'chest_of_drawer'
  | 'cupboards'
  | 'tv_stand'
  | 'dressing'
  | 'coffee_table'
  | 'kitchen_cabinate'
  | 'office'
  | 'shelves'
  | 'dining_table'
  | 'spring_mattress'
  | 'doors'
