import React, { useState, useEffect } from 'react'
import { Block, Content, Yoga } from 'gerami'
import Link from 'next/link'
import { NextSeo } from 'next-seo/lib'
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from 'react-share'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope'
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin'
import { faTelegram } from '@fortawesome/free-brands-svg-icons/faTelegram'
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons/faWhatsapp'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft'
// import { faHammer } from '@fortawesome/free-solid-svg-icons/faHammer'
// import { faMoneyCheckAlt } from '@fortawesome/free-solid-svg-icons/faMoneyCheckAlt'
// import { faPaintRoller } from '@fortawesome/free-solid-svg-icons/faPaintRoller'
// import { faRulerCombined } from '@fortawesome/free-solid-svg-icons/faRulerCombined'

import Page from '../../shared/components/page/page'
// import LiteImage from '../../shared/components/lite-image/lite-image'
import { nameProductCategory } from '../../lib/name-product-category'
import { Product } from '../../types/product-type'
import { strapiApiBase } from '../../../constants'

type ProductDetailProps = {
  product: Product
}

function ProductDetail({ product }: ProductDetailProps) {
  const [url, setUrl] = useState<string>()
  useEffect(() => {
    if (typeof window === 'undefined') return
    setUrl(window?.location?.href)
  }, [])
  console.log(product)

  return (
    <>
      <NextSeo
        title={`${product} | ${nameProductCategory(
          product.productCatagoryType
        )} – (3F) Finfine Furniture Factory`}
        description={`${nameProductCategory(
          product.productCatagoryType
        )} by (3F) Finfine Furniture Factory: ${product}`}
      />
      <Page>
        <Content size="3XL" transparent>
          <Block first className="font-S">
            <Yoga maxCol={2}>
              <span>
                <Link href="/products">
                  <a>
                    <FontAwesomeIcon icon={faArrowLeft} />
                    <span className="inline-block margin-left-normal">
                      All Products
                    </span>
                  </a>
                </Link>
              </span>

              <span className="fg-blackish right">
                <small className="inline-block middle margin-small margin-right-normal">
                  Share:
                </small>

                <EmailShareButton
                  className="margin-horizontal-normal font-L middle"
                  url={url}
                  subject={`${nameProductCategory(
                    product.productCatagoryType
                  )} by (3F) Finfine Furniture Factory: ${product}`}
                >
                  <FontAwesomeIcon icon={faEnvelope} />
                </EmailShareButton>

                <FacebookShareButton
                  className="margin-horizontal-normal font-L middle"
                  url={url}
                  quote={`${nameProductCategory(
                    product.productCatagoryType
                  )} by (3F) Finfine Furniture Factory: ${product}`}
                  hashtag="#3F"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </FacebookShareButton>

                <LinkedinShareButton
                  className="margin-horizontal-normal font-L middle"
                  url={url}
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </LinkedinShareButton>

                <TelegramShareButton
                  className="margin-horizontal-normal font-L middle"
                  url={url}
                  title={`${nameProductCategory(
                    product.productCatagoryType
                  )} by (3F) Finfine Furniture Factory: ${product}`}
                >
                  <FontAwesomeIcon icon={faTelegram} />
                </TelegramShareButton>

                <TwitterShareButton
                  className="margin-horizontal-normal font-L middle"
                  url={url}
                  title={`${nameProductCategory(
                    product.productCatagoryType
                  )} by (3F) Finfine Furniture Factory: ${product}`}
                  hashtags={['3F']}
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </TwitterShareButton>

                <WhatsappShareButton
                  className="margin-horizontal-normal font-L middle"
                  url={url}
                  title={`${nameProductCategory(
                    product.productCatagoryType
                  )} by (3F) Finfine Furniture Factory: ${product}`}
                >
                  <FontAwesomeIcon icon={faWhatsapp} />
                </WhatsappShareButton>
              </span>
            </Yoga>
          </Block>

          <div className="fg-blackish">
            <Block first last>
              {/* <h1>{product}</h1> */}
              <h1>
                <Link href={`/products#${product.productCatagoryType}`}>
                  <a className="fg-primary padding-top-small font-M">
                    {nameProductCategory(product.productCatagoryType)}
                  </a>
                </Link>
              </h1>
              <p> {product.descriptions} </p>
              {product.productTypes.map((productType, key) => (
                <div key={key}>
                  <h3>{productType.name}</h3>
                  <span>{productType.descriptions} </span>
                  {productType.eachProduct.map((each, key) => (
                    <div key={key}>
                      <h4>{each.title} </h4>
                      <Yoga maxCol={3}>
                        {each.images.map((img, key) => (
                          <div key={key}>
                            <img
                              src={`${strapiApiBase}${img.url}`}
                              width={'100%'}
                            />
                          </div>
                        ))}
                      </Yoga>
                    </div>
                  ))}
                </div>
              ))}
            </Block>
          </div>
``        </Content>
      </Page>
    </>
  )
}

export default ProductDetail
