import React from 'react'
import notfound from '../../assets/east-side-page-not-found.svg'

function PageNotFound() {

  return(
  	<div style={
	  {
	    backgroundImage: `url(${notfound})`,
		backgroundRepeat: 'no-repeat',
		width: '100%',
		height: '100vh'
	  }
	}/>
  )
}

export default PageNotFound