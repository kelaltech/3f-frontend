import { add, edit, get, list, remove, search } from 'meseret-utils'
import { Grid } from 'meseret-utils'
import { ProductModel } from '../../models/products/product.model'
import { IAccount } from 'account-api/dist/models/account/account-model'
import { Document, Schema } from 'mongoose'
import { serverApp } from '../../index'
import sharp from 'sharp'

type ObjectId = Schema.Types.ObjectId | string

export async function getAllProducts(
  since: number,
  count: number
): Promise<any> {
  return await list(ProductModel, { since: since, count: count })
}

export async function listAllProducts() {
  const docs = await list(ProductModel)

  return docs
}
export async function addProducts(data: any): Promise<any> {
  return await add(ProductModel, data)
}
export async function addProductWithPic(
  data: any,
  account: Document & IAccount,
  pic: any
): Promise<any> {
  data._by = await account._id
  const news = await add(ProductModel, data)
  const grid = new Grid(serverApp, ProductModel, news._id)

  const compressedPic = sharp(pic.path)
    .resize(1080, 1080, { fit: 'cover' })
    .jpeg({ quality: 100 })

  await grid.set(compressedPic, 'image/jpeg')

  return news
}

export async function addPictureForProduct(
  pic: any,
  _productId: ObjectId
): Promise<any> {
  const grid = new Grid(serverApp, ProductModel, _productId)
  const compressedPic = sharp(pic.path)
    .resize(1080, 1080, { fit: 'cover' })
    .jpeg({ quality: 100 })

  return await grid.set(compressedPic, 'image/jpeg')
}

export async function getPictureFromProduct(
  _productId: ObjectId,
  pictureID = 'default',
  size: number,
  quality: number
): Promise<any> {
  const grid = new Grid(serverApp, ProductModel, _productId)

  const compress = sharp()
    .resize(size, size, { fit: 'cover' })
    .jpeg({ quality, chromaSubsampling: '4:4:4' })

  return (await grid.get(pictureID)).pipe(compress)
}

export async function removeProduct(
  _productId: ObjectId,
  pictureID = 'default'
): Promise<any> {
  const grid = new Grid(serverApp, ProductModel, _productId)
  await grid
    .has()
    .then(async () => {
      await grid.remove(pictureID)
    })
    .catch(() => console.log('no picture found'))
  return await remove(ProductModel, _productId)
}

export async function getProduct(_productId: ObjectId): Promise<any> {
  const docs = await get(ProductModel, _productId, {
    postQuery: (p: any) =>
      p.populate({
        path: '_by',
        populate: {
          path: 'account'
        }
      })
  })
  return docs
}

export async function editProduct(
  data: any,
  _productId: ObjectId
): Promise<any> {
  return await edit(ProductModel, _productId, data)
}

export async function searchProduct(term: string): Promise<any> {
  return search(ProductModel, term)
}
