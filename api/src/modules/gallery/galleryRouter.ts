import Router from 'koa-router'

import {
  getAllGallery,
  removeGallery,
  editGallery,
  searchGallery,
  getGallery,
  addGallery,
  getPictureFromGallery,
  addPictureForGallery,
  listAllGalleries
} from './galleryController'

export const galleryRouter = new Router({
  prefix: '/api/gallery'
})

// POST /api/gallery/new
galleryRouter.post('/new', async ctx => {
  ctx.body = await addGallery(ctx.request.body)
})

galleryRouter.get('/allgallery', async ctx => {
  ctx.body = await listAllGalleries()
})
//GET /api/gallery/search?term=:term
galleryRouter.get('/search', async ctx => {
  ctx.body = await searchGallery(ctx.query.term)
})

//GET /api/gallery/:_galleryId
galleryRouter.get('/:_galleryId', async ctx => {
  ctx.body = await getGallery(ctx.params._galleryId)
})
//DELETE /api/gallery/:_galleryId
galleryRouter.delete('/:_galleryId', async ctx => {
  ctx.body = await removeGallery(ctx.params._galleryId)
})
//POST /api/gallery/:_galleryId/addpic
galleryRouter.post('/:_galleryId/addpic', async ctx => {
  const picture = ctx.request.files!.picture
  ctx.body = await addPictureForGallery(picture, ctx.params._galleryId)
})

//GET /api/gallery/:_galleryId/pic?size={1080}&quality={100}  default values
galleryRouter.get('/:_galleryId/pic', async ctx => {
  ctx.body = await getPictureFromGallery(
    ctx.params._galleryId,
    ctx.query.pictureId,
    Number(ctx.query.size ? ctx.query.size : 1080),
    Number(ctx.query.quality ? ctx.query.quality : 100)
  )
})

// GET /api/gallery/list?since&count
galleryRouter.get('/list', async ctx => {
  ctx.body = await getAllGallery(
    Number(ctx.query.since),
    Number(ctx.query.conunt)
  )
})

//PUT /api/gallery/:_galleryId
galleryRouter.put('/:_galleryId', async ctx => {
  ctx.body = await editGallery(ctx.request.body, ctx.params._galleryId)
})
