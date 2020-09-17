import React from 'react'
import Link from 'next/link'
import { Block, Content, Yoga } from 'gerami'

import { homeLocationsShowrooms } from '../../../../../data/home-locations-showrooms'
import LocationCard from '../../../../shared/components/location-card/location-card'
import LiteParallax from '../../../../shared/components/lite-parallax/lite-parallax'

function HomeLocations() {
  return (
    <LiteParallax
      src={{ src: require('../../../../assets/images/brand/logo-white.png') }}
      strength={250}
      className="bg-accent"
    >
      <div className="bg-accent fg-whitish padding-vertical-very-big">
        <Content size="3XL" transparent className="padding-vertical-big">
          <Block first>
            <h1 className="center fg-white" style={{ fontSize: '45px' }}>
              Come Visit Our Showrooms
            </h1>
          </Block>

          <Block className="margin-vertical-none">
            <hr style={{ opacity: 0.22 }} />
          </Block>

          <Block className="padding-top-none">
            <Yoga maxCol={2}>
              {homeLocationsShowrooms.map((location, i) => (
                <LocationCard
                  location={location}
                  key={i}
                  blockProps={{ first: true, last: true }}
                />
              ))}
            </Yoga>
          </Block>

          <Block last className="center">
            <Link href="/locations">
              <a className="gerami-button gerami-button-primary">
                See All Locations
              </a>
            </Link>
          </Block>
        </Content>
      </div>
    </LiteParallax>
  )
}

export default HomeLocations
