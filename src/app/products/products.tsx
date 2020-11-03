import { Anchor, Block, Content, Yoga } from 'gerami'
import Link from 'next/link'

import { nameProductCategory } from '../../lib/name-product-category'
import LiteParallax from '../../shared/components/lite-parallax/lite-parallax'
import Page from '../../shared/components/page/page'
import ProductCard from '../../shared/components/product-card/product-card'
import { Product } from '../../types/product-type'
import styles from './products.module.scss'

function Products({ productData }: { productData: Product[] }) {
  return (
    <Page space={false}>
      <LiteParallax
        src={{ src: require('../../../data/product-pictures/product-bg.jpg') }}
        strength={200}
        className="bg-accent"
      >
        <div className={`${styles['products-header']} fg-whitish`}>
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
                  title={nameProductCategory(
                    productCategory.productCatagoryType
                  )}
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
