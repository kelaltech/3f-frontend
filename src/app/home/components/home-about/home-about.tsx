import React from 'react'
import { Block, Content } from 'gerami'
import Link from 'next/link'

import './home-about.scss'
import LiteImage from '../../../../shared/components/lite-image/lite-image'

function HomeAbout() {
  return (
    <div className="bg-accent padding-vertical-big">
      <Content size="3XL" transparent>
        <div className="home-about-flex">
          <div className="inline-block middle center home-about-flex-in-1">
            <LiteImage
              src={require('../../../../assets/images/brand/logo-white.png')}
              native
              height={240}
            />
          </div>

          <div className="inline-block middle home-about-flex-in-2">
            <Block first>
              <h1>
                Since 1959 <small>E.C.</small>
              </h1>
            </Block>

            <Block>
              Finfine Furniture factory (3F) is established in 1959 E.C. and is
              playing critical role in the development of the furniture industry
              by inventing new desing furnitures and applying modest
              technologies.
            </Block>

            <Block>
              The Company is fully owned by an Ethiopian investor and creates
              job opportunity for 469 permanent and 89 temporary workers.
            </Block>

            <Block first last>
              <Link href="/about">
                <a>Learn More</a>
              </Link>
            </Block>
          </div>
        </div>
      </Content>
    </div>
  )
}

export default HomeAbout
