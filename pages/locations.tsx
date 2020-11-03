import { NextSeo } from 'next-seo'

import Locations from '../src/app/locations/locations'
import Layout from '../src/shared/components/layout/layout'

function LocationsPage() {
  return (
    <>
      <NextSeo title="Locations | Official Website – (3F) Finfine Furniture Factory" />

      <Layout>
        <Locations />
      </Layout>
    </>
  )
}

export default LocationsPage
