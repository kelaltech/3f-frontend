import React from 'react'
import Link from 'next/link'
import { Block } from 'gerami'
import { IBlockProps } from 'gerami/src/components/Block/Block'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons'

import './location-card.scss'

type LocationCardProps = {
  // todo
  blockProps?: IBlockProps
}

function LocationCard({ blockProps }: LocationCardProps) {
  return (
    <Block className="location-card" last {...blockProps}>
      <h3 className="location-card-name">Jacros Showroom</h3>
      <div className="location-card-description">
        <div className="location-card-description-address">
          Civil Service College, S, 1
          <br />
          Addis Ababa
          <br />
          Ethiopia
        </div>
        <Link href="https://goo.gl/maps/dosmgWqNgzoV3Bjo8">
          <a
            className="location-card-description-maps-link"
            title="Open in Maps"
            target="_blank"
            rel="noopener nofollow"
          >
            <FontAwesomeIcon
              className="location-card-description-maps-link-icon"
              icon={faMapMarkedAlt}
            />
            <div className="location-card-description-maps-link-label">Map</div>
          </a>
        </Link>
      </div>
    </Block>
  )
}

export default LocationCard
