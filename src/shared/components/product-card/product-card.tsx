import React from 'react'
import { ProductType } from '../../../types/product-type'
import { Card } from 'gerami'
import Link from 'next/link'

import useImgSrc from '../../hooks/use-img-src/use-img-src'
import { nameProductCategory } from '../../../lib/name-product-category'
import { stringifyCurrency } from '../../../lib/stringify-currency'

export type ProductCardProps = {
  product: ProductType
}

function ProductCard({ product }: ProductCardProps) {
  const src = useImgSrc(product.imgSrc)

  return (
    <Link href="/product/[id]" as={`/product/${product._id}`}>
      <a
        className="block padding-normal padding-bottom-big light"
        style={{ boxShadow: 'none' }}
      >
        <Card
          imgSrc={src}
          title={product.name}
          subtitle={nameProductCategory(product.category)}
        >
          <small className="fg-primary">FROM </small>
          <span>{stringifyCurrency(Math.min(...product.prices))}</span>
        </Card>
      </a>
    </Link>
  )
}

export default ProductCard
