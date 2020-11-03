import { Block } from 'gerami'
import { IBlockProps } from 'gerami/src/components/Block/Block'

import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons/faMapMarkedAlt'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { LocationType } from '../../../types/location-type'
import styles from './location-card.module.scss'

type LocationCardProps = {
  location: LocationType
  blockProps?: IBlockProps
}

function LocationCard({ location, blockProps }: LocationCardProps) {
  return (
    <Block className={styles['location-card']} {...blockProps}>
      <h3 className={styles['location-card-name']}>{location.name}</h3>
      <div className={styles['location-card-description']}>
        <div className={styles['location-card-description-address']}>
          {typeof location.address === 'string' ? (
            <pre>{location.address}</pre>
          ) : (
            location.address
          )}
        </div>
        <a
          href={location.mapUrl}
          className={styles['location-card-description-maps-link']}
          title="Open in Maps"
          target="_blank"
          rel="noopener nofollow"
        >
          <FontAwesomeIcon
            className={styles['location-card-description-maps-link-icon']}
            icon={faMapMarkedAlt}
          />
          <div className={styles['location-card-description-maps-link-label']}>
            Map
          </div>
        </a>
      </div>
    </Block>
  )
}

export default LocationCard
