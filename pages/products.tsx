import React from 'react'
import { NextSeo } from 'next-seo/lib'
import fetch from 'isomorphic-unfetch'

import Layout from '../src/shared/components/layout/layout'
import Products from '../src/app/products/products'
import { GetStaticProps } from 'next'
import { Product } from '../src/types/product-type'
import { strapiApiBase } from '../constants'

function ProductsPage({ products }: { products: Product[] }) {
  return (
    <>
      <NextSeo title="Products | Official Website – (3F) Finfine Furniture Factory" />

      <Layout>
        <Products productData={products} />
      </Layout>
    </>
  )
}

export default ProductsPage

export const getStaticProps: GetStaticProps = async () => {
  const products: Product[] = await fetch(
    `${strapiApiBase}/products`
  ).then((res) => res.json())

  return {
    props: {
      products: products.sort((a, b) =>
        a.sorting != null && b.sorting != null ? a.sorting - b.sorting : 0
      ),
    },
  }
}
