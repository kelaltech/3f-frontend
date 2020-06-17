import React from 'react'

import Page from '../../shared/components/page/page'
import HomeSlides from './components/home-slides/home-slides'
import HomeAbout from './components/home-about/home-about'
import HomeProducts from './components/home-products/home-products'
import HomeInstagram from './components/home-instagram/home-instagram'
import HomeNews from './components/home-news/home-news'
import HomeLocations from './components/home-locations/home-locations'
import HomeContact from './components/home-contact/home-contact'
import { NewsMetaType } from '../../types/news-meta-type'
import { Product } from '../../types/product-type'

function Home({
  news,
  products,
}: {
  news: NewsMetaType[]
  products: Product[]
}) {
  return (
    <Page space={false}>
      <HomeSlides />
      <HomeAbout />
      <HomeProducts productData={products} />
      <HomeInstagram />
      <HomeNews newsData={news} />
      <HomeLocations />
      <HomeContact />
    </Page>
  )
}

export default Home
