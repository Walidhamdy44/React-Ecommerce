import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const CartPrice = () => {
  return (
    <div className="cart-price">
      <div className="input">
        <input placeholder="Copon For Sales" />
        <Button>Use</Button>
      </div>
      <div className="btn-price">1200 $</div>
      <Link to="/order/paymethod">
        <Button className="btn-price btn-x">Purchase</Button>
      </Link>
    </div>
  );
};

export default CartPrice;
