import React, {lazy} from 'react'
import {Redirect, Route, Switch} from "react-router";
const Products = lazy(()=> import('../pages/products/products'));
const Dashboard = lazy(()=> import('../pages/dashboard/dashboard'));
const PageNotFound = lazy(()=>import('../../shared/components/pagenotfound'));
function AdminRoute({ prefix: p }: { prefix: string }) {
  return(
  	<Switch>
	  <Redirect exact from={`${p}/`} to={`${p}/dashboard`}/>
	  <Route exact  path={`${p}/dashboard`} component={Dashboard} />
	  <Route exact  path={`${p}/products`} component={Products} />
	  <Route component={PageNotFound}/>
	</Switch>
  )
}

export default AdminRoute