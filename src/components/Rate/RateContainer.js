import React from "react";
import RateItem from "./RateItem";
import RatePost from "./RatePost";
import rate from "../../images/rate.png";
import PagenationEl from "../utilty/PagenationEl";
import { useParams } from "react-router-dom";
import ProductDetailsLogic from "../../logic/Products/ProductDetailsLogic";

const RateContainer = () => {
  const { id } = useParams();
  // eslint-disable-next-line no-unused-vars
  const [item, images] = ProductDetailsLogic(id);
  console.log(item);
  return (
    <div className="rate-container">
      <div className="rate-head">
        <span className="s-head">Reviews</span>
        <div>
          <img alt="kk" src={rate}></img>
          <span>4.7</span>
        </div>
        <span>(179 Review)</span>
      </div>
      <RatePost />
      <RateItem />
      <RateItem />
      <RateItem />
      <RateItem />
      <PagenationEl />
    </div>
  );
};

export default RateContainer;
