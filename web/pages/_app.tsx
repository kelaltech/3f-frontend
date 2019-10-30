import React from 'react'
import App, { Container } from 'next/app'
import { DefaultSeo } from 'next-seo/lib'

import '../src/assets/styles/_app.scss'
import SEO from '../src/assets/configs/seo'
import Layout from '../src/shared/components/layout/layout'

// AMP support
export const config = { amp: 'hybrid' }

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <DefaultSeo {...SEO} />

        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Container>
    )
  }
}

export default MyApp
