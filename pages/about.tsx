import { NextSeo } from 'next-seo'

import About from '../src/app/about/about'
import Layout from '../src/shared/components/layout/layout'

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
