import React, { PropsWithChildren } from 'react'

import './layout.scss'
import Header from '../header/header'
import Footer from '../footer/footer'

function Layout({ children }: PropsWithChildren<{}>) {
  return (
    <>
      <Header />

      <main>{children}</main>

      <Footer />
    </>
  )
}

export default Layout
