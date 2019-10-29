import Router from 'koa-router'

import {
  addPictureForTestimony,
  addTestimony,
  addTestimonyWithPicture,
  editTestimony,
  getAllTestimony,
  getPictureFromTestimony,
  getTestimony,
  listAllTestimony,
  removeTestimony,
  searchTestimony
} from './testimonyController'

export const testimonyRouter = new Router({
  prefix: '/api/testimony'
})

// POST /api/testimony/new/withpic
testimonyRouter.post('/new/withpic', async ctx => {
  ctx.body = await addTestimonyWithPicture(
    ctx.request.body,
    ctx.state.user,
    ctx.request.files!.picture
  )
})
//POST /api/testimony/new
testimonyRouter.post('/new', async ctx => {
  ctx.body = await addTestimony(ctx.request.body)
})

testimonyRouter.get('/alltestimony', async ctx => {
  ctx.body = await listAllTestimony()
})
//GET /api/testimony/search?term=:term
testimonyRouter.get('/search', async ctx => {
  ctx.body = await searchTestimony(ctx.query.term)
})

//GET /api/testimony/:_testimonyId
testimonyRouter.get('/:_testimonyId', async ctx => {
  ctx.body = await getTestimony(ctx.params._testimonyId)
})
//DELETE /api/testimony/:_testimonyId
testimonyRouter.delete('/:_testimonyId', async ctx => {
  ctx.body = await removeTestimony(ctx.params._testimonyId)
})
//POST /api/testimony/:_testimonyId/addpic
testimonyRouter.post('/:_testimonyId/addpic', async ctx => {
  const picture = ctx.request.files!.picture

  ctx.body = await addPictureForTestimony(picture, ctx.params._testimonyId)
})

//GET /api/testimony/:_testimonyId/pic?size={1080}&quality={100}  default values
testimonyRouter.get('/:_testimonyId/pic', async ctx => {
  ctx.body = await getPictureFromTestimony(
    ctx.params._testimonyId,
    ctx.query.pictureId,
    Number(ctx.query.size ? ctx.query.size : 1080),
    Number(ctx.query.quality ? ctx.query.quality : 100)
  )
})

// GET /api/testimony/list?since&count
testimonyRouter.get('/list', async ctx => {
  ctx.body = await getAllTestimony(
    Number(ctx.query.since),
    Number(ctx.query.conunt)
  )
})

//PUT /api/testimony/:_testimonyId
testimonyRouter.put('/:_testimonyId', async ctx => {
  ctx.body = await editTestimony(ctx.request.body, ctx.params._testimonyId)
})
