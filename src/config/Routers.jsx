import React from "react";

import { Route, Switch } from "react-router-dom";
import Home from "../pages/home/Home";
import Explore from "../pages/explore/Explore";
import Messages from "../pages/envelope/Messages";
import Notifications from "../pages/notifications/Noifications";
import BookMark from "../pages/bookmark/BookMark";
import Lists from "../pages/lists/Lists";
import Profile from "../pages/profile/Profile";
const Routers = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/Messages" component={Messages} />
      <Route path="/Explore" component={Explore} />
      <Route path="/Notifications" component={Notifications} />
      <Route path="/Bookmarks" component={BookMark} />
      <Route path="/Lists" component={Lists} />
      <Route path="/Profile" component={Profile} />
    </Switch>
  );
};

export default Routers;
