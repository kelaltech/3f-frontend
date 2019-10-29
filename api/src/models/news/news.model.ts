import { ModelFactory } from 'meseret'
import { Schema } from 'mongoose'
import { newsPaths } from './news.patha'

type ObjectId = Schema.Types.ObjectId | string | number

export interface INews {
  _at?: Date | number
  createdBy: ObjectId
  title: string
  description: string
}

export const newsModelFactory = new ModelFactory<INews>({
  name: 'news',
  paths: newsPaths
})

export const NewsModel = newsModelFactory.model
