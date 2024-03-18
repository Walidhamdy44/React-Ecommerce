import React from "react";
import { Button } from "react-bootstrap";

const UserAddAddress = () => {
  return (
    <div>
      <div className="new-brand">
        <input
          type="text"
          placeholder="Place Address like( Home , work ,...)"
        />
        <textarea placeholder="Detailed Address" />
        <input type="text" placeholder="Phone Number" />
        <Button>Add Address</Button>
      </div>
    </div>
  );
};

export default UserAddAddress;
