import { Document } from 'mongoose'
import { IGallery } from '../../models/gallery/gallery.model'

export async function req(data: any): Promise<any> {
  const ret = data

  delete ret._id
  delete ret.__v
  delete ret._at
  delete ret.createdBy

  return ret
}

export async function res(doc: Document & IGallery): Promise<any> {
  const ret = doc

  delete ret.__v

  return ret
}
