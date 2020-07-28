import React from 'react'
import { PropsWithChildren } from 'react'

import styles from './page.module.scss'

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
      className={`${styles['page']} ${space ? styles['page-space'] : ''} ${
        className || ''
      }`}
    >
      {children}
    </div>
  )
}

export default Page
