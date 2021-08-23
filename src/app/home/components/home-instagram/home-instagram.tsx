import { Content } from 'gerami'

import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import { homeInstagramTop } from '../../../../../data/home-instagram-top'
import LiteParallax from '../../../../shared/components/lite-parallax/lite-parallax'
import styles from './home-instagram.module.scss'

function HomeInstagram() {
  return (
    <LiteParallax
      src={'/images/brand/logo-white.png'}
      strength={250}
      className="bg-primary"
    >
      <div className="bg-primary fg-whitish padding-vertical-very-big">
        <Content size="3XL" transparent>
          <div className={styles['home-instagram-flex']}>
            {homeInstagramTop.map((src, i) => (
              <div key={i} className={`${styles['home-instagram-photo']}`}>
                <Image
                src={src}
                layout="fill" objectFit="cover"
                /> 
              </div>
            ))}
            <a
              href="https://www.instagram.com/ethio3f"
              rel="noopener nofollow"
              target="_blank"
              className={`${styles['home-instagram-photo']} ${styles['home-instagram-see-more']}`}
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
