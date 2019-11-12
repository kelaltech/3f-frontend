import React from 'react'
import Slider from 'react-slick'

import './home-slides.scss'
import { homeSlideItems } from '../../../../../data/home-slides-items'

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
        {homeSlideItems.map(item => (
          <>
            <div
              className="home-slides-item"
              style={{ backgroundImage: `url(${item.src})` }}
            />
          </>
        ))}
      </Slider>
    </div>
  )
}

export default HomeSlides
