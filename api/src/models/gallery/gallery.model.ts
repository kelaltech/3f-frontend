import { ModelFactory } from 'meseret'
import { Schema } from 'mongoose'
import { galleryPaths } from './gallery.paths'

type ObjectId = Schema.Types.ObjectId | string | number

export interface IGallery {
  _at?: Date | number
  createdBy: ObjectId
  description?: string
  date?: Date | number
  caption?: string
}

export const galleryModelFactory = new ModelFactory<IGallery>({
  name: 'galleries',
  paths: galleryPaths
})

export const GalleryModel = galleryModelFactory.model
