import React from 'react'
import styles from './full-image-mode.module.scss'
import Slider from 'react-slick'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'
import { Content } from 'gerami'
type fullImageType = {
  onClose: (isFullScren: boolean) => void
  each: any
}
const FullImageMode: React.FC<fullImageType> = ({ onClose, each }) => {
  return (
    <div className={`${styles['full-sceen-img-container']}`}>
      <span onClick={() => onClose && onClose(false)}>
        <FontAwesomeIcon icon={faTimesCircle} />
      </span>

      <Content
        transparent
        className={`${styles['full-screen-items-container']}`}
      >
        <Slider
          dots={true}
          infinite={true}
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
          initialSlide={1}
          autoplay={true}
          autoplaySpeed={3000}
        >
          {each &&
            each.images.map((img, key) => (
              <div key={key}
              >
                <div
                 style={
                  {
                    backgroundImage: `url(${img.url})`
                  }
                }
                className={`${styles['image-url']}`}
                />  
              </div>
            ))}
        </Slider>
      </Content>
    </div>
  )
}

export default FullImageMode
