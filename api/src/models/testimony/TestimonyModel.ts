import { ModelFactory } from 'meseret'
import { Schema } from 'mongoose'
import { testimonyPaths } from './testimonyPaths'

type ObjectId = Schema.Types.ObjectId | string | number

export interface ITestimony {
  _at?: Date | number
  createdBy: ObjectId
  by: String
  testimony: string
  position: string
}

export const testimonyModelFactory = new ModelFactory<ITestimony>({
  name: 'testimony',
  paths: testimonyPaths
})

export const TestimonyModel = testimonyModelFactory.model
