import React from 'react'
import { NextSeo } from 'next-seo/lib'

import Layout from '../src/shared/components/layout/layout'
import About from '../src/app/about/about'

function AboutPage() {
  return (
    <>
      <NextSeo title="About | Official Website – (3F) Finfine Furniture Factory" />

      <Layout>
        <About />
      </Layout>
    </>
  )
}

export default AboutPage
