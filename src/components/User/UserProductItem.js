import React from "react";
import { Link } from "react-router-dom";
import po from "../../images/mobile2.png";

const UserProductItem = () => {
  return (
    <div className="cart-item">
      <div className="cart-item-container">
        <div className="img">
          <Link to="/allproducts/:id">
            <img alt="ll" src={po} />
          </Link>
        </div>
        <div className="info">
          <div>
            <p>Iphone X max 128GB 8GB Ram with A15 pionic and more than any</p>
          </div>
          <div>
            <span className="my-2 d-block color">Red</span>
          </div>
          <div>
            <h5>Countaty</h5>
            <input type="number" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProductItem;
