import { add, edit, get, list, remove, search } from 'meseret-utils'
import { Grid } from 'meseret-utils'
import { GalleryModel } from '../../models/gallery/gallery.model'
import { IAccount } from 'account-api/dist/models/account/account-model'
import { Document, Schema } from 'mongoose'
import { serverApp } from '../../index'
import sharp from 'sharp'

type ObjectId = Schema.Types.ObjectId | string

export async function getAllGallery(
  since: number,
  count: number
): Promise<any> {
  return await list(GalleryModel, { since: since, count: count })
}

export async function listAllGalleries() {
  const docs = await list(GalleryModel)

  return docs
}
export async function addGallery(data: any): Promise<any> {
  return await add(GalleryModel, data)
}
export async function addWithGallery(
  data: any,
  account: Document & IAccount,
  pic: any
): Promise<any> {
  data._by = await account._id
  const news = await add(GalleryModel, data)
  const grid = new Grid(serverApp, GalleryModel, news._id)

  const compressedPic = sharp(pic.path)
    .resize(1080, 1080, { fit: 'cover' })
    .jpeg({ quality: 100 })

  await grid.set(compressedPic, 'image/jpeg')

  return news
}

export async function addPictureForGallery(
  pic: any,
  _galleryId: ObjectId
): Promise<any> {
  const grid = new Grid(serverApp, GalleryModel, _galleryId)
  const compressedPic = sharp(pic.path)
    .resize(1080, 1080, { fit: 'cover' })
    .jpeg({ quality: 100 })

  return await grid.set(compressedPic, 'image/jpeg')
}

export async function getPictureFromGallery(
  _galleryId: ObjectId,
  pictureID = 'default',
  size: number,
  quality: number
): Promise<any> {
  const grid = new Grid(serverApp, GalleryModel, _galleryId)

  const compress = sharp()
    .resize(size, size, { fit: 'cover' })
    .jpeg({ quality, chromaSubsampling: '4:4:4' })

  return (await grid.get(pictureID)).pipe(compress)
}

export async function removeGallery(
  _galleryId: ObjectId,
  pictureID = 'default'
): Promise<any> {
  const grid = new Grid(serverApp, GalleryModel, _galleryId)
  await grid
    .has()
    .then(async () => {
      await grid.remove(pictureID)
    })
    .catch(() => console.log('no picture found'))
  return await remove(GalleryModel, _galleryId)
}

export async function getGallery(_galleryId: ObjectId): Promise<any> {
  const docs = await get(GalleryModel, _galleryId, {
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

export async function editGallery(
  data: any,
  _galleryId: ObjectId
): Promise<any> {
  return await edit(GalleryModel, _galleryId, data)
}

export async function searchGallery(term: string): Promise<any> {
  return search(GalleryModel, term)
}
