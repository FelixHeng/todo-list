import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./screens/Home";
import Today from "./screens/Today";
import SevenDays from "./screens/SevenDays";
import Important from "./screens/Important";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/today" component={Today} />
        <Route path="/seven" component={SevenDays} />
        <Route path="/important" component={Important} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
