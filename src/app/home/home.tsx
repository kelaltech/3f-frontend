import Page from '../../shared/components/page/page'
import { NewsMetaType } from '../../types/news-meta-type'
import { Product } from '../../types/product-type'
import HomeAbout from './components/home-about/home-about'
import HomeContact from './components/home-contact/home-contact'
import HomeInstagram from './components/home-instagram/home-instagram'
import HomeLocations from './components/home-locations/home-locations'
import HomeNews from './components/home-news/home-news'
import HomeProducts from './components/home-products/home-products'
import HomeSlides from './components/home-slides/home-slides'

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
      {/* <HomeProducts productData={products} /> */}
      <HomeInstagram />
      <HomeNews newsData={news} />
      <HomeLocations />
      <HomeContact />
    </Page>
  )
}

export default Home
