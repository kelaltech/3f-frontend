import React from 'react'
import Link from 'next/link'
import { Card } from 'gerami'

import { NewsMetaType } from '../../../types/news-meta-type'

export type NewsCardProps = {
  newsMeta: NewsMetaType
}

function NewsCard({ newsMeta }: NewsCardProps) {
  return (
    <Link href="/news/[newsId]" as={`/news/${newsMeta.id}`}>
      <a
        className="block padding-normal padding-bottom-big light"
        style={{ boxShadow: 'none' }}
      >
        {/* todo: use a different custom style */}
        <Card
          title={newsMeta.title}
          subtitle={`Posted on ${newsMeta.postedOn.toDateString()}`}
        >
          {newsMeta.description}
        </Card>
      </a>
    </Link>
  )
}

export default NewsCard
