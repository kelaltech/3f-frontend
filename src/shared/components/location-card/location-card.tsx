import React from 'react'
import Link from 'next/link'
import { Block } from 'gerami'
import { IBlockProps } from 'gerami/src/components/Block/Block'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons'

import './location-card.scss'
import { LocationType } from '../../../types/location-type'

type LocationCardProps = {
  location: LocationType
  blockProps?: IBlockProps
}

function LocationCard({ location, blockProps }: LocationCardProps) {
  return (
    <Block className="location-card" last {...blockProps}>
      <h3 className="location-card-name">{location.name}</h3>
      <div className="location-card-description">
        <div className="location-card-description-address">
          {typeof location.address === 'string' ? (
            <pre>{location.address}</pre>
          ) : (
            location.address
          )}
        </div>
        <Link href={location.mapUrl}>
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
