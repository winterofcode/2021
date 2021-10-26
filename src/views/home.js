import React from "react";
import AppFaq from "../components/Faq/Faq";
import AppHero from "../components/home/homepage";
import './home.css'
function AppHome() {
  return (
    <div className="main">
      <AppHero />
      <AppFaq/>

    </div>
  );
}

export default AppHome;
