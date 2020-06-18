import React, { useState, useEffect } from 'react'
import { Block, Content, Yoga } from 'gerami'
import styles from './product-detail.module.scss'
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

import Page from '../../shared/components/page/page'
// import LiteImage from '../../shared/components/lite-image/lite-image'
import { nameProductCategory } from '../../lib/name-product-category'
import { Product } from '../../types/product-type'
import { strapiApiBase } from '../../../constants'
import LiteParallax from '../../shared/components/lite-parallax/lite-parallax'
import Markdown from 'markdown-to-jsx'

type ProductDetailProps = {
  product: Product
}

function ProductDetail({ product }: ProductDetailProps) {
  const [url, setUrl] = useState<string>()
  useEffect(() => {
    if (typeof window === 'undefined') return
    setUrl(window?.location?.href)
  }, [])

  return (
    <>
      <NextSeo
        title={`${nameProductCategory(
          product.productCatagoryType
        )} – (3F) Finfine Furniture Factory`}
        description={`${nameProductCategory(
          product.productCatagoryType
        )} by (3F) Finfine Furniture Factory: ${product}`}
      />
      <LiteParallax
        src={`${
          product.productCatagoryType === 'sofa_set'
            ? product.productTypes[0].eachProduct[1].images[0].formats.large.url
            : product.productTypes[0].eachProduct[0].images[0].formats.large.url
        }`}
        strength={250}
      >
        <div className={`${styles['product-detail-top-pic']}`}>
          <div className={`${styles['product-detail-overlay']}`}>
            <h1>
              {nameProductCategory(
                product.productCatagoryType
              ).toLocaleUpperCase()}
            </h1>
            <p>
              <Markdown>{product.descriptions}</Markdown>
            </p>
          </div>
        </div>
      </LiteParallax>
      <Page>
        <Content size="3XL" transparent>
          {/* <Block first className="font-S">
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
          </Block> */}
          <div className="fg-blackish">
            <Block first last>
              {product.productTypes.map((productType, key) =>
                !productType ? (
                  <>Product Type Not Available</>
                ) : (
                  <div className={`${styles['sub-product-type']}`} key={key}>
                    <h1>{productType.name}</h1>
                    <p>
                      <Markdown>{productType.descriptions}</Markdown>
                    </p>
                    {productType.eachProduct.map((each, key) =>
                      !each ? (
                        <>The products are not Available</>
                      ) : (
                        <Block key={key}>
                          <h2>{each.title} </h2>
                          <Yoga maxCol={3}>
                            {!each.images
                              ? null
                              : each.images.map((img, key) => (
                                  <div key={key}>
                                    <img src={`${img.url}`} width={'100%'} />
                                  </div>
                                ))}
                          </Yoga>
                        </Block>
                      )
                    )}
                  </div>
                )
              )}
            </Block>
          </div>
          ``{' '}
        </Content>
      </Page>
    </>
  )
}

export default ProductDetail
