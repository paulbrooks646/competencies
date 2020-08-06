import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Auth from './Components/Auth'
import BoxModel from './Components/BoxModel'
import FloatDisplay from './Components/FloatDisplay'
import Flexbox from './Components/Flexbox'
import Grid from './Components/Grid'
import Color from './Components/Color'
import Font from './Components/Font'
import Background from './Components/Background'
import Position from './Components/Position'

export default (
    <Switch>
        <Route exact path="/" component={Auth}/>
        <Route path="/BoxModel" component={BoxModel}/>
        <Route path="/FloatDisplay" component={FloatDisplay}/>
        <Route path="/Flexbox" component={Flexbox}/>
        <Route path="/Grid" component={Grid}/>
        <Route path="/Color" component={Color}/>
        <Route path='/Font' component={Font}/>
        <Route path='/Background' component={Background}/>
        <Route path='/Position' component={Position}/>
    </Switch>
)