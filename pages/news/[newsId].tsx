import React from 'react'
import { NextSeo } from 'next-seo/lib'
import { GetStaticProps, GetStaticPaths } from 'next'

import Layout from '../../src/shared/components/layout/layout'
import NewsDetail from '../../src/app/news-detail/news-detail'
import { NewsMetaType } from '../../src/types/news-meta-type'
import { newsMetas } from '../../data/news-metas'

function NewsDetailPage({ news }: { news: NewsMetaType }) {
  return (
    <>
      <NextSeo
        title={`${news.title} | News – (3F) Finfine Furniture Factory`}
      />

      <Layout>
        <NewsDetail news={news} />
      </Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const news = newsMetas.find((n) => n.id === params.newsId)

  return { props: { news } }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: newsMetas.map((news) => ({ params: { newsId: news.id } })),
    fallback: false,
  }
}

export default NewsDetailPage
