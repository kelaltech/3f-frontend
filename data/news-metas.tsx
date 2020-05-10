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
    active: true,
    title: '(3F) Finfine Furniture Factory Launches New Website',
    description:
      '3F launches its newly redesigned website in partnership with kelal tech plc. The new design focuses on ease of use and brand identity.',
    postedOn: new Date(2019, 11, 14),
    content: <Sample0 />,
  },
  {
    id: 'sample-1',
    active: true,
    title: 'This is a Sample Title for Some News',
    description:
      'This is also a sample mini description for this sample news article.',
    postedOn: new Date(2019, 11, 14),
    content: <Sample1 />,
  },
  {
    id: 'sample-2',
    active: true,
    title: 'New Textile Patterns Just Got In',
    description: 'Five new textile patterns are available for January 2020.',
    postedOn: new Date(2019, 11, 14),
    content: <Sample2 />,
  },
  {
    id: 'sample-3',
    active: true,
    title: 'Sample 3',
    description: 'Sample',
    postedOn: new Date(2019, 11, 14),
    content: <Sample3 />,
  },
  {
    id: 'sample-4',
    active: true,
    title: 'Sample 4',
    description: 'Sample',
    postedOn: new Date(2019, 11, 14),
    content: <Sample4 />,
  },
  {
    id: 'sample-5',
    active: true,
    title: 'Sample 5',
    description: 'Sample',
    postedOn: new Date(2019, 11, 14),
    content: <Sample5 />,
  },
  {
    id: 'sample-6',
    active: true,
    title: 'Sample 6',
    description: 'Sample',
    postedOn: new Date(2019, 11, 14),
    content: <Sample6 />,
  },
  {
    id: 'sample-7',
    active: true,
    title: 'Sample 7',
    description: 'Sample',
    postedOn: new Date(2019, 11, 14),
    content: <Sample7 />,
  },
  {
    id: 'sample-8',
    active: true,
    title: 'Sample 8',
    description: 'Sample',
    postedOn: new Date(2019, 11, 14),
    content: <Sample8 />,
  },
]
