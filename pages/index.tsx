import React from 'react'
import { NextSeo } from 'next-seo/lib'

import Layout from '../src/shared/components/layout/layout'
import Home from '../src/app/home/home'

function IndexPage() {
  return (
    <>
      <NextSeo title="Home | Official Website – (3F) Finfine Furniture Factory" />

      <Layout>
        <Home />
      </Layout>
    </>
  )
}

export default IndexPage
