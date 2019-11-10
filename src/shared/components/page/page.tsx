import React from 'react'
import { PropsWithChildren } from 'react'

import './page.scss'

type PageProps = {
  /**
   * @default true
   */
  space?: boolean
}

function Page({ children, space = true }: PropsWithChildren<PageProps>) {
  return <div className={`page ${space ? 'page-space' : ''}`}>{children}</div>
}

export default Page
