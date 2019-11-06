import { IServerAppConfig } from 'meseret'
import { productRouter } from '../modules/product/productRouter'
import { ProductModel } from '../models/products/product.model'

export const serverAppConfig: IServerAppConfig = {
  name: 'Finine Furniture Factory',

  mongoUris: process.env.MONGO_URL || 'mongodb://localhost/3f',
  mongooseConnectionOptions: { useUnifiedTopology: true },
  httpServers: [
    {
      hostname: process.env.HOSTNAME || undefined,
      port: Number(process.env.PORT) || 4200
    }
  ],

  routers: [productRouter],
  models: [ProductModel],

  cacheFiles: {
    '/service-worker.js': { cacheControl: 'no-cache', maxAge: 0 }
  },

  bodyParserMultipart: true,

  log: process.env.NODE_ENV !== 'production'
}
