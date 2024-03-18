import React from "react";
import { Link } from "react-router-dom";

const AdminSideBar = () => {
  return (
    <div className="admin-side">
      <ul>
        <li>
          <Link to="/admin/orders">Orders List</Link>
        </li>
        <li>
          <Link to="/admin/allproducts">All Products</Link>
        </li>
        <li>
          {" "}
          <Link to="/admin/newbrand">New Brand</Link>
        </li>
        <li>
          {" "}
          <Link to="/admin/newcatagury">New Catagury</Link>
        </li>
        <li>
          {" "}
          <Link to="/admin/newsubcatagury">New Sub Catagury</Link>
        </li>
        <li>
          {" "}
          <Link to="/admin/newproduct">New Product</Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminSideBar;
