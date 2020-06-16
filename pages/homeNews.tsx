import React from 'react'
import fetch from 'isomorphic-unfetch'

import { GetStaticProps } from 'next'
import HomeNews from '../src/app/home/components/home-news/home-news'
import { strapiApiBase } from '../constants'
import { NewsMetaType } from '../src/types/news-meta-type'

function HomeProduct({ news }: { news: NewsMetaType[] }) {
  return (
    <>
      <HomeNews newsData={news} />
    </>
  )
}

export default HomeProduct

export const getStaticProps: GetStaticProps = async () => {
  
  const news = await fetch(`${strapiApiBase}/publications`).then((res) =>
    res.json()
  )

  return { props: { news } }
}