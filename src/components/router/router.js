import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "../navbar/navbar";
import LandingPage from '../landingpage/landingpage';
import Apply from "../apply/apply";
import Orgs from "../orgs/orgs";
import Timeline from "../timeline/timeline";
import Faq from "../faq/faq";
import Footer from "../footer/footer";
import About from "../aboutpage/about"

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
      <About/>
      <Apply/>
      <Orgs/>
      <Timeline/>
      <Faq/>
      <Footer/>
    </Router>
  );
}