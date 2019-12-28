import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./screens/Home";
import Today from "./screens/Today";
import Tomorrow from "./screens/Tomorrow";
import Important from "./screens/Important";
import SevenDays from "./screens/SevenDays";
import Someday from "./screens/Someday";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/today" component={Today} />
        <Route path="/tomorrow" component={Tomorrow} />
        <Route path="/important" component={Important} />
        <Route path="/seven" component={SevenDays} />
        <Route path="/someday" component={Someday} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
