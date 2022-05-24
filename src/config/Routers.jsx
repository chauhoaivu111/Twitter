
import React from 'react'

import { Route, Switch } from 'react-router-dom';
import Home from '../pages/home/Home';
import Messages from '../pages/envelope/Messages'
const Routers = () => {
  return (
    <Switch>

    <Route path='/' exact component = {Home}/>
    <Route path='/Messages' component={Messages}/>
   
  
</Switch>
  )
}

export default Routers