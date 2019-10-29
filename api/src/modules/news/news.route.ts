import Router from 'koa-router'

import {
  getAllNews,
  removeNews,
  editNews,
  searchNews,
  addNewsWithPicture,
  getNews,
  addNews,
  listAllNews,
  getPictureFromNews,
  addPictureForNews
} from './news.controller'

export const newsRouter = new Router({
  prefix: '/api/news'
})

// POST /api/news/new/withpic
newsRouter.post('/new/withpic', async ctx => {
  ctx.body = await addNewsWithPicture(
    ctx.request.body,
    ctx.state.user,
    ctx.request.files!.picture
  )
})
//POST /api/news/new
newsRouter.post('/new', async ctx => {
  ctx.body = await addNews(ctx.request.body)
})

newsRouter.get('/allnews', async ctx => {
  ctx.body = await listAllNews()
})
//GET /api/news/search?term=:term
newsRouter.get('/search', async ctx => {
  ctx.body = await searchNews(ctx.query.term)
})

//GET /api/news/:_newsId
newsRouter.get('/:_newsId', async ctx => {
  ctx.body = await getNews(ctx.params._newsId)
})
//DELETE /api/news/:_newsId
newsRouter.delete('/:_newsId', async ctx => {
  ctx.body = await removeNews(ctx.params._newsId)
})
//POST /api/news/:_newsId/addpic
newsRouter.post('/:_newsId/addpic', async ctx => {
  const picture = ctx.request.files!.picture

  ctx.body = await addPictureForNews(picture, ctx.params._newsId)
})

//GET /api/news/:_newsId/pic?size={1080}&quality={100}  default values
newsRouter.get('/:_newsId/pic', async ctx => {
  ctx.body = await getPictureFromNews(
    ctx.params._newsId,
    ctx.query.pictureId,
    Number(ctx.query.size ? ctx.query.size : 1080),
    Number(ctx.query.quality ? ctx.query.quality : 100)
  )
})

// GET /api/news/list?since&count
newsRouter.get('/list', async ctx => {
  ctx.body = await getAllNews(Number(ctx.query.since), Number(ctx.query.conunt))
})

//PUT /api/news/:_newsId
newsRouter.put('/:_newsId', async ctx => {
  ctx.body = await editNews(ctx.request.body, ctx.params._newsId)
})
