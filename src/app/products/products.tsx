import React, { useMemo } from 'react'
import { Block, Content } from 'gerami'
import Link from 'next/link'
import Slider from 'react-slick'

import './products.scss'
import Page from '../../shared/components/page/page'
import { products } from '../../../data/products'
import { nameProductCategory } from '../../lib/name-product-category'
import ProductCard from '../../shared/components/product-card/product-card'
import DotSpace from '../../shared/components/dot-space/dot-space'

function Products() {
  const categorizedProducts = useMemo(
    () => [
      products.filter(product => product.category === 'DINING_ROOM_FURNITURE'),
      products.filter(product => product.category === 'LIVING_ROOM_FURNITURE'),
      products.filter(product => product.category === 'BEDROOM_FURNITURE'),
      products.filter(product => product.category === 'SPRING_MATTRESS'),
      products.filter(product => product.category === 'SOFA'),
      products.filter(product => product.category === 'OFFICE_FURNITURE'),
      products.filter(product => product.category === 'DOORS'),
      products.filter(product => product.category === 'CUPBOARDS'),
      products.filter(product => product.category === 'KITCHEN_CABINETS')
    ],
    [products]
  )

  const filteredCategories = useMemo(
    () => categorizedProducts.filter(products => products.length > 0),
    [categorizedProducts]
  )

  return (
    <Page space={false}>
      <div className="products-header fg-whitish">
        <Content size="3XL" transparent>
          <Block first last className="center">
            <h1 className="fg-white">Our Products</h1>
          </Block>

          <Block last className="center">
            {filteredCategories.map((products, i) =>
              !products.length ? null : (
                <span key={i}>
                  <Link href={`#${products[0].category}`}>
                    <a>{nameProductCategory(products[0].category)}</a>
                  </Link>
                  {filteredCategories.length - 1 <= i ? null : <DotSpace />}
                </span>
              )
            )}
          </Block>
        </Content>
      </div>

      <div>
        {categorizedProducts.map((productCategory, i) =>
          !productCategory.length ? null : (
            <div key={i}>
              <div
                id={productCategory[0].category}
                style={{ marginTop: -110, position: 'absolute' }}
              />
              <Content
                size="3XL"
                transparent
                className="margin-top-big margin-bottom-very-big padding-bottom-very-big"
              >
                <Block first last className="center">
                  <h1 className="fg-accent">
                    {nameProductCategory(productCategory[0].category)}
                  </h1>
                </Block>

                <Block className="padding-vertical-none">
                  <hr style={{ opacity: 0.84 }} />
                </Block>

                <Block first last>
                  <Slider
                    dots={true}
                    infinite={true}
                    speed={500}
                    slidesToShow={3}
                    slidesToScroll={1}
                    initialSlide={0}
                    autoplay={true}
                    autoplaySpeed={5000}
                    responsive={[
                      {
                        breakpoint: 840,
                        settings: {
                          slidesToShow: 2,
                          slidesToScroll: 2,
                          infinite: true,
                          dots: true
                        }
                      },
                      {
                        breakpoint: 480,
                        settings: {
                          slidesToShow: 1,
                          slidesToScroll: 1
                        }
                      }
                    ]}
                  >
                    {productCategory.map((product, i) => (
                      <ProductCard product={product} key={i} />
                    ))}
                    {productCategory.length <= 2 && <></>}
                    {productCategory.length <= 1 && <></>}
                    {productCategory.length <= 0 && <></>}
                  </Slider>
                </Block>
              </Content>
            </div>
          )
        )}
      </div>
    </Page>
  )
}

export default Products
