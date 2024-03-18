import React from "react";
import { Container } from "react-bootstrap";
import SubTitle from "../utilty/SubTitle";
import CartaguryCard from "../Catagury/CartaguryCard";
import LoadingAnimation from "../utilty/LoadingAnimation";
import HomeCatagoryLogic from "../../logic/catagory/HomeCatagoryLogic";

const HomeCatagury = () => {
  //

  const [loading, catagory, colors] = HomeCatagoryLogic();

  return (
    <Container>
      <SubTitle
        title="Catagury"
        btntitle="See More !"
        pathlink="/allcatagury"
      />
      <div className="card-container">
        {loading === false ? (
          catagory ? (
            catagory.slice(0, 7).map((item, index) => {
              return (
                <CartaguryCard
                  key={index}
                  title={item.name}
                  backgroundColor={colors[index]}
                  img={item.image}
                />
              );
            })
          ) : (
            <h3>Not Fund</h3>
          )
        ) : (
          <LoadingAnimation />
        )}
      </div>
    </Container>
  );
};

export default HomeCatagury;
