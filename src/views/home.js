import React from "react";
import AppFaq from "../components/Faq/Faq";
import AppHero from "../components/home/homepage";
import Project from "../components/Basics/Project";
import "./home.css";
function AppHome() {
  return (
    <div className="main">
      <AppHero />
      <Project />
      <AppFaq />
    </div>
  );
}

export default AppHome;
