import React from 'react'

import Layout from '../../src/shared/components/layout/layout'
import NewsDetail from '../../src/app/news-detail/news-detail'

function NewsDetailPage() {
  return (
    <Layout>
      <NewsDetail idParamName="newsId" />
    </Layout>
  )
}

export default NewsDetailPage
