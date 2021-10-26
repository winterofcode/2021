import React from "react";
import { Button } from "antd";
import { Carousel } from "antd";
// import logo from "../../../assets/images/logo.jpg";
const items = [
  {
    key: "1",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, rem!",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia unde excepturi, id cumque tempora molestiae numquam natus ducimus itaque voluptatum.",
  },
  {
    key: "2",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, rem!",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia unde excepturi, id cumque tempora molestiae numquam natus ducimus itaque voluptatum.",
  },
  {
    key: "3",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, rem!",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia unde excepturi, id cumque tempora molestiae numquam natus ducimus itaque voluptatum.",
  },
];

function AppHero() {
  return (
    <div id="hero" className="heroBlock">
      <Carousel>

        {items.map((item) => {
          return (
            <div key={item.key} className="container-fluid">
              <div className="content">
                <h3 data-aos="fade-right">{item.title}</h3>
                <p data-aos="fade-left">{item.content}</p>
                <div className="btnHolder">
                  <Button type="primary" size="large" data-aos="zoom-in">
                    Get Started
                  </Button>
                  <Button size="large">
                    <i className="fas fa-video"></i> Watch a Demo
                  </Button>
                </div>
                 <img className="con" style={{ height:400,width:500}} src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="" />
              </div>
              
              
            </div>
          );
        })}

      </Carousel>
    </div>
  );
}

export default AppHero;
