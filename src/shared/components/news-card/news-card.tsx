import React, { PropsWithChildren } from 'react'
import Link from 'next/link'

import './news-card.scss'
import { NewsMetaType } from '../../../types/news-meta-type'

export type NewsCardProps = {
  newsMeta: NewsMetaType
}

const NewsLink = ({
  children,
  newsMeta
}: PropsWithChildren<{ newsMeta: NewsMetaType }>) => (
  <Link href="/news/[newsId]" as={`/news/${newsMeta.id}`}>
    <a>{children}</a>
  </Link>
)

function NewsCard({ newsMeta }: NewsCardProps) {
  return (
    <div className="news-card-container">
      <div className="news-card-title">
        <NewsLink newsMeta={newsMeta}>{newsMeta.title}</NewsLink>
      </div>
      <div className="news-card-subtitle">
        <NewsLink newsMeta={newsMeta}>
          Posted on {newsMeta.postedOn.toDateString()}
        </NewsLink>
      </div>
      <div className="news-card-description">
        <span>{newsMeta.description}</span>
        <small className="inline padding-left-normal fg-primary">
          <NewsLink newsMeta={newsMeta}>read more</NewsLink>
        </small>
      </div>
    </div>
  )
}

export default NewsCard