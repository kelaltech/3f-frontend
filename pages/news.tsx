import React from 'react'
import { NextSeo } from 'next-seo/lib'
import fetch from 'isomorphic-unfetch'

import Layout from '../src/shared/components/layout/layout'
import News from '../src/app/news/news'
import { GetStaticProps } from 'next'
import { NewsMetaType } from '../src/types/news-meta-type'

function NewsPage({ news }: { news: NewsMetaType[] }) {
  return (
    <>
      <NextSeo title="News | Official Website – (3F) Finfine Furniture Factory" />

      <Layout>
        <News newsData={news} />
      </Layout>
    </>
  )
}

export default NewsPage

export const getStaticProps: GetStaticProps = async () => {
  // newsMetas.find((n) => n.id === params.newsId)
  const news = await fetch(`http://localhost:1337/publications`).then((res) =>
    res.json()
  )

  return { props: { news } }
}
