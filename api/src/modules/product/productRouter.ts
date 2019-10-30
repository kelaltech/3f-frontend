import Router from 'koa-router'

import {
  removeProduct,
  searchProduct,
  addProducts,
  addPictureForProduct,
  listAllProducts,
  getPictureFromProduct,
  getAllProducts,
  editProduct
} from './productController'
import { getProduct } from './productController'

export const productRouter = new Router({
  prefix: '/api/products'
})

// POST /api/products/new
productRouter.post('/new', async ctx => {
  ctx.body = await addProducts(ctx.request.body)
})

productRouter.get('/allgallery', async ctx => {
  ctx.body = await listAllProducts()
})

//GET /api/products/search?term=:term
productRouter.get('/search', async ctx => {
  ctx.body = await searchProduct(ctx.query.term)
})

//GET /api/products/:_galleryId
productRouter.get('/:_galleryId', async ctx => {
  ctx.body = await getProduct(ctx.params._galleryId)
})
//DELETE /api/products/:_galleryId
productRouter.delete('/:_galleryId', async ctx => {
  ctx.body = await removeProduct(ctx.params._galleryId)
})
//POST /api/products/:_galleryId/addpic
productRouter.post('/:_galleryId/addpic', async ctx => {
  const picture = ctx.request.files!.picture
  ctx.body = await addPictureForProduct(picture, ctx.params._galleryId)
})

//GET /api/products/:_galleryId/pic?size={1080}&quality={100}  default values
productRouter.get('/:_galleryId/pic', async ctx => {
  ctx.body = await getPictureFromProduct(
    ctx.params._galleryId,
    ctx.query.pictureId,
    Number(ctx.query.size ? ctx.query.size : 1080),
    Number(ctx.query.quality ? ctx.query.quality : 100)
  )
})

// GET /api/products/list?since&count
productRouter.get('/list', async ctx => {
  ctx.body = await getAllProducts(
    Number(ctx.query.since),
    Number(ctx.query.conunt)
  )
})

//PUT /api/products/:_galleryId
productRouter.put('/:_galleryId', async ctx => {
  ctx.body = await editProduct(ctx.request.body, ctx.params._galleryId)
})
