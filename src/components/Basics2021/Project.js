import React, { useState } from "react";
import "./style.css";
import Menu from "./projectApi.js";
import MenuCard from "./ProjectCard";
import Navbar from "./Navbar";

const uniqueList = [
  ...new Set(
    Menu.map((curElem) => {
      return curElem.category;
    })
  ),
  "All",
];

console.log(uniqueList);

const Project_2021 = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueList);

  const filterItem = (category) => {
    if (category === "All") {
      setMenuData(Menu);
      return;
    }

    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    });

    setMenuData(updatedList);
  };

  return (
    <div id="organisations">
      <h1 style={{textAlign: "center", marginTop:40,fontSize:40}}>Organisations 2021</h1>
      <Navbar filterItem={filterItem} menuList={menuList} />
      <MenuCard menuData={menuData} />
    </div>
  );
};

export default Project_2021;
