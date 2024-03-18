import React from "react";
import BrandsCard from "./BrandsCard";
import { Container } from "react-bootstrap";
import PagenationEl from "../utilty/PagenationEl";
import LoadingAnimation from "../utilty/LoadingAnimation";
import AllBrandPageLogic from "../../logic/Brands/AllBrandPageLogic";

const AllBrandContanier = () => {
  const [loading, pageCount, onPress, brand] = AllBrandPageLogic();

  return (
    <div>
      <Container className="min-he">
        <h3 className="m-3">All Brands :</h3>
        <div className="items-container-brand">
          {loading === false ? (
            brand ? (
              brand.map((item, index) => {
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
        {pageCount > 1 ? (
          <PagenationEl pageCount={pageCount} onPress={onPress} />
        ) : null}
      </Container>
    </div>
  );
};

export default AllBrandContanier;
