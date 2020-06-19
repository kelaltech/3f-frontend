import React from 'react'
import { Block, Content, Yoga, Anchor } from 'gerami'

import styles from './products.module.scss'
import Page from '../../shared/components/page/page'
import { nameProductCategory } from '../../lib/name-product-category'
import ProductCard from '../../shared/components/product-card/product-card'
import LiteParallax from '../../shared/components/lite-parallax/lite-parallax'
import { Product } from '../../types/product-type'
import Link from 'next/link'

function Products({ productData }: { productData: Product[] }) {
  return (
    <Page space={false}>
      <LiteParallax
        src={{ src: require('../../assets/images/brand/logo-white.png') }}
        strength={500}
        className="bg-accent"
      >
        <div className={`${styles['products-header']} bg-accent fg-whitish`}>
          <Content size="3XL" transparent>
            <Block first last className="center">
              <h1 className="fg-white">Our Products</h1>
            </Block>
          </Content>
        </div>
      </LiteParallax>

      <div className="padding-vertical-very-big" />

      <Content
        size="3XL"
        transparent
        className="margin-top-big margin-bottom-big padding-bottom-big"
      >
        <Yoga maxCol={3}>
          {productData.map((productCategory, key) => (
            <div key={key} id={`${productCategory.productCatagoryType}`}>
              <Block first last className="center">
                <Link
                  href="/product/[productId]"
                  as={`/product/${productCategory.id}`}
                >
                  <a style={{ boxShadow: 'none' }}>
                    <h1
                      className={`fg-primary ${styles['product-card-label']}`}
                    >
                      {nameProductCategory(productCategory.productCatagoryType)}
                    </h1>
                  </a>
                </Link>

                <ProductCard
                title={nameProductCategory(productCategory.productCatagoryType)}
                  productType={productCategory.productTypes}
                  id={productCategory.id}
                />
              </Block>
            </div>
          ))}
        </Yoga>
      </Content>
    </Page>
  )
}

export default Products
