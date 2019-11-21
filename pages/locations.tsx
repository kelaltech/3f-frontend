import React from 'react'
import { NextSeo } from 'next-seo/lib'

import Layout from '../src/shared/components/layout/layout'
import Locations from '../src/app/locations/locations'

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
