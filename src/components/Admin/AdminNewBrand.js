import React from "react";
import { Button } from "react-bootstrap";
import LoadingAnimation from "../utilty/LoadingAnimation";
import { Toaster } from "react-hot-toast";
import AddBrandLogic from "../../logic/Brands/AddBrandLogic";

const AdminNewBrand = () => {
  // structure from the logic file
  const [
    img,
    name,
    loading,
    isPress,
    onimageChange,
    OnchangeName,
    handelSubmit,
  ] = AddBrandLogic();
  return (
    <div>
      <div className="new-brand">
        <span>Brand Image</span>
        <div className="p-relative">
          <label htmlFor="file">
            <img alt="ddd" src={img} />
          </label>
          <input
            type="file"
            id="file"
            name="file"
            onChange={onimageChange}
            style={{
              position: "absolute",
              zIndex: "0",
              opacity: 0,
              width: "20px",
              cursor: "pointer",
            }}
          />
        </div>
        <input
          type="text"
          placeholder="Brand Name"
          value={name}
          onChange={OnchangeName}
        />
        <Button onClick={handelSubmit}>Save Changes</Button>
        {isPress ? loading ? <LoadingAnimation /> : <h4>Done ...</h4> : null}
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default AdminNewBrand;
