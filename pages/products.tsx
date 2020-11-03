import fetch from 'isomorphic-unfetch'
import { GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'

import { strapiApiBase } from '../constants'
import Products from '../src/app/products/products'
import Layout from '../src/shared/components/layout/layout'
import { Product } from '../src/types/product-type'

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
