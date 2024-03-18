import React from "react";
import po from "../../images/mobile.png";
import { Link } from "react-router-dom";
const CartItem = () => {
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
            <h5>Electronics</h5>
            <p>
              Iphone X max 128GB 8GB Ram with A15 pionic and more than any
              iphone{" "}
            </p>
          </div>
          <div>
            <h5>
              Brand :<span>Apple</span>
            </h5>
            <span className="my-2 d-block color">Colors:</span>
            <div className="circles">
              <span className="circle active"></span>
            </div>
          </div>
          <div>
            <h5>Countaty</h5>
            <input type="number" />
          </div>
        </div>
        <div className="delete-price">
          <div>
            <i class="fa-solid fa-trash-can"></i>
            <span>Delete</span>
          </div>
          <div>1200 $</div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
