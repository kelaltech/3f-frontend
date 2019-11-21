import React from 'react'
import { Block, Content, Yoga } from 'gerami'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowLeft,
  faHammer,
  faMoneyCheckAlt,
  faPaintRoller,
  faRulerCombined
} from '@fortawesome/free-solid-svg-icons'

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

  const product = products.find(p => p._id === productId)
  if (!product) return <ErrorPage statusCode={404} />

  return (
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

            <small className="fg-blackish right">
              {/* todo: share options */}
            </small>
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

          {!product.description.dimension.length ? null : (
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
                      {width}x{height}x{length}
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
  )
}

export default ProductDetail
