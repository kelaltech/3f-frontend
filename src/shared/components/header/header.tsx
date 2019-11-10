import React from 'react'
import { Content, FlexSpacer } from 'gerami'

import './header.scss'
import LiteImage from '../lite-image/lite-image'
import Link from 'next/link'

function Header() {
  return (
    <div className="header">
      <header className="header-in-1">
        <Content size="3XL" className="header-in-2">
          <Link href="/">
            <a className="header-logo-and-wordmark" title="3F | Homepage">
              <LiteImage
                src={require('../../../assets/images/brand/logo-red.png')}
                className="header-logo"
                native
              />
              <div className="header-wordmark">
                <div>Finfine</div>
                <div>Furniture</div>
                <div>Factory</div>
              </div>
            </a>
          </Link>

          <FlexSpacer />

          <div className="header-nav-container">
            <nav>
              <Link href="/">
                <a>Home</a>
              </Link>
              <Link href="/about">
                <a>About</a>
              </Link>
              <Link href="/products">
                <a>Products</a>
              </Link>
              <Link href="/locations">
                <a>Locations</a>
              </Link>
              <Link href="/news">
                <a>News</a>
              </Link>
            </nav>
          </div>
        </Content>
      </header>
    </div>
  )
}

export default Header
