import React from 'react'
import App from 'next/app'
import Head from 'next/head'

import '../assets/styles/_app.scss'
import Layout from '../shared/components/layout/layout'

// AMP support
export const config = { amp: 'hybrid' }

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <Head>
          <meta name="theme-color" content="#bc2239" />
          <meta name="author" content="kelal tech plc" />
          <meta
            name="copyright"
            content="2019 © Finfine Furniture Factory plcc"
          />
          <meta
            name="description"
            content="Official Website for 3F (Finfine Furniture Factory plc)."
          />
          <meta
            name="keywords"
            content="3f,finfine furniture factory plc,furniture company in ethiopia"
          />
          <meta name="robots" content="index,follow" />

          <meta property="og:url" content="https://ethio3f.com/" />
          <meta
            property="og:title"
            content="3F | Finfine Furniture Factory plc"
          />
          <meta
            property="og:description"
            content="Official Website for 3F (Finfine Furniture Factory plc)."
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:site_name"
            content="3F | Finfine Furniture Factory plc"
          />
          <meta property="og:image" content="/promo.jpg" />
          <meta property="og:locale" content="en_US" />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@ethio3f" />
          <meta name="twitter:creator" content="@ethio3f" />
          <meta name="twitter:image" content="/promo.png" />

          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="manifest" href="/manifest.json" />

          <title>Official Website -- 3F | Finfine Furniture Factory plc</title>
        </Head>

        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    )
  }
}

export default MyApp
