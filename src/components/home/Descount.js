import React from "react";
import laptop from "../../images/laptops.png";
import { Container } from "react-bootstrap";

const Descount = () => {
  return (
    <Container>
      <div className="descount">
        <div className="img">
          <img src={laptop} alt="jo" />
        </div>
        <div className="info">
          <p>
            Descount To <span> 35%</span> For Any Laptoup
          </p>
          <span>Now !!</span>
        </div>
      </div>
    </Container>
  );
};

export default Descount;
