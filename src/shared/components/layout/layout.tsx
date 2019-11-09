import React, { PropsWithChildren } from 'react'

import './layout.scss'
import Header from '../header/header'
import Footer from '../footer/footer'

function Layout({ children }: PropsWithChildren<{}>) {
  return (
    <>
      <main style={{ minHeight: '100vh' }}>
        <Header />

        <article>{children}</article>
      </main>

      <Footer />
    </>
  )
}

export default Layout
