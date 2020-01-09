import React from 'react'
import { Content } from 'gerami'

import './home-instagram.scss'
import LiteImage from '../../../../shared/components/lite-image/lite-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import LiteParallax from '../../../../shared/components/lite-parallax/lite-parallax'
import { homeInstagramTop } from '../../../../../data/home-instagram-top'

function HomeInstagram() {
  return (
    <LiteParallax
      src={{ src: require('../../../../assets/images/brand/logo-white.png') }}
      strength={250}
      className="bg-primary"
    >
      <div className="bg-primary fg-whitish padding-vertical-very-big">
        <Content size="3XL" transparent>
          <div className="home-instagram-flex">
            {homeInstagramTop.map((src, i) => (
              <LiteImage src={src} className="home-instagram-photo" key={i} />
            ))}
            <a
              href="https://www.instagram.com/ethio3f"
              rel="noopener nofollow"
              target="_blank"
              className="home-instagram-photo home-instagram-see-more"
              title="See More on Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </Content>
      </div>
    </LiteParallax>
  )
}

export default HomeInstagram
