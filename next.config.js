const path = require('path')
// const CompressionPlugin = require('compression-webpack-plugin')
const { createSecureHeaders } = require('next-secure-headers')

const withPlugins = require('next-compose-plugins')

const mdx = require('@zeit/next-mdx')({
  extension: /\.mdx?$/,
})

const nextConfig = {

  pageExtensions: ['tsx', 'ts', 'jsx', 'js', 'mdx'],

  images: {
    domains: ['res.cloudinary.com']
  },
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

    return config
  },
}

module.exports = withPlugins(
  [



    // next-offline
    // [
    //   offline,
    //   {
    //     workboxOpts: {
    //       swDest: '../public/service-worker.js',
    //       runtimeCaching: [
    //         {
    //           urlPattern: /^https?.*/,
    //           handler: 'NetworkFirst',
    //         },
    //         {
    //           urlPattern: /(\/service-worker.js$)|(\/api\/)/,
    //           handler: 'NetworkFirst',
    //         },
    //       ],
    //     },
    //   },
    // ],

    // @zeit/next-mdx
    mdx,

    // next-secure-headers
  ],
  nextConfig
)
