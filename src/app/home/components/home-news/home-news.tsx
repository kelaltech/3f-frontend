import React, { useMemo } from 'react'
import { Block, Content, FlexSpacer } from 'gerami'
import Link from 'next/link'
import Slider from 'react-slick'

import './home-news.scss'
import { homeNewsMetas } from '../../../../../data/home-news-metas'
import NewsCard from '../../../../shared/components/news-card/news-card'

function HomeNews() {
  const news = useMemo(
    () => homeNewsMetas.filter(newsMeta => newsMeta.active !== false),
    [homeNewsMetas]
  )

  return (
    <div className="padding-vertical-very-big">
      <Content size="3XL" transparent className="padding-vertical-big">
        <Block first>
          <div className="flex">
            <h1 className="inline-block margin-vertical-auto">News</h1>
            <FlexSpacer />
            <span className="inline-block margin-vertical-auto">
              <Link href="/news">
                <a className="font-S">See All</a>
              </Link>
            </span>
          </div>
        </Block>

        <Block last>
          <div className="home-news-anti-news-card-space">
            <Slider
              dots={true}
              infinite={true}
              speed={500}
              slidesToShow={3}
              slidesToScroll={1}
              initialSlide={0}
              autoplay={true}
              autoplaySpeed={7000}
              responsive={[
                {
                  breakpoint: 840,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]}
            >
              {news.map((newsMeta, i) => (
                <NewsCard newsMeta={newsMeta} key={i} />
              ))}
              {news.length <= 2 && <></>}
              {news.length <= 1 && <></>}
              {news.length <= 0 && <></>}
            </Slider>
          </div>
        </Block>
      </Content>
    </div>
  )
}

export default HomeNews
