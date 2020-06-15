import React from 'react'
import { ProductType } from '../../../types/product-type'
import { Card } from 'gerami'
import Link from 'next/link'
import { strapiApiBase } from '../../../../constants'

// import useImgSrc from '../../hooks/use-img-src/use-img-src'
// import { nameProductCategory } from '../../../lib/name-product-category'
// import { stringifyCurrency } from '../../../lib/stringify-currency'

export type ProductCardProps = {
  productType: ProductType[]
  id: number
}

function ProductCard({ productType, id }: ProductCardProps) {
  return (
    <Link href="/product/[productId]" as={`/product/${id}`}>
      <a
        className="block padding-normal padding-bottom-big light"
        style={{ boxShadow: 'none' }}
      >
        <Card>
          {productType.slice(0, 1).map((product, key) => (
            <div key={key}>
              {product.eachProduct.slice(0, 1).map((each, key) => (
                <div key={key}>
                  {each.images.slice(0, 1).map((img, key) => (
                    <div key={key}>
                      <img src={`${strapiApiBase}${img.url}`} width={'100%'} />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </Card>
      </a>
    </Link>
  )
}

export default ProductCard
