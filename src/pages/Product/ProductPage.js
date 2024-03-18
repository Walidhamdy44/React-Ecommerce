import React from "react";
import CataguryHeader from "../../components/Catagury/CataguryHeader";
import ProductDetails from "../../components/products/ProductDetails";
import { Container } from "react-bootstrap";
import RateContainer from "../../components/Rate/RateContainer";
import ProductContainer from "../../components/products/ProductContainer";
import { useParams } from "react-router-dom";
import HomeAllProductViewLogic from "../../logic/Products/HomeAllProductViewLogic";
const ProductPage = () => {
  const { id } = useParams();
  const [items1, items2] = HomeAllProductViewLogic();
  return (
    <div>
      <CataguryHeader />
      <Container>
        <ProductDetails id={id} />
        <RateContainer />
        <ProductContainer title="You May Like" btntitle="" items={items2} />
      </Container>
    </div>
  );
};

export default ProductPage;
