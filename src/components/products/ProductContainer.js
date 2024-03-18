import React from "react";
import SubTitle from "../utilty/SubTitle";
import { Container } from "react-bootstrap";
import ProductCard from "./ProductCard";

const ProductContainer = ({ title, btntitle, items }) => {
  return (
    <div>
      <Container>
        <SubTitle title={title} btntitle={btntitle} pathlink="/allproducts" />
        <div className="items-container">
          {items
            ? items.map((product, index) => {
                return <ProductCard key={index} product={product} />;
              })
            : null}
        </div>
      </Container>
    </div>
  );
};

export default ProductContainer;
