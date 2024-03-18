import React from "react";
import { Button } from "react-bootstrap";

const ChoosePaymentMethod = () => {
  return (
    <div className="payment" style={{ minHeight: "570px" }}>
      <div className="head">Choose Payment Method :</div>
      <div className="inputs">
        <div>
          <input type="radio" id="one" value="Visa Card" name="group" />
          <label For="one">Visa Card</label>
        </div>
        <div>
          <input
            type="radio"
            id="two"
            value="Paiment When Reciving"
            name="group"
          />
          <label For="two">Paiment When Reciving</label>
        </div>
      </div>
      <div className="btns">
        <span>1200 $</span>
        <Button className="btn-x">Checkout</Button>
      </div>
    </div>
  );
};

export default ChoosePaymentMethod;
