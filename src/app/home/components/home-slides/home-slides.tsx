import React from 'react'
import Slider from 'react-slick'

import styles from './home-slides.module.scss'
import { homeSlideItems } from '../../../../../data/home-slides-items'
import Link from 'next/link'

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
            <div
              className={styles['home-slides-item']}
              style={{ backgroundImage: `url(${item.src})` }}
            />
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
