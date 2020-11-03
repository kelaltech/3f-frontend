import { Block, Content } from 'gerami'
import Link from 'next/link'

import Img from '../../../../shared/components/img/img'
import LiteParallax from '../../../../shared/components/lite-parallax/lite-parallax'
import styles from './home-about.module.scss'

function HomeAbout() {
  return (
    <LiteParallax
      src={{ src: require('../../../../assets/images/brand/logo-white.png') }}
      strength={250}
      className={`${styles['home-about-lite-parallax']} bg-accent`}
    >
      <div className="bg-accent fg-whitish padding-vertical-very-big">
        <Content size="3XL" transparent className="padding-vertical-big">
          <div className={styles['home-about-flex']}>
            <div
              className={`inline-block middle center ${styles['home-about-flex-in-1']}`}
            >
              <Img path={'brand/logo-white.png'} height={240} />
            </div>

            <div
              className={`inline-block middle ${styles['home-about-flex-in-2']}`}
            >
              <Block first>
                <h1 className="fg-white">
                  Since 1959 <small>E.C.</small>
                </h1>
              </Block>

              <Block>
                Finfine Furniture factory (3F) is established in 1959 E.C. and
                is playing critical role in the development of the furniture
                industry by inventing new desing furnitures and applying modest
                technologies.
              </Block>

              <Block>
                The Company is fully owned by an Ethiopian investor and creates
                job opportunity for 469 permanent and 89 temporary workers.
              </Block>

              <Block first last>
                &gt;{' '}
                <Link href="/about">
                  <a className="fg-white">Learn More</a>
                </Link>
              </Block>
            </div>
          </div>
        </Content>
      </div>
    </LiteParallax>
  )
}

export default HomeAbout
