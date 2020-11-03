import { PropsWithChildren } from 'react'

import Footer from '../footer/footer'
import Header from '../header/header'

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
