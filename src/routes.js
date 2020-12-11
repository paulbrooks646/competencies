import React from "react";
import { Switch, Route } from "react-router-dom";
import Auth from "./Components/Auth/Auth";
import BoxModel from "./Components/BoxModel/BoxModel";
import Float from "./Components/Float/Float";
import Display from "./Components/Display/Display"
import Flexbox from "./Components/Flexbox/Flexbox";
import Grid from "./Components/Grid";
import Color from "./Components/Color/Color";
import Font from "./Components/Font";
import Background from "./Components/Background/Background";
import Position from "./Components/Position";
import Animation from "./Components/Animation/Animation";
import Pseudo from "./Components/Pseudo";
import TextEffects from "./Components/TextEffects";
import Transform from "./Components/Transform";
import Transition from "./Components/Transition";
import Styling from "./Components/Styling";
import Dashboard from "./Components/Dashboard/Dashboard";

export default (
  <Switch>
    <Route exact path="/" component={Auth} />
    <Route path="/BoxModel" component={BoxModel} />
    <Route path="/Float" component={Float} />
    <Route path="/Display" component={Display}/>
    <Route path="/Flexbox" component={Flexbox} />
    <Route path="/Grid" component={Grid} />
    <Route path="/Color" component={Color} />
    <Route path="/Font" component={Font} />
    <Route path="/Background" component={Background} />
    <Route path="/Position" component={Position} />
    <Route path="/Animation" component={Animation} />
    <Route path="/Pseudo" component={Pseudo} />
    <Route path="/TextEffects" component={TextEffects} />
    <Route path="/Transform" component={Transform} />
    <Route path="/Transition" component={Transition} />
    <Route path="/Styling" component={Styling} />
    <Route path="/Dashboard" component={Dashboard} />
  </Switch>
);
