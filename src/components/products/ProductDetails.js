import React from "react";
import { Col, Row } from "react-bootstrap";
import ProductDetailsGallary from "./ProductDetailsGallary";
import ProductDetailsInfo from "./ProductDetailsInfo";

const ProductDetails = () => {
  return (
    <div>
      <Row className="mb-4">
        <Col lg="4">
          <ProductDetailsGallary />
        </Col>
        <Col lg="8">
          <ProductDetailsInfo />
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetails;
