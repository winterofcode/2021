import React from "react";
import { Button } from "antd";
import { Carousel } from "antd";
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
              <div className="content" >
                <h3 data-aos="fade-right">{item.title}</h3>
                <p data-aos="fade-left">{item.content}</p>
                <div className="btnHolder">
                  <Button type="primary" size="large"data-aos="zoom-in" >
                    Get Started
                  </Button>
                  <Button size="large">
                    <i className="fas fa-video"></i> Watch a Demo
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default AppHero;
