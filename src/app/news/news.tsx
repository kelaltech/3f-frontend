import React, { useMemo } from 'react'
import { Block, Content, Yoga } from 'gerami'
// import Masonry from 'react-masonry-component'

import styles from './news.module.scss'
import Page from '../../shared/components/page/page'
import NewsCard from '../../shared/components/news-card/news-card'
import LiteParallax from '../../shared/components/lite-parallax/lite-parallax'
import useLazy from '../../shared/hooks/use-lazy/use-lazy'

type NewsType = {
  id: string
  title: string
}

function News() {
  // const news = useMemo(
  //   () => newsMetas.filter((newsMeta) => newsMeta.active !== false),
  //   [newsMetas]
  // )

  // const newsCards = useMemo(
  //   () =>
  //     news.map((newsMeta, i) => (
  //       <div className="news-card-sizer padding-bottom-big" key={i}>
  //         <NewsCard newsMeta={newsMeta} />
  //       </div>
  //     )),
  //   [newsMetas]
  // )

  const [news] = useLazy<NewsType[]>(
    [],
    (setNews, setError) => {
      fetch('http://localhost:1337/publications')
      .then((res)=> res.json())
      .then((data) =>
        setNews(data)  
      ).catch(setError)
    }
  )

  // console.log(news)

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
          {/* <Masonry>{newsCards}</Masonry> */}
          <Yoga maxCol={2}>
          {news.map((newsMeta, i) => (
            <div className="news-card-sizer padding-bottom-big" key={i}>
              <NewsCard newsMeta={newsMeta} />
            </div>
          ))}
          </Yoga>
        </Block>
      </Content>
    </Page>
  )
}

export default News
