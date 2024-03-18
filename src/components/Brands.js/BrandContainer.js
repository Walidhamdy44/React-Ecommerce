import React from "react";
import SubTitle from "../utilty/SubTitle";
import { Container } from "react-bootstrap";
import BrandsCard from "./BrandsCard";
import LoadingAnimation from "../utilty/LoadingAnimation";
import HomeBrandLogic from "../../logic/Brands/HomeBrandLogic";

const BrandContainer = ({ title, btntitle }) => {
  const [loading, brand] = HomeBrandLogic();
  return (
    <div>
      <Container>
        <SubTitle title={title} btntitle={btntitle} pathlink="/allbrands" />
        <div className="items-container-brand">
          {loading === false ? (
            brand ? (
              brand.slice(0, 6).map((item, index) => {
                return (
                  <BrandsCard key={index} title={item.name} img={item.image} />
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
    </div>
  );
};

export default BrandContainer;
