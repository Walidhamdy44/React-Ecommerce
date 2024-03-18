import React from "react";
import CartItem from "../Cart/CartItem";
import { Button, Form } from "react-bootstrap";

const AdminOrdersDetails = () => {
  return (
    <div>
      <CartItem />
      <CartItem />
      <CartItem />
      <div className="order-details">
        <h3>Client Details</h3>
        <p>
          Name : <span>Ahmed saleh</span>
        </p>
        <p>
          Phone : <span>0113856868</span>
        </p>
        <p>
          Email : <span>Ahmedsaleh@gmail.com</span>
        </p>
        <span className="total">Total : 4000 $</span>
        <div className="input">
          <Form.Select aria-label="Default select example">
            <option>Select State Of Order</option>
            <option value="1">UnderWay</option>
            <option value="2">Done</option>
            <option value="3">Canceled</option>
          </Form.Select>
          <Button>Save</Button>
        </div>
      </div>
    </div>
  );
};

export default AdminOrdersDetails;
