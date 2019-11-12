import React from 'react'

import Page from '../../shared/components/page/page'
import HomeSlides from './components/home-slides/home-slides'
import HomeAbout from './components/home-about/home-about'

function Home() {
  return (
    <Page space={false}>
      <HomeSlides />
      <HomeAbout />
    </Page>
  )
}

export default Home
