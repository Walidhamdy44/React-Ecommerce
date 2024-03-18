import React from "react";
import { Link } from "react-router-dom";

const UserAddressItem = () => {
  return (
    <div className="address-box">
      <div className="info">
        <span>Home</span>
        <span>Cairo , 15 Street Mohamed ALi </span>
        <span>
          Phone:<span>01144705386</span>
        </span>
      </div>
      <div className="btns">
        <Link to="/user/editaddress">
          <span>Edit</span>
        </Link>
        <span>Delete</span>
      </div>
    </div>
  );
};

export default UserAddressItem;
