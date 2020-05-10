import React from 'react'
import { Block, Content, Yoga } from 'gerami'
import { useRouter } from 'next/router'
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
import {
  faArrowLeft,
  faHammer,
  faMoneyCheckAlt,
  faPaintRoller,
  faRulerCombined,
} from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import {
  faFacebook,
  faLinkedin,
  faTelegram,
  faTwitter,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons'

import Page from '../../shared/components/page/page'
import { products } from '../../../data/products'
import ErrorPage from '../../../pages/_error'
import LiteImage from '../../shared/components/lite-image/lite-image'
import { nameProductCategory } from '../../lib/name-product-category'
import { stringifyCurrency } from '../../lib/stringify-currency'

type ProductDetailProps = {
  idParamName: string
}

function ProductDetail({ idParamName }: ProductDetailProps) {
  const router = useRouter()
  const productId = router.query[idParamName]

  const product = products.find((p) => p._id === productId)
  if (!product) return <ErrorPage statusCode={404} />

  return (
    <>
      <NextSeo
        title={`${product.name} | ${nameProductCategory(
          product.category
        )} – (3F) Finfine Furniture Factory`}
        description={`${nameProductCategory(
          product.category
        )} by (3F) Finfine Furniture Factory: ${
          product.name
        }, starting from ${stringifyCurrency(Math.min(...product.prices))}`}
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
                  url={location.href}
                  subject={`${nameProductCategory(
                    product.category
                  )} by (3F) Finfine Furniture Factory: ${product.name}`}
                >
                  <FontAwesomeIcon icon={faEnvelope} />
                </EmailShareButton>

                <FacebookShareButton
                  className="margin-horizontal-normal font-L middle"
                  url={location.href}
                  quote={`${nameProductCategory(
                    product.category
                  )} by (3F) Finfine Furniture Factory: ${product.name}`}
                  hashtag="#3F"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </FacebookShareButton>

                <LinkedinShareButton
                  className="margin-horizontal-normal font-L middle"
                  url={location.href}
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </LinkedinShareButton>

                <TelegramShareButton
                  className="margin-horizontal-normal font-L middle"
                  url={location.href}
                  title={`${nameProductCategory(
                    product.category
                  )} by (3F) Finfine Furniture Factory: ${product.name}`}
                >
                  <FontAwesomeIcon icon={faTelegram} />
                </TelegramShareButton>

                <TwitterShareButton
                  className="margin-horizontal-normal font-L middle"
                  url={location.href}
                  title={`${nameProductCategory(
                    product.category
                  )} by (3F) Finfine Furniture Factory: ${product.name}`}
                  hashtags={['3F']}
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </TwitterShareButton>

                <WhatsappShareButton
                  className="margin-horizontal-normal font-L middle"
                  url={location.href}
                  title={`${nameProductCategory(
                    product.category
                  )} by (3F) Finfine Furniture Factory: ${product.name}`}
                >
                  <FontAwesomeIcon icon={faWhatsapp} />
                </WhatsappShareButton>
              </span>
            </Yoga>
          </Block>
        </Content>

        <Yoga
          size="3XL"
          maxCol={2}
          className="margin-vertical-big margin-bottom-very-big"
        >
          <LiteImage
            src={product.imgSrc}
            native
            width={`100%` as any}
            height={`auto` as any}
            className="bg-whitish shade-M shade-L margin-bottom-big"
          />

          <div className="fg-blackish">
            <Block first last>
              <h1>{product.name}</h1>
              <h5>
                <Link href={`/products#${product.category}`}>
                  <a className="fg-primary padding-top-small font-M">
                    {nameProductCategory(product.category)}
                  </a>
                </Link>
              </h5>
            </Block>

            {!product.description.composition.length &&
            !product.description.material.length &&
            !product.fabrics.length ? null : (
              <Block>
                <h5>
                  <span className="fg-accent margin-right-normal">
                    <FontAwesomeIcon icon={faHammer} />
                  </span>
                  Made of:
                </h5>
                <ul className="margin-top-none padding-top-small">
                  {product.description.composition.map((composition, i) => (
                    <li key={i}>{composition} (Composition)</li>
                  ))}
                  {product.description.material.map((material, i) => (
                    <li key={i}>{material} (Material)</li>
                  ))}
                  {product.fabrics.map((fabric, i) => (
                    <li key={i}>{fabric /* todo */} (Fabric)</li>
                  ))}
                </ul>
              </Block>
            )}

            {!product.description.dimension.length ? null : (
              <Block>
                <h5>
                  <span className="fg-accent margin-right-normal">
                    <FontAwesomeIcon icon={faRulerCombined} />
                  </span>
                  Dimensions:
                </h5>
                <ul className="margin-top-none padding-top-small">
                  {product.description.dimension.map(
                    ({ width, height, length }, i) => (
                      <li key={i}>
                        {width}x{height}x{length} cm
                      </li>
                    )
                  )}
                </ul>
              </Block>
            )}

            {!product.description.color.length ? null : (
              <Block>
                <h5>
                  <span className="fg-accent margin-right-normal">
                    <FontAwesomeIcon icon={faPaintRoller} />
                  </span>
                  Colors:
                </h5>
                <ul className="margin-top-none padding-top-small">
                  {product.description.color.map((color, i) => (
                    <li key={i}>{color}</li>
                  ))}
                </ul>
              </Block>
            )}

            {!product.prices.length ? null : (
              <Block>
                <h5>
                  <span className="fg-accent margin-right-normal">
                    <FontAwesomeIcon icon={faMoneyCheckAlt} />
                  </span>
                  Prices:
                </h5>
                <ul className="margin-top-none padding-top-small">
                  {product.prices.map((price, i) => (
                    <li key={i}>{stringifyCurrency(price)}</li>
                  ))}
                </ul>
              </Block>
            )}
          </div>
        </Yoga>
      </Page>
    </>
  )
}

export default ProductDetail
