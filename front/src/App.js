import React from "react";
import Routes from "./Routes/index";
// import { BrowserRouter, Switch, Route } from "react-router-dom";

// import Home from "./screens/Home";
// import AllTasks from "./screens/AllTasks";
// import Today from "./screens/Today";
// import Tomorrow from "./screens/Tomorrow";
// import Important from "./screens/Important";
// import SevenDays from "./screens/SevenDays";
// import Someday from "./screens/Someday";
// import Login from "./screens/Login";
// import Signup from "./screens/Signup";
// import Profile from "./screens/Profile";
// import Docs from "./screens/Docs";
// import Photos from "./screens/Photos";
// import Places from "./screens/Places";
// import "./App.css";

import { TodosProvider } from "./context/todos.context";

function App() {
  return (
    // <BrowserRouter>
    <TodosProvider>
      <Routes />
      {/* <Switch>
        <Route exact path="/" component={Home} />
        <Route
          path="/all"
          render={props => (
            <TodosProvider>
              <AllTasks {...props} />{" "}
            </TodosProvider>
          )}
        />
        <Route path="/today" component={Today} />
        <Route path="/tomorrow" component={Tomorrow} />
        <Route path="/important" component={Important} />
        <Route path="/seven" component={SevenDays} />
        <Route path="/someday" component={Someday} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/profile" component={Profile} />
        <Route path="/docs" component={Docs} />
        <Route path="/photos" component={Photos} />
        <Route path="/places" component={Places} />
      </Switch> */}
    </TodosProvider>
  );
  {
    /* </BrowserRouter> */
  }
}

export default App;
