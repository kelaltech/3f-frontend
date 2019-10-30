import { Schema, SchemaDefinition } from 'mongoose'

const ObjectId = Schema.Types.ObjectId

export const productPaths: SchemaDefinition = {
  _at: { type: Date, required: true, default: Date.now },
  createdBy: { type: ObjectId, ref: 'accounts', required: true },
  name: { type: String, required: true, trim: true },
  description: { type: String, required: false, trim: true },
  price: { type: String, required: false },
  newPrice: { type: String, required: false },
  category: { type: String, required: false },
  date: { type: Date, required: false, default: Date.now }
}
