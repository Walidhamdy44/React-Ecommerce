import React from "react";
import rate from "../../images/rate.png";
const RateItem = () => {
  return (
    <div className="rate-item">
      <div className="name">
        <span>Mohamed Khaled</span>
        <div>
          <img alt="kk" src={rate}></img>
          <span>4.7</span>
        </div>
      </div>
      <div>
        <p>
          Note that the development build is not optimized. To create a
          production build
        </p>
      </div>
    </div>
  );
};

export default RateItem;
