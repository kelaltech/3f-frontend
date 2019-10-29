import { add, edit, get, list, remove, search } from 'meseret-utils'
import { Grid } from 'meseret-utils'
import { NewsModel } from '../../models/news/news.model'
import { IAccount } from 'account-api/dist/models/account/account-model'
import { Document, Schema } from 'mongoose'
import { serverApp } from '../../index'
import sharp = require('sharp')

type ObjectId = Schema.Types.ObjectId | string

export async function addNews(data: any): Promise<any> {
  return await add(NewsModel, data)
}

export async function getAllNews(since: number, count: number): Promise<any> {
  return await list(NewsModel, { since: since, count: count })
}

export async function listAllNews() {
  const docs = await list(NewsModel)

  return docs
}
export async function addNewsWithPicture(
  data: any,
  account: Document & IAccount,
  pic: any
): Promise<any> {
  data._by = await account._id
  const news = await add(NewsModel, data)
  const grid = new Grid(serverApp, NewsModel, news._id)

  const compressedPic = sharp(pic.path)
    .resize(1080, 1080, { fit: 'cover' })
    .jpeg({ quality: 100 })

  await grid.set(compressedPic, 'image/jpeg')

  return news
}

export async function addPictureForNews(
  pic: any,
  _newsId: ObjectId
): Promise<any> {
  const grid = new Grid(serverApp, NewsModel, _newsId)
  const compressedPic = sharp(pic.path)
    .resize(1080, 1080, { fit: 'cover' })
    .jpeg({ quality: 100 })

  return await grid.set(compressedPic, 'image/jpeg')
}

export async function getPictureFromNews(
  _newsId: ObjectId,
  pictureID = 'default',
  size: number,
  quality: number
): Promise<any> {
  const grid = new Grid(serverApp, NewsModel, _newsId)

  const compress = sharp()
    .resize(size, size, { fit: 'cover' })
    .jpeg({ quality, chromaSubsampling: '4:4:4' })

  return (await grid.get(pictureID)).pipe(compress)
}

export async function removeNews(
  _newsId: ObjectId,
  pictureID = 'default'
): Promise<any> {
  const grid = new Grid(serverApp, NewsModel, _newsId)
  await grid
    .has()
    .then(async () => {
      await grid.remove(pictureID)
    })
    .catch(() => console.log('no picture found'))
  return await remove(NewsModel, _newsId)
}

export async function getNews(_newsId: ObjectId): Promise<any> {
  const docs = await get(NewsModel, _newsId, {
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

export async function editNews(data: any, _newsId: ObjectId): Promise<any> {
  return await edit(NewsModel, _newsId, data)
}

export async function searchNews(term: string): Promise<any> {
  return search(NewsModel, term)
}
