import React from 'react'
import { Content } from 'gerami'

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
        </Content>
      </header>
    </div>
  )
}

export default Header
