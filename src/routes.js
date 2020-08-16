import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { LandingPage } from "./views";

const MainRouter = (props) => {

  return (
    <Router>
      <Switch>
        <Route exact strict path="/">
          <LandingPage/>
        </Route>
      </Switch>
    </Router>
  );
}

export default MainRouter;


