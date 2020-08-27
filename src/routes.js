import React, {useContext} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import AuthContext from './Auth';
import { 
  LandingPage, 
  ProductgPage, 
  DashboardAdmin,
  HomePage,
  ContactPage,
  BlogPage,
  ServicePage,
  ProjectPage,
  AboutPage,
  LoginAdmin,

} from "./views";

const MainRouter = (props) => {

  const { currentUser } =useContext(AuthContext);

  return (
    <Switch>
      <Route exact strict path="/">
        <HomePage/>
      </Route>
      <Route exact strict path="/about">
        <AboutPage/>
      </Route>
      <Route exact strict path="/projects">
        <ProjectPage/>
      </Route>
      <Route exact strict path="/services">
        <ServicePage/>
      </Route>
      <Route exact strict path="/blogs">
        <BlogPage/>
      </Route>
      <Route exact strict path="/contact">
        <ContactPage/>
      </Route>

      <Route exact strict path="/login">
        <LoginAdmin/>
      </Route>
    </Switch>
  );
}

export default MainRouter;


