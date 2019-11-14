import React from 'react'

import { NewsMetaType } from '../src/types/news-meta-type'

import Sample from './news/sample.mdx'

export const newsMetas: NewsMetaType[] = [
  {
    id: 'sample',
    title: 'Sample',
    description: 'Sample',
    postedOn: new Date(2019, 11, 14),
    content: <Sample />
  }
]
