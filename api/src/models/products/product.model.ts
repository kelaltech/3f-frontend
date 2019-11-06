import { ModelFactory } from 'meseret'
import { Schema } from 'mongoose'
import { productPaths } from './product.paths'

type ObjectId = Schema.Types.ObjectId | string | number

export interface IProduct {
  _at?: Date | number
  createdBy: ObjectId
  name: string
  description?: string
  price?: string
  newPrice?: string
  catagory?: string
  date?: Date | string | number
}

export const productModelFactory = new ModelFactory<IProduct>({
  name: 'products',
  paths: productPaths
})

export const ProductModel = productModelFactory.model
