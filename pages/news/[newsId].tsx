import React from 'react'
import { NextSeo } from 'next-seo/lib'
import { GetStaticProps, GetStaticPaths } from 'next'
import fetch from 'isomorphic-unfetch'
import Layout from '../../src/shared/components/layout/layout'
import NewsDetail from '../../src/app/news-detail/news-detail'
import { NewsMetaType } from '../../src/types/news-meta-type'
import { strapiApiBase } from './../../constants'
type NewsType = {
  id: string
  title: string
}

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
  // newsMetas.find((n) => n.id === params.newsId)
  const news = await fetch(
    `${strapiApiBase}/publications/${params.newsId}`
  ).then((res) => res.json())

  return { props: { news } }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const newsMetas = await fetch(
    `${strapiApiBase}/publications`
  ).then((res) => res.json())

  return {
    paths: newsMetas.map((news) => ({
      params: { newsId: news.id.toString() },
    })),
    fallback: false,
  }
}

export default NewsDetailPage
