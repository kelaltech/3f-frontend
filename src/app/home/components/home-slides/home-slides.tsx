import Link from 'next/link'
import Slider from 'react-slick'

import { homeSlideItems } from '../../../../../data/home-slides-items'
import styles from './home-slides.module.scss'
import Image from 'next/image'
function HomeSlides() {
  return (
    <>
      <Slider
        className={`${styles['home-slides']} global-home-slides`}
        dots={true}
        fade={true}
        infinite={true}
        speed={1000}
        slidesToShow={1}
        slidesToScroll={1}
        initialSlide={0}
        autoplay={true}
        autoplaySpeed={5000}
      >
        {homeSlideItems.map((item, i) => (
          <div key={i}>
            <div className={styles['home-slide-item-container']} >
              <Image
              className={styles['home-slides-item']}
              src={item.src}
              layout="fill"
              objectFit="cover"
            />
            </div>
            
            <div className={styles['home-slides-item-links-container']}>
              {item.links &&
                item.links.map(({ href, className, ...aProps }, i) => (
                  <Link href={href} key={i}>
                    <a
                      className={`${styles['home-slides-item-link']} ${
                        className || ''
                      }`}
                      {...aProps}
                    />
                  </Link>
                ))}
            </div>
          </div>
        ))}
      </Slider>
    </>
  )
}

export default HomeSlides
