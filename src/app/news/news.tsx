import React, { useMemo } from 'react'
import { Block, Content, Yoga } from 'gerami'

import Page from '../../shared/components/page/page'
import { newsMetas } from '../../../data/news-metas'
import NewsCard from '../../shared/components/news-card/news-card'

function News() {
  const news = useMemo(
    () => newsMetas.filter(newsMeta => newsMeta.active !== false),
    [newsMetas]
  )

  return (
    <Page>
      <Content size="3XL" transparent className="margin-top-big">
        <Block first className="center">
          <h1 className="fg-accent">Latest News</h1>
        </Block>

        <Block last>
          <Yoga maxCol={2}>
            <div className="top">
              {news.slice(0, news.length / 2 + 1).map((newsMeta, i) => (
                <div className="padding-bottom-big">
                  <NewsCard newsMeta={newsMeta} key={i} />
                </div>
              ))}
            </div>
            <div className="top">
              {news.slice(news.length / 2 + 1).map((newsMeta, i) => (
                <div className="padding-bottom-big">
                  <NewsCard newsMeta={newsMeta} key={i} />
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
