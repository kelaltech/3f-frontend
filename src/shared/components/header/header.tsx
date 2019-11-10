import React, { useState } from 'react'
import { Button, Content, FlexSpacer, MenuDrop, MenuItem } from 'gerami'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import './header.scss'
import LiteImage from '../lite-image/lite-image'

function Header() {
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false)

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
          <div className="header-mini-nav-container">
            <Button
              className="header-mini-nav-menu"
              title="Menu"
              onClick={() => setIsNavMenuOpen(true)}
            >
              <FontAwesomeIcon icon={faBars} />
            </Button>
            <MenuDrop
              open={isNavMenuOpen}
              onClose={() => setIsNavMenuOpen(false)}
              align="right"
            >
              <Link href="/">
                <MenuItem>Home</MenuItem>
              </Link>
              <Link href="/about">
                <MenuItem>About</MenuItem>
              </Link>
              <Link href="/products">
                <MenuItem>Products</MenuItem>
              </Link>
              <Link href="/locations">
                <MenuItem>Locations</MenuItem>
              </Link>
              <Link href="/news">
                <MenuItem>News</MenuItem>
              </Link>
            </MenuDrop>
          </div>
        </Content>
      </header>
    </div>
  )
}

export default Header
