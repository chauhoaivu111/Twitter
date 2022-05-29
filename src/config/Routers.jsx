
import React from 'react'

import { Route, Switch } from 'react-router-dom';
import Home from '../pages/home/Home';
import Explore from '../pages/explore/Explore';
import Messages from '../pages/envelope/Messages';
import Notifications from '../pages/notifications/Noifications';
const Routers = () => {
  return (
    <Switch>

    <Route path='/' exact component = {Home}/>
    <Route path='/Messages' component={Messages}/>
    <Route path='/Explore' component={Explore}/>
    <Route path='/Notifications' component={Notifications}/>
   
  
</Switch>
  )
}

export default Routers