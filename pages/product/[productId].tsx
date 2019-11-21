import React from 'react'

import LayoutDefault from '../../src/shared/components/layout/layout'
import ProductDetail from '../../src/app/product-detail/product-detail'

function ProductDetailPage() {
  return (
    <LayoutDefault>
      <ProductDetail idParamName="productId" />
    </LayoutDefault>
  )
}

export default ProductDetailPage
