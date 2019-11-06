import React from 'react'
import {Route, Switch} from "react-router";
import Login from '../pages/login/login'

function LoginRoute({ prefix: p }: { prefix: string }) {

  return(
  	<Switch>
	  <Route exact path={`${p}/`} component={Login} />
	</Switch>
  )
}

export default LoginRoute