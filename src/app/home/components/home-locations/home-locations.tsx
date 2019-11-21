import React from 'react'
import Link from 'next/link'
import { Block, Content, Yoga } from 'gerami'

import './home-locations.scss'
import LocationCard from '../../../../shared/components/location-card/location-card'

function HomeLocations() {
  return (
    <div className="bg-accent fg-whitish padding-vertical-big">
      <Content size="3XL" transparent>
        <Block first>
          <h1 className="center">Come Visit Our Showrooms</h1>
        </Block>

        <Block className="padding-top-none">
          <Yoga maxCol={3}>
            <LocationCard />
            <LocationCard />
            <LocationCard />
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
  )
}

export default HomeLocations
