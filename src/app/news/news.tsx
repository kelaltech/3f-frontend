import { Block, Content, Yoga } from 'gerami'

import LiteParallax from '../../shared/components/lite-parallax/lite-parallax'
import NewsCard from '../../shared/components/news-card/news-card'
import Page from '../../shared/components/page/page'
import { NewsMetaType } from '../../types/news-meta-type'
import styles from './news.module.scss'

type NewsType = {
  id: string
  title: string
}

function News({ newsData }: { newsData: NewsMetaType[] }) {
  return (
    <Page space={false}>
      <LiteParallax
        src={'/images/brand/logo-white.png'}
        strength={500}
        className="bg-accent"
      >
        <div className={`${styles['products-header']} bg-accent fg-whitish`}>
          <Content size="3XL" transparent>
            <Block first last className="center ">
              <h1 className="fg-white">Latest News</h1>
            </Block>
          </Content>
        </div>
      </LiteParallax>

      <Content size="3XL" transparent className="margin-top-big">
        <Block first last>
          <Yoga maxCol={3}>
            {newsData.map((newsMeta, i) => (
              <div className="news-card-sizer padding-bottom-big" key={i}>
                {newsMeta.Active ? <NewsCard newsMeta={newsMeta} /> : null}
              </div>
            ))}
          </Yoga>
        </Block>
      </Content>
    </Page>
  )
}

export default News
