import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import slider4 from "../../images/slider4.png";
import slider1 from "../../images/slider1.png";
import prod from "../../images/prod4.png";
const SliderEl = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        className="slider-container mb-4"
      >
        <Carousel.Item interval={3000} className="slider-background">
          <div className="slid-item">
            <img src={slider4} alt="ll" />
            <div className="caption">
              <h4>There is Big Deal !!</h4>
              <p>50% Discount Upon Purchase</p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={4000} className="slider-background">
          <div className=" slid-item">
            <img src={slider1} alt="ll" />
            <div className="caption">
              <h4>There is Big Deal !!</h4>
              <p>50% Discount Upon Purchase</p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={3000} className="slider-background">
          <div className=" slid-item">
            <img src={prod} alt="ll" />
            <div className="caption">
              <h4>There is Big Deal !!</h4>
              <p>50% Discount Upon Purchase</p>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default SliderEl;
