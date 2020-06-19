import React, { useState } from 'react'
import styles from './each-product.module.scss'
import FullImageMode from '../full-image-mode/full-image-mode'
import { Block, Yoga, Button } from 'gerami'
import { EachProduct as EachProductType } from '../../../../types/product-type'
type eachProductType = {
  each: EachProductType
}

const EachProduct: React.FC<eachProductType> = ({ each }) => {
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false)

  return (
    <Block className={`${styles['product-each-box']}`}>
      <h2>{each.title} </h2>
      <Yoga maxCol={3}>
        {each.images.map((img, key) => (
          <div
            key={key}
            onClick={() => setIsFullScreen(true)}
            className={`${styles['sub-product-image-box']}`}
          >
            <img src={`${img.url}`} height={'100%'} width={'100%'} />
          </div>
        ))}
      </Yoga>
      {isFullScreen ? (
        <FullImageMode each={each} onClose={setIsFullScreen} />
      ) : null}
    </Block>
  )
}

export default EachProduct
