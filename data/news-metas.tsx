import React from 'react'
import dynamic from 'next/dynamic'

import { NewsMetaType } from '../src/types/news-meta-type'

const Sample0 = dynamic(() => import('./news/sample-0.mdx'))
const Sample1 = dynamic(() => import('./news/sample-1.mdx'))
const Sample2 = dynamic(() => import('./news/sample-2.mdx'))
const Sample3 = dynamic(() => import('./news/sample-3.mdx'))
const Sample4 = dynamic(() => import('./news/sample-4.mdx'))
const Sample5 = dynamic(() => import('./news/sample-5.mdx'))
const Sample6 = dynamic(() => import('./news/sample-6.mdx'))
const Sample7 = dynamic(() => import('./news/sample-7.mdx'))
const Sample8 = dynamic(() => import('./news/sample-8.mdx'))

export const newsMetas: NewsMetaType[] = [
  {
    id: 'sample-0',
    title: 'Sample 0 Sample 6 Sa ple The aui ck brown fox jums over the lazy dog.',
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
