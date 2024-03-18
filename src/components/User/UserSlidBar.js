import React from "react";
import { Link } from "react-router-dom";

const UserSlidBar = () => {
  return (
    <div className="admin-side">
      <ul>
        <li>
          <Link to="/user/allproduct">Orders List</Link>
        </li>
        <li>
          <Link to="/user/favorite">Favorite ❤</Link>
        </li>
        <li>
          {" "}
          <Link to="/user/address">Personal Address</Link>
        </li>
        <li>
          {" "}
          <Link to="/user/profile">Profile Info</Link>
        </li>
      </ul>
    </div>
  );
};

export default UserSlidBar;
