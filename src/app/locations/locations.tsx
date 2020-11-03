import { Block, Content, Yoga } from 'gerami'

import { locations } from '../../../data/locations'
import LiteParallax from '../../shared/components/lite-parallax/lite-parallax'
import LocationCard from '../../shared/components/location-card/location-card'
import Page from '../../shared/components/page/page'
import styles from './locations.module.scss'

function Locations() {
  return (
    <LiteParallax
      src={{ src: require('../../assets/images/brand/logo-white.png') }}
      strength={500}
      className="bg-accent"
    >
      <Page
        space={false}
        className={`${styles['locations']} bg-accent fg-whitish`}
      >
        {locations.map((location, i) => (
          <Content size="3XL" transparent key={i}>
            <Block first last className="center">
              {typeof location.categoryTitle === 'string' ? (
                <h1 className="fg-white" style={{ fontSize: '45px' }}>
                  <pre>{location.categoryTitle}</pre>
                </h1>
              ) : (
                location.categoryTitle
              )}
            </Block>

            <Block className="padding-vertical-none">
              <hr style={{ opacity: 0.14 }} />
            </Block>

            <Block first last>
              <Yoga maxCol={location.maxPerCol || 2}>
                {location.locations.map((location, i) => (
                  <LocationCard location={location} key={i} />
                ))}
              </Yoga>
            </Block>
          </Content>
        ))}
      </Page>
    </LiteParallax>
  )
}

export default Locations
