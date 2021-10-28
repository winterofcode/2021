import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "../navbar/navbar";
import LandingPage from '../landingpage/landingpage';

export default function AppRouter() {
  return (
    // <Router>
    //   <Navbar />
    //   <Switch>
    //     <Route exact path="/" component={LandingPage} />
    //   </Switch>
    // </Router>
    <Router>
      <LandingPage/>
    </Router>
  );
}