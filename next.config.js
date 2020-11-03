const dotenvLoad = require('dotenv-load')
const webpack = require('webpack')
const path = require('path')
// const CompressionPlugin = require('compression-webpack-plugin')
const BrotliPlugin = require('brotli-webpack-plugin')
const { createSecureHeaders } = require('next-secure-headers')

const withPlugins = require('next-compose-plugins')

const env = require('next-env')
const fonts = require('next-fonts')
const optimizedImages = require('next-optimized-images')
const offline = require('next-offline')
const bundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
const mdx = require('@zeit/next-mdx')({
  extension: /\.mdx?$/,
})

dotenvLoad()

const nextConfig = {
  target: 'serverless',

  pageExtensions: ['tsx', 'ts', 'jsx', 'js', 'mdx'],

  async headers() {
    return [
      // https://npm.im/next-secure-headers
      {
        source: '/(.*)',
        headers: createSecureHeaders({
          contentSecurityPolicy: {
            directives: {
              defaultSrc: [
                "'self'",
                'https://www.googletagmanager.com',
                'https://www.google-analytics.com',
                'https://fonts.googleapis.com',
                'https://fonts.gstatic.com',
                'https://res.cloudinary.com',
              ],
              styleSrc: [
                "'self'",
                'https://www.googletagmanager.com',
                'https://www.google-analytics.com',
                'https://fonts.googleapis.com',
                'https://fonts.gstatic.com',
                'https://res.cloudinary.com',

                "'unsafe-inline'",
              ],
              scriptSrc: [
                "'self'",
                'https://www.googletagmanager.com',
                'https://www.google-analytics.com',
                'https://fonts.googleapis.com',
                'https://fonts.gstatic.com',
                'https://res.cloudinary.com',

                "'unsafe-inline'",
              ],
              imgSrc: [
                "'self'",
                'https://www.googletagmanager.com',
                'https://www.google-analytics.com',
                'https://fonts.googleapis.com',
                'https://fonts.gstatic.com',
                'https://res.cloudinary.com',

                'data:',
              ],
            },
          },
          forceHTTPSRedirect: [
            true,
            { maxAge: 63072000, includeSubDomains: true, preload: true },
          ],
          referrerPolicy: 'same-origin',
        }),
      },
    ]
  },

  webpack: (config, { dev }) => {
    // suppress @fortawesome imports
    config.module.rules.push({
      test: path.resolve(
        __dirname,
        'node_modules/gerami/src/components/ImageInput/ImageInput.js'
      ),
      use: 'null-loader',
    })
    config.module.rules.push({
      test: path.resolve(
        __dirname,
        'node_modules/gerami/src/components/Select/Select.js'
      ),
      use: 'null-loader',
    })

    if (!dev) {
      // // gzip compression
      // config.plugins.push(
      //   new CompressionPlugin({
      //     filename: '[path].gz[query]',
      //     algorithm: 'gzip',
      //     test: /\.(js|css|html|json|md|svg|webp|png|jpg|jpeg|gif|tiff|ico)$/,
      //     threshold: 0,
      //     minRatio: 0.99,
      //     deleteOriginalAssets: false,
      //   })
      // )

      // brotli compression
      config.plugins.push(
        new BrotliPlugin({
          asset: '[path].br[query]',
          test: /\.(js|css|html|json|md|svg|webp|png|jpg|jpeg|gif|tiff|ico)$/,
          threshold: 0,
          minRatio: 0.99,
          deleteOriginalAssets: false,
        })
      )
    }

    return config
  },
}

module.exports = withPlugins(
  [
    // next-env
    env({
      staticPrefix: 'REACT_APP_',
    }),

    // next-optimized-images
    optimizedImages,

    // next-fonts
    fonts,

    // next-offline
    [
      offline,
      {
        workboxOpts: {
          swDest: '../public/service-worker.js',
          runtimeCaching: [
            {
              urlPattern: /^https?.*/,
              handler: 'NetworkFirst',
            },
            {
              urlPattern: /(\/service-worker.js$)|(\/api\/)/,
              handler: 'NetworkFirst',
            },
          ],
        },
      },
    ],

    // @next/bundle-analyzer
    bundleAnalyzer,

    // @zeit/next-mdx
    mdx,

    // next-secure-headers
  ],
  nextConfig
)
