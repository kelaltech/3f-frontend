import React, { PropsWithChildren } from 'react'
import Link from 'next/link'

import styles from './news-card.module.scss'
import { strapiApiBase } from '../../../../constants'
import { NewsMetaType } from '../../../types/news-meta-type'

export type NewsCardProps = {
  newsMeta: NewsMetaType
}

const NewsLink = ({
  children,
  newsMeta,
}: PropsWithChildren<{ newsMeta: NewsMetaType }>) => (
  <Link href="/news/[newsId]" as={`/news/${newsMeta.id}`}>
    <a>{children}</a>
  </Link>
)

function NewsCard({ newsMeta }: NewsCardProps) {
  return (
    <div className={styles['news-card-container']}>
      <div className={styles['news-card-title']}>
        <NewsLink newsMeta={newsMeta}>{newsMeta.title}</NewsLink>
      </div>
      <div className={styles['news-card-subtitle']}>
        <NewsLink newsMeta={newsMeta}>
          Posted on {new Date(newsMeta.created_at).toDateString()}
        </NewsLink>
      </div>
      <div className={styles['news-card-description']}>
        {newsMeta.img?.img.slice(0, 1).map((src, key) => (
          <div key={key}>
            <img src={`${strapiApiBase}${src.formats.thumbnail.url}`} />
          </div>
        ))}
        <span>{newsMeta.subject}</span>
        <small className="inline padding-left-normal fg-primary">
          <NewsLink newsMeta={newsMeta}>read more</NewsLink>
        </small>
      </div>
    </div>
  )
}

export default NewsCard
