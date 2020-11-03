import fetch from 'isomorphic-unfetch'
import { GetStaticPaths, GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'

import { strapiApiBase } from '../../constants'
import ProductDetail from '../../src/app/product-detail/product-detail'
import Layout from '../../src/shared/components/layout/layout'
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
    `${strapiApiBase}/products/${params.productId}`
  ).then((res) => res.json())

  return { props: { product } }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const products = await fetch(`${strapiApiBase}/products`).then((res) =>
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
