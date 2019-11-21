import React from 'react'
import { Block, Content, FlexSpacer } from 'gerami'
import Link from 'next/link'
import Slider from 'react-slick'

import './home-products.scss'
import { homeProducts } from '../../../../../data/home-products'
import ProductCard from '../../../../shared/components/product-card/product-card'

function HomeProducts() {
  return (
    <div className="padding-vertical-very-big">
      <Content size="3XL" transparent>
        <Block first>
          <div className="flex">
            <h1 className="inline-block margin-vertical-auto">Products</h1>
            <FlexSpacer />
            <span className="inline-block margin-vertical-auto">
              <Link href="/products">
                <a className="font-S">See All</a>
              </Link>
            </span>
          </div>
        </Block>

        <Block last>
          <div className="home-products-anti-product-card-space">
            <Slider
              dots={true}
              infinite={false}
              speed={500}
              slidesToShow={4}
              slidesToScroll={1}
              initialSlide={0}
              responsive={[
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
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
              {homeProducts.map((product, i) => (
                <ProductCard product={product} key={i} />
              ))}
            </Slider>
          </div>
        </Block>
      </Content>
    </div>
  )
}

export default HomeProducts
