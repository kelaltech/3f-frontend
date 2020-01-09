import React, { useMemo } from 'react'
import { Block, Content } from 'gerami'
import Masonry from 'react-masonry-component'

import './news.scss'
import Page from '../../shared/components/page/page'
import { newsMetas } from '../../../data/news-metas'
import NewsCard from '../../shared/components/news-card/news-card'
import LiteParallax from '../../shared/components/lite-parallax/lite-parallax'

function News() {
  const news = useMemo(
    () => newsMetas.filter(newsMeta => newsMeta.active !== false),
    [newsMetas]
  )

  const newsCards = useMemo(
    () =>
      news.map((newsMeta, i) => (
        <div className="news-card-sizer padding-bottom-big" key={i}>
          <NewsCard newsMeta={newsMeta} />
        </div>
      )),
    [newsMetas]
  )

  return (
    <Page space={false}>
      <LiteParallax
        src={{ src: require('../../assets/images/brand/logo-white.png') }}
        strength={500}
        className="bg-accent"
      >
        <div className="products-header bg-accent fg-whitish">
          <Content size="3XL" transparent>
            <Block first last className="center">
              <h1 className="fg-white">Latest News</h1>
            </Block>
          </Content>
        </div>
      </LiteParallax>

      <Content size="3XL" transparent className="margin-top-big">
        <Block first last>
          <Masonry>{newsCards}</Masonry>
        </Block>
      </Content>
    </Page>
  )
}

export default News
