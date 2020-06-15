import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { NextSeo } from 'next-seo/lib'
import fetch from 'isomorphic-unfetch'

import Layout from '../../src/shared/components/layout/layout'
import ProductDetail from '../../src/app/product-detail/product-detail'
import { Product } from '../../src/types/product-type'

function ProductDetailPage({ product }: { product: Product }) {
  return (
    <>
      <NextSeo
        title={`${product.id} | Products – (3F) Finfine Furniture Factory`}
      />
      {/* changed title product.name to product.id */}

      <Layout>
        <ProductDetail product={product} />
      </Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const product = await fetch(
    `http://localhost:1337/products/${params.productId}`
  ).then((res) => res.json())

  // console.log(params)
  // console.log(product)

  return { props: { product } }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const products = await fetch('http://localhost:1337/products').then((res) =>
    res.json()
  )
  return {
    paths: products.map((product) => ({
      params: { productId: product.id.toString() },
    })),
    fallback: false,
  }
}

export default ProductDetailPage
