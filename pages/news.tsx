import React from 'react'
import { NextSeo } from 'next-seo/lib'

import Layout from '../src/shared/components/layout/layout'
import News from '../src/app/news/news'

function NewsPage() {
  return (
    <>
      <NextSeo title="News | Official Website – (3F) Finfine Furniture Factory" />

      <Layout>
        <News />
      </Layout>
    </>
  )
}

export default NewsPage
