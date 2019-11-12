import React from 'react'
import Slider from 'react-slick'

import './home-slides.scss'
import { homeSlideItems } from '../../../../../data/home-slides-items'
import Link from 'next/link'

function HomeSlides() {
  return (
    <div style={{ overflowX: 'hidden' }}>
      <Slider
        className="home-slides"
        dots={true}
        fade={true}
        infinite={true}
        speed={1000}
        slidesToShow={1}
        slidesToScroll={1}
        autoplay={true}
        autoplaySpeed={5000}
      >
        {homeSlideItems.map((item, i) => (
          <div key={i}>
            <div
              className="home-slides-item"
              style={{ backgroundImage: `url(${item.src})` }}
            />
            <div className="home-slides-item-links-container">
              {item.links &&
                item.links.map(({ href, className, ...aProps }, i) => (
                  <Link href={href} key={i}>
                    <a
                      className={`home-slides-item-link ${className || ''}`}
                      {...aProps}
                    />
                  </Link>
                ))}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default HomeSlides
