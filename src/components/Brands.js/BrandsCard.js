import React from "react";

const BrandsCard = ({ img }) => {
  return (
    <div className="brand-card">
      <div className="img">
        <img src={img} alt="jiuj" />
      </div>
    </div>
  );
};

export default BrandsCard;
