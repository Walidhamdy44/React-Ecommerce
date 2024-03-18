import React from "react";
import UserProductItem from "./UserProductItem";

const UserProductContainer = () => {
  return (
    <div className="user-container">
      <h5>Order No #638362</h5>
      <UserProductItem />
      <UserProductItem />
      <UserProductItem />
      <div className="state">
        <span>
          State : <span>Done</span>
        </span>
        <span>1400$</span>
      </div>
    </div>
  );
};

export default UserProductContainer;
