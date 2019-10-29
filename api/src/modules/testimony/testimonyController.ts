import { add, edit, get, list, remove, search } from 'meseret-utils'
import { Grid } from 'meseret-utils'
import { TestimonyModel } from '../../models/testimony/TestimonyModel'
import { IAccount } from 'account-api/dist/models/account/account-model'
import { Document, Schema } from 'mongoose'
import { serverApp } from '../../index'
import sharp = require('sharp')

type ObjectId = Schema.Types.ObjectId | string

export async function addTestimony(data: any): Promise<any> {
  return await add(TestimonyModel, data)
}

export async function getAllTestimony(
  since: number,
  count: number
): Promise<any> {
  return await list(TestimonyModel, { since: since, count: count })
}

export async function listAllTestimony() {
  const docs = await list(TestimonyModel)

  return docs
}
export async function addTestimonyWithPicture(
  data: any,
  account: Document & IAccount,
  pic: any
): Promise<any> {
  data._by = await account._id
  const testimony = await add(TestimonyModel, data)
  const grid = new Grid(serverApp, TestimonyModel, testimony._id)

  const compressedPic = sharp(pic.path)
    .resize(1080, 1080, { fit: 'cover' })
    .jpeg({ quality: 100 })

  await grid.set(compressedPic, 'image/jpeg')

  return testimony
}

export async function addPictureForTestimony(
  pic: any,
  _testimonyId: ObjectId
): Promise<any> {
  const grid = new Grid(serverApp, TestimonyModel, _testimonyId)
  const compressedPic = sharp(pic.path)
    .resize(1080, 1080, { fit: 'cover' })
    .jpeg({ quality: 100 })

  return await grid.set(compressedPic, 'image/jpeg')
}

export async function getPictureFromTestimony(
  _testimonyId: ObjectId,
  pictureID = 'default',
  size: number,
  quality: number
): Promise<any> {
  const grid = new Grid(serverApp, TestimonyModel, _testimonyId)

  const compress = sharp()
    .resize(size, size, { fit: 'cover' })
    .jpeg({ quality, chromaSubsampling: '4:4:4' })

  return (await grid.get(pictureID)).pipe(compress)
}

export async function removeTestimony(
  _testimonyId: ObjectId,
  pictureID = 'default'
): Promise<any> {
  const grid = new Grid(serverApp, TestimonyModel, _testimonyId)
  await grid
    .has()
    .then(async () => {
      await grid.remove(pictureID)
    })
    .catch(() => console.log('no picture found'))
  return await remove(TestimonyModel, _testimonyId)
}

export async function getTestimony(_testimonyId: ObjectId): Promise<any> {
  const docs = await get(TestimonyModel, _testimonyId, {
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

export async function editTestimony(
  data: any,
  _testimonyId: ObjectId
): Promise<any> {
  return await edit(TestimonyModel, _testimonyId, data)
}

export async function searchTestimony(term: string): Promise<any> {
  return search(TestimonyModel, term)
}
