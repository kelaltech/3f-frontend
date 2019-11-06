import React from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRoute from "./config/app-route";
import {AccountProvider} from "./store/account-provider";

function App() {
  return (
      <BrowserRouter>
        <AccountProvider>
          <AppRoute />
        </AccountProvider>
      </BrowserRouter>
  );
};


export default App;
