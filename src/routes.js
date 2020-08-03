import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Auth from './Components/Auth'
import BoxModel from './Components/BoxModel'
import FloatDisplay from './Components/FloatDisplay'

export default (
    <Switch>
        <Route exact path="/" component={Auth}/>
        <Route path="/BoxModel" component={BoxModel}/>
        <Route path="/FloatDisplay" component={FloatDisplay}/>
    </Switch>
)