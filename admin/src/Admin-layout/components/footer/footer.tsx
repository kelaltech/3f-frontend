import React from 'react'
import './footer.scss'

function Footer() {

  return(
	  <>
		<div className={'footer-copyright '}>
		  2019
		  <span className={'margin-left-normal'}>
            <a href="http://www.kelaltech.com" target={'blank'}>
              Powered by Kelal
            </a>
          </span>
		</div>
	  </>
  )
}

export default Footer