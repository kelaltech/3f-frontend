import React from 'react'
import { NextSeo } from 'next-seo/lib'

import Layout from '../../src/shared/components/layout/layout'
import ProductDetail from '../../src/app/product-detail/product-detail'

function ProductDetailPage() {
  return (
    <>
      <NextSeo title="Products – (3F) Finfine Furniture Factory" />

      <Layout>
        <ProductDetail idParamName="productId" />
      </Layout>
    </>
  )
}

export default ProductDetailPage
