import React, { PropsWithChildren } from 'react'

import './layout.scss'

function Layout({ children }: PropsWithChildren<{}>) {
  return (
    <>
      <main>{children}</main>

      <footer className="layout-footer">
        2019 &copy; Finfine Furniture Factory plc
      </footer>
    </>
  )
}

export default Layout
