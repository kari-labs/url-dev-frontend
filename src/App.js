import React, { Component, useState } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Grommet from "./components/Grommet";
import Header from "./components/Header";

import Home from "./views/Home";
import SignIn from "./views/SignIn";
import SignUp from "./views/SignUp";

const NotFound = () => <h1>Oopsie!</h1>;

function App() {
  return (
    <Grommet>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </Grommet>
  );
}

export default App;
