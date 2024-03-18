import React from "react";
import ProductCard from "../products/ProductCard";
import PagenationEl from "../utilty/PagenationEl";

const UserFavorite = () => {
  return (
    <div>
      <div className="items-container">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <PagenationEl />
    </div>
  );
};

export default UserFavorite;
