import React from "react";

import { BrowserRouter, Route } from "react-router-dom";
import Menu from "../../compenents/menu/Menu";
import Routers from "../../config/Routers";
import './Layout.scss'

const Layout = () => {
  return (
    <BrowserRouter>
      <Route
        render={(props) => (
          <div className="layout">
            <Menu {...props} />
            <div className="layout__content">
              <Routers />
            </div>
          </div>
        )}
      />
    </BrowserRouter>
  );
};

export default Layout;
