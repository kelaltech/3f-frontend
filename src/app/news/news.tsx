import React, { useMemo } from 'react'
import { Block, Content, Yoga } from 'gerami'

import Page from '../../shared/components/page/page'
import { newsMetas } from '../../../data/news-metas'
import NewsCard from '../../shared/components/news-card/news-card'
import LiteParallax from '../../shared/components/lite-parallax/lite-parallax'

function News() {
  const news = useMemo(
    () => newsMetas.filter(newsMeta => newsMeta.active !== false),
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
          <Yoga maxCol={2}>
            <div className="top">
              {news.slice(0, news.length / 2 + 1).map((newsMeta, i) => (
                <div className="padding-bottom-big" key={i}>
                  <NewsCard newsMeta={newsMeta} />
                </div>
              ))}
            </div>
            <div className="top">
              {news.slice(news.length / 2 + 1).map((newsMeta, i) => (
                <div className="padding-bottom-big" key={i}>
                  <NewsCard newsMeta={newsMeta} />
                </div>
              ))}
            </div>
          </Yoga>
        </Block>
      </Content>
    </Page>
  )
}

export default News
