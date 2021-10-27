import React from "react";
import AppFaq from "../components/Faq/Faq";
import AppHero from "../components/home/homepage";
import Project_2021 from "../components/Basics2021/Project";
import Project_2020 from "../components/Basics2020/Project";
import Project_2019 from "../components/Basics2019/Project";
import "./home.css";
function AppHome() {
  return (
    <div className="main">
      <AppHero />
      <Project_2019/>
      <Project_2020/>
      <Project_2021/>
      <AppFaq />
    </div>
  );
}

export default AppHome;
