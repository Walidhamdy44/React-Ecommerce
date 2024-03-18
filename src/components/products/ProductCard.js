import React from "react";
import unliked from "../../images/fav-off.png";
import rate from "../../images/rate.png";
import { Link } from "react-router-dom";
const ProductCard = ({ product }) => {
  return (
    <div className="product-card p-2">
      <div className="img-card py-2">
        <Link to={`/allproducts/${product._id}`}>
          <img alt="ll" src={product.imageCover} />
        </Link>
      </div>
      <div className="card-info p-0">
        <div className="d-flex align-items-center  justify-content-between">
          <img alt="hdo" src={unliked} />
          <span>{product.title}</span>
        </div>
        <p>{product.description}</p>
      </div>
      <div className="card-footer">
        <span>
          <span>{product.price}$</span>
        </span>
        <div className="card-rate">
          <span>{product.ratingsQuantity}</span>
          <img alt="jo" src={rate} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
