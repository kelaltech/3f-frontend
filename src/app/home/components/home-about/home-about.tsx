import React from 'react'
import { Block, Yoga } from 'gerami'
import Link from 'next/link'
import LiteImage from '../../../../shared/components/lite-image/lite-image'

function HomeAbout() {
  return (
    <div className="bg-accent padding-vertical-big">
      <Yoga maxCol={2} size="3XL">
        <div className="inline-block middle center">
          <LiteImage
            src={require('../../../../assets/images/brand/logo-white.png')}
            native
            height={240}
          />
        </div>

        <div className="inline-block middle">
          <Block first>
            <h1>
              Since 1959 <small>E.C.</small>
            </h1>
          </Block>

          <Block>
            Finfine Furniture factory (3F) is established in 1959 E.C. and is
            playing critical role in the development of the furniture industry
            by inventing new desing furnitures and applying modest technologies.
          </Block>

          <Block>
            The Company is fully owned by an Ethiopian investor and creates job
            opportunity for 469 permanent and 89 temporary workers.
          </Block>

          <Block first last>
            <Link href="/about">
              <a>Learn More</a>
            </Link>
          </Block>
        </div>
      </Yoga>
    </div>
  )
}

export default HomeAbout
