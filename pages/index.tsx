import fetch from 'isomorphic-unfetch'
import { GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'

import { strapiApiBase } from '../constants'
import Home from '../src/app/home/home'
import Layout from '../src/shared/components/layout/layout'
import { NewsMetaType } from '../src/types/news-meta-type'
import { Product } from '../src/types/product-type'

function IndexPage({
  news,
  products,
}: {
  news: NewsMetaType[]
  products: Product[]
}) {
  return (
    <>
      <NextSeo title="Home | Official Website – (3F) Finfine Furniture Factory" />

      <Layout>
        <Home news={news} products={products} />
      </Layout>
    </>
  )
}

export default IndexPage

export const getStaticProps: GetStaticProps = async () => {
  // newsMetas.find((n) => n.id === params.newsId)
  const products = await fetch(`${strapiApiBase}/products`).then((res) =>
    res.json()
  )
  const news = await fetch(`${strapiApiBase}/publications`).then((res) =>
    res.json()
  )

  return { props: { products, news } }
}
