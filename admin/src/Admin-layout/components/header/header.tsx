import React from 'react'
import './header.scss'
import {Link} from "react-router-dom";
import logo from '../../../assets/company/3f-transparent-logo.png'
import {Anchor} from "gerami";
import { logout } from '../../../app/store/account-actions'
function Header() {

  return(
  	<>
	  <div className={`menu-container`}>
		<div className={'logo-icon'}>
		  <img alt={'Finfine Furniture Logo'} className={'margin-left-big'} src={logo} />
		</div>
		<div className={'nav-container'}>
        <span className={'menu-items'}>
          <Link to={'/admin/dashboard'}>Home</Link>
          <Link to={`/admin/products`}>Products</Link>
          <Anchor > Logout </Anchor>
        </span>
		</div>
	  </div>
	</>
  )
}

export default Header