import { Schema, SchemaDefinition } from 'mongoose'

const ObjectId = Schema.Types.ObjectId

export const galleryPaths: SchemaDefinition = {
  _at: { type: Date, required: true, default: Date.now },
  createdBy: { type: ObjectId, ref: 'accounts', required: true },
  description: { type: String, required: false, trim: true },
  date: { type: Date, required: false },
  caption: { type: String, required: false }
}
