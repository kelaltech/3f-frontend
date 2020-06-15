import React from 'react'
import { Block, Content, Yoga } from 'gerami'
// import Masonry from 'react-masonry-component'

import styles from './news.module.scss'
import Page from '../../shared/components/page/page'
import NewsCard from '../../shared/components/news-card/news-card'
import LiteParallax from '../../shared/components/lite-parallax/lite-parallax'
// import  getStaticProps from '../../../pages/news/[newsId]'
// import useLazy from '../../shared/hooks/use-lazy/use-lazy'
import { NewsMetaType } from '../../types/news-meta-type'

type NewsType = {
  id: string
  title: string
}

function News({ newsData }: { newsData: NewsMetaType[] }) {
  // console.log(newsData)

  return (
    <Page space={false}>
      <LiteParallax
        src={{ src: require('../../assets/images/brand/logo-white.png') }}
        strength={500}
        className="bg-accent"
      >
        <div className={`${styles['products-header']} bg-accent fg-whitish`}>
          <Content size="3XL" transparent>
            <Block first last className="center">
              <h1 className="fg-white">.</h1>
            </Block>
          </Content>
        </div>
      </LiteParallax>

      <Content size="3XL" transparent className="margin-top-big">
        <Block first last>
          <Yoga maxCol={2}>
            {newsData.map((newsMeta, i) => (
              <div className="news-card-sizer padding-bottom-big" key={i}>
                {newsMeta.active ? <NewsCard newsMeta={newsMeta} /> : null}
              </div>
            ))}
          </Yoga>
        </Block>
      </Content>
    </Page>
  )
}

export default News
