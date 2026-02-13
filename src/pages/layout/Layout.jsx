import React from "react";

import { BrowserRouter, Route } from "react-router-dom";
import Menu from "../../compenents/menu/Menu";
import Routers from "../../config/Routers";
import ScrollToTop from "../../compenents/ScrollToTop/ScrollToTop";
import './Layout.scss'

const Layout = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
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
