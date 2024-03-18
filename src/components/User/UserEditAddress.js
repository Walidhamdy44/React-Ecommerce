import React from "react";
import { Button } from "react-bootstrap";

const UserEditAddress = () => {
  return (
    <div>
      <div className="new-brand">
        <input
          type="text"
          placeholder="Place Address like( Home , work ,...)"
          value="Home"
        />
        <textarea
          placeholder="Detailed Address"
          value="Cairo , 15 Street Mohamed ALi"
        />
        <input type="text" placeholder="Phone Number" value="01163863863" />
        <Button>Add Address</Button>
      </div>
    </div>
  );
};

export default UserEditAddress;
