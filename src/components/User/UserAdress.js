import React from "react";
import UserAddressItem from "./UserAddressItem";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const UserAdress = () => {
  return (
    <div>
      <UserAddressItem />
      <UserAddressItem />
      <Link to="/user/addaddress">
        <Button className="black-btn btn">Add New Address</Button>
      </Link>
    </div>
  );
};

export default UserAdress;
