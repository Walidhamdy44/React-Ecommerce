import React from "react";
import AdminAllProductCard from "./AdminAllProductCard";

const AdminAllProduct = ({ items }) => {
  return (
    <div className="admin-card-container">
      {items
        ? items.map((item, index) => {
            return <AdminAllProductCard key={index} itemP={item} />;
          })
        : null}
    </div>
  );
};

export default AdminAllProduct;
