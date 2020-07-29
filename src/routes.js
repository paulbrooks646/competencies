import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Auth from './Components/Auth'
import Home from './Components/Home'

export default (
    <Switch>
        <Route exact path="/" component={Auth}/>
        <Route path="/Home" component={Home}/>
    </Switch>
)