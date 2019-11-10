import React from 'react'
import { PropsWithChildren } from 'react'

import './page.scss'

type PageProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  /**
   * @default true
   */
  space?: boolean
}

function Page({
  children,
  className,
  space = true,
  ...rest
}: PropsWithChildren<PageProps>) {
  return (
    <div
      {...rest}
      className={`page ${space ? 'page-space' : ''} ${className || ''}`}
    >
      {children}
    </div>
  )
}

export default Page
