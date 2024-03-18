import React from "react";
import SliderEl from "../../components/home/SliderEl";
import HomeCatagury from "../../components/home/HomeCatagury";
import ProductContainer from "../../components/products/ProductContainer";
import Descount from "../../components/home/Descount";
import BrandContainer from "../../components/Brands.js/BrandContainer";
import HomeAllProductViewLogic from "../../logic/Products/HomeAllProductViewLogic";

const HomePage = () => {
  const [items2, items1] = HomeAllProductViewLogic();
  return (
    <div>
      <SliderEl />
      <HomeCatagury />
      <ProductContainer
        items={items1}
        title="Most View"
        pathlink="/allproducts"
        btntitle="See More"
      />
      <Descount />
      <ProductContainer
        items={items2}
        title="New Products"
        pathlink="/allproducts"
        btntitle="See More"
      />
      <BrandContainer title="Brands" btntitle="All Brands" />
    </div>
  );
};

export default HomePage;
