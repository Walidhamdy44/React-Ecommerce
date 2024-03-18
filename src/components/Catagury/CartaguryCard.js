import React from "react";

const CartaguryCard = ({ backgroundColor, img, title }) => {
  return (
    <div className="cat-card">
      <div
        className="card-circle"
        style={{ backgroundColor: `${backgroundColor}` }}
      >
        <img alt="ll" src={img} />
      </div>
      <h3>{title}</h3>
    </div>
  );
};

export default CartaguryCard;
