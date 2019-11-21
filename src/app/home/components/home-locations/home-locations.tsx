import React from 'react'
import Link from 'next/link'
import { Block, Content, Yoga } from 'gerami'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons'

import './home-locations.scss'

function HomeLocations() {
  return (
    <div className="bg-accent fg-whitish padding-vertical-big">
      <Content size="3XL" transparent>
        <Block first>
          <h1 className="center">Come Visit Our Showrooms</h1>
        </Block>

        <Block className="padding-top-none">
          <Yoga maxCol={3}>
            <Block className="home-locations-showroom" first last>
              <h3 className="home-locations-showroom-name">Jacros Showroom</h3>
              <div className="home-locations-showroom-description">
                <div className="home-locations-showroom-description-address">
                  Civil Service College, S, 1
                  <br />
                  Addis Ababa
                  <br />
                  Ethiopia
                </div>
                <Link href="https://goo.gl/maps/dosmgWqNgzoV3Bjo8">
                  <a
                    className="home-locations-showroom-description-maps-link"
                    title="Open in Maps"
                    target="_blank"
                    rel="noopener nofollow"
                  >
                    <FontAwesomeIcon
                      className="home-locations-showroom-description-maps-link-icon"
                      icon={faMapMarkedAlt}
                    />
                    <div className="home-locations-showroom-description-maps-link-label">
                      Map
                    </div>
                  </a>
                </Link>
              </div>
            </Block>

            <Block className="home-locations-showroom" first last>
              <h3 className="home-locations-showroom-name">Jacros Showroom</h3>
              <div className="home-locations-showroom-description">
                <div className="home-locations-showroom-description-address">
                  Address
                </div>
                <Link href="https://goo.gl/maps/dosmgWqNgzoV3Bjo8">
                  <a
                    className="home-locations-showroom-description-maps-link"
                    title="Open in Maps"
                    target="_blank"
                    rel="noopener nofollow"
                  >
                    <FontAwesomeIcon
                      className="home-locations-showroom-description-maps-link-icon"
                      icon={faMapMarkedAlt}
                    />
                    <div className="home-locations-showroom-description-maps-link-label">
                      Map
                    </div>
                  </a>
                </Link>
              </div>
            </Block>
            <Block className="home-locations-showroom" first last>
              <h3 className="home-locations-showroom-name">Jacros Showroom</h3>
              <div className="home-locations-showroom-description">
                <div className="home-locations-showroom-description-address">
                  Address
                </div>
                <Link href="https://goo.gl/maps/dosmgWqNgzoV3Bjo8">
                  <a
                    className="home-locations-showroom-description-maps-link"
                    title="Open in Maps"
                    target="_blank"
                    rel="noopener nofollow"
                  >
                    <FontAwesomeIcon
                      className="home-locations-showroom-description-maps-link-icon"
                      icon={faMapMarkedAlt}
                    />
                    <div className="home-locations-showroom-description-maps-link-label">
                      Map
                    </div>
                  </a>
                </Link>
              </div>
            </Block>
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
