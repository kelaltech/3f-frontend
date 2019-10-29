import { Schema, SchemaDefinition } from 'mongoose'

const ObjectId = Schema.Types.ObjectId

export const newsPaths: SchemaDefinition = {
  _at: { type: Date, required: true, default: Date.now },
  createdBy: { type: ObjectId, ref: 'accounts', required: true },
  title: { type: String, required: true, trim: true },
  description: { type: String, required: true, trim: true }
}
