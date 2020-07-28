import React, { useState } from 'react'
import { Button, Content, FlexSpacer, MenuDrop, MenuItem } from 'gerami'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars'

import styles from './header.module.scss'
import LiteImage from '../lite-image/lite-image'

function Header() {
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false)
  
  return (
    <div className={styles['header']}>
      <header className={styles['header-in-1']}>
        <Content className={styles['header-in-2']}>
          <Link href="/">
            <a
              className={styles['header-logo-and-wordmark']}
              title="3F | Homepage"
            >
              <LiteImage
                src={require('../../../assets/images/brand/logo-red.png')}
                className={styles['header-logo']}
                native
              />
              <div className={styles['header-wordmark']}>
                <div>Finfine</div>
                <div>Furniture</div>
                <div>Factory</div>
              </div>
            </a>
          </Link>

          <FlexSpacer />

          <div className={styles['header-nav-container']}>
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
          <div className={styles['header-mini-nav-container']}>
            <Button
              className={styles['header-mini-nav-menu']}
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
