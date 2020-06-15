import React from 'react'
import { Block, Content, Yoga } from 'gerami'

import styles from './products.module.scss'
import Page from '../../shared/components/page/page'
import { nameProductCategory } from '../../lib/name-product-category'
import ProductCard from '../../shared/components/product-card/product-card'
import LiteParallax from '../../shared/components/lite-parallax/lite-parallax'
import { Product } from '../../types/product-type'

function Products({ productData }: { productData: Product[] }) {
  console.log(productData)
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
        <Yoga maxCol={2}>
          {productData.map((productCategory, key) => (
            <div key={key}>
              <Block first last className="center">
                <h1 className="fg-accent">
                  {nameProductCategory(productCategory.productCatagoryType)}
                </h1>
              </Block>
              <Block className="padding-vertical-none">
                <hr style={{ opacity: 0.84 }} />
              </Block>
              <Block>
                <ProductCard
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
