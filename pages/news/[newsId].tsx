import React from 'react'
import { NextSeo } from 'next-seo/lib'

import Layout from '../../src/shared/components/layout/layout'
import NewsDetail from '../../src/app/news-detail/news-detail'

function NewsDetailPage() {
  return (
    <>
      <NextSeo title="News – (3F) Finfine Furniture Factory" />

      <Layout>
        <NewsDetail idParamName="newsId" />
      </Layout>
    </>
  )
}

export default NewsDetailPage
