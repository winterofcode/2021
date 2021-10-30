import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "../navbar/navbar";
import LandingPage from '../landingpage/landingpage';
import Timeline from "../timeline/timeline";
import Footer from "../footer/footer";

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
      <Timeline/>
      <Footer/>
    </Router>
  );
}