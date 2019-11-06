import React from 'react'
import AdminRoute from "./config/admin-route";
import {RouteComponentProps} from "react-router";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

interface Props extends RouteComponentProps<{}> {
  error?: any
}
function AdminLayout({ error, match }: Props) {

  return(
  	<>
	  <Header/>
	  <div style={{minHeight: '80vh'}}>
		<AdminRoute prefix={match.url.replace(/\/$/, '')}/>
	  </div>
	  <Footer/>
	</>
  )
}

export default AdminLayout
