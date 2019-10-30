import React, {lazy} from 'react'
import {Redirect, Route, Switch} from "react-router";
import {useAccountState} from "../store/account-provider";
import PageNotFound from "../../shared/components/pagenotfound";

const AdminLayout  = lazy(()=>import('../../Admin-layout/admin-layout'));
const LoginLayout  = lazy(()=>import('../../Login-layout/login-layout'));

function AppRoute() {
  const { account } = useAccountState();
  return(
	  <Switch>
		{
		  account?<Redirect exact path={'/'} to={'/admin'}/>
		  :	<Redirect exact path={'/'} to={'/login'}/>
		}
		{
		  account?<Route path={'/admin'} component={AdminLayout} />
		  :null
		}
		<Route path={'/login'} component={LoginLayout}/>
		<Route component={PageNotFound}/>
	  </Switch>
  )
}

export default AppRoute