import React from 'react'
import { Content } from 'gerami'

import './header.scss'
import LiteImage from '../lite-image/lite-image'

function Header() {
  return (
    <div className="header">
      <header className="header-in-1">
        <Content size="3XL" className="header-in-2">
          <div className="header-logo-and-wordmark">
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
          </div>
        </Content>
      </header>
    </div>
  )
}

export default Header
