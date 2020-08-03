import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Auth from './Components/Auth'
import BoxModel from './Components/BoxModel'
import FloatDisplay from './Components/FloatDisplay'
import Flexbox from './Components/Flexbox'
import Grid from './Components/Grid'

export default (
    <Switch>
        <Route exact path="/" component={Auth}/>
        <Route path="/BoxModel" component={BoxModel}/>
        <Route path="/FloatDisplay" component={FloatDisplay}/>
        <Route path="/Flexbox" component={Flexbox}/>
        <Route path="/Grid" component={Grid}/>
    </Switch>
)