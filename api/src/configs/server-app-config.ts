import { IServerAppConfig } from 'meseret'
import { galleryRouter } from '../modules/gallery/galleryRouter'
import { testimonyRouter } from '../modules/testimony/testimonyRouter'
import { newsRouter } from '../modules/news/news.route'
import { GalleryModel } from '../models/gallery/gallery.model'
import { TestimonyModel } from '../models/testimony/TestimonyModel'
import { NewsModel } from '../models/news/news.model'

export const serverAppConfig: IServerAppConfig = {
  name: 'East-side',

  mongoUris: process.env.MONGO_URL || 'mongodb://localhost/east-side-base',
  mongooseConnectionOptions: { useUnifiedTopology: true },
  httpServers: [
    {
      hostname: process.env.HOSTNAME || undefined,
      port: Number(process.env.PORT) || 4100
    }
  ],

  routers: [galleryRouter, testimonyRouter, newsRouter],
  models: [GalleryModel, TestimonyModel, NewsModel],

  cacheFiles: {
    '/service-worker.js': { cacheControl: 'no-cache', maxAge: 0 }
  },

  bodyParserMultipart: true,

  log: process.env.NODE_ENV !== 'production'
}
