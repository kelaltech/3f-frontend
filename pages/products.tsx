import React from 'react'
import { NextSeo } from 'next-seo/lib'

import Layout from '../src/shared/components/layout/layout'
import Products from '../src/app/products/products'

function ProductsPage() {
  return (
    <>
      <NextSeo title="Products | Official Website – (3F) Finfine Furniture Factory" />

      <Layout>
        <Products />
      </Layout>
    </>
  )
}

export default ProductsPage
