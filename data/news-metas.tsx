import React from 'react'

import { NewsMetaType } from '../src/types/news-meta-type'

import Sample0 from './news/sample-0.mdx'
import Sample1 from './news/sample-1.mdx'
import Sample2 from './news/sample-2.mdx'
import Sample3 from './news/sample-3.mdx'
import Sample4 from './news/sample-4.mdx'
import Sample5 from './news/sample-5.mdx'
import Sample6 from './news/sample-6.mdx'
import Sample7 from './news/sample-7.mdx'
import Sample8 from './news/sample-8.mdx'

export const newsMetas: NewsMetaType[] = [
  {
    id: 'sample-0',
    title: 'Sample 0',
    description: 'Sample',
    postedOn: new Date(2019, 11, 14),
    content: <Sample0 />
  },
  {
    id: 'sample-1',
    title: 'Sample 1',
    description: 'Sample',
    postedOn: new Date(2019, 11, 14),
    content: <Sample1 />
  },
  {
    id: 'sample-2',
    title: 'Sample 2',
    description: 'Sample',
    postedOn: new Date(2019, 11, 14),
    content: <Sample2 />
  },
  {
    id: 'sample-3',
    title: 'Sample 3',
    description: 'Sample',
    postedOn: new Date(2019, 11, 14),
    content: <Sample3 />
  },
  {
    id: 'sample-4',
    title: 'Sample 4',
    description: 'Sample',
    postedOn: new Date(2019, 11, 14),
    content: <Sample4 />
  },
  {
    id: 'sample-5',
    title: 'Sample 5',
    description: 'Sample',
    postedOn: new Date(2019, 11, 14),
    content: <Sample5 />
  },
  {
    id: 'sample-6',
    title: 'Sample 6',
    description: 'Sample',
    postedOn: new Date(2019, 11, 14),
    content: <Sample6 />
  },
  {
    id: 'sample-7',
    title: 'Sample 7',
    description: 'Sample',
    postedOn: new Date(2019, 11, 14),
    content: <Sample7 />
  },
  {
    id: 'sample-8',
    title: 'Sample 8',
    description: 'Sample',
    postedOn: new Date(2019, 11, 14),
    content: <Sample8 />
  }
]
