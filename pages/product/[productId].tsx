import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { NextSeo } from 'next-seo/lib'

import Layout from '../../src/shared/components/layout/layout'
import ProductDetail from '../../src/app/product-detail/product-detail'
import { ProductType } from '../../src/types/product-type'
import { products } from '../../data/products'

function ProductDetailPage({ product }: { product: ProductType }) {
  return (
    <>
      <NextSeo
        title={`${product.name} | Products – (3F) Finfine Furniture Factory`}
      />

      <Layout>
        <ProductDetail product={product} />
      </Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const product = products.find((p) => p._id === params.productId)

  return { props: { product } }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: products.map((product) => ({ params: { productId: product._id } })),
    fallback: false,
  }
}

export default ProductDetailPage
