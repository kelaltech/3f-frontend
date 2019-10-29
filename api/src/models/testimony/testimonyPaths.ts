import { Schema, SchemaDefinition } from 'mongoose'

const ObjectId = Schema.Types.ObjectId

export const testimonyPaths: SchemaDefinition = {
  _at: { type: Date, required: true, default: Date.now },
  createdBy: { type: ObjectId, ref: 'accounts', required: true },
  by: { type: String, required: true },
  testimony: { type: String, required: true, trim: true },
  position: { type: String, required: true, trim: true }
}
