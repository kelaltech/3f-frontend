import React from 'react'
import LoginRoute from "./config/login-route";
import {RouteComponentProps} from "react-router";

interface Props extends RouteComponentProps<{}> {
  error?: any
}

function LoginLayout({ error, match }: Props) {

  return(
	  <div>
		<LoginRoute prefix={match.url.replace(/\/$/, '')}/>
	  </div>
  )
}

export default LoginLayout
