import React from "react";
import SideBarFilterLogic from "../../logic/Search/SideBarFilterLogic";

const SideBarFilter = () => {
  const [
    catagory,
    brand,
    handleSelectCata,
    handleSelectBrand,
    priceFrom,
    priceTo,
  ] = SideBarFilterLogic();
  //
  // get data from localStorage
  let from = localStorage.getItem("priceFrom");
  let to = localStorage.getItem("priceTo");

  //
  return (
    <div className="side">
      <div className="box">
        <h4>Catagury</h4>
        <input type="checkbox" id="-1" value="0" />
        <label htmlFor="-1">All</label>
        {catagory
          ? catagory.map((item, index) => {
              return (
                <div>
                  <input
                    onChange={handleSelectCata}
                    type="checkbox"
                    id={index}
                    value={item._id}
                  />
                  <label htmlFor={index}>{item.name}</label>
                </div>
              );
            })
          : null}
      </div>
      <div className="box">
        <h4>Brand</h4>
        <input type="checkbox" id="-2" value="00" />
        <label htmlFor="-2">All Brands </label>
        {brand
          ? brand.map((item, index) => {
              return (
                <div>
                  <input
                    type="checkbox"
                    onChange={handleSelectBrand}
                    id={index + 100}
                    value={item._id}
                  />
                  <label htmlFor={index + 100}> {item.name}</label>
                </div>
              );
            })
          : null}
      </div>
      <div className="box">
        <h4>Price</h4>
        <div>
          <input
            type="number"
            onChange={priceFrom}
            value={from}
            style={{ width: 68 }}
          />
          <label> MIN</label>
        </div>
        <div>
          <input
            type="Number"
            onChange={priceTo}
            value={to}
            style={{ width: 68 }}
          />
          <label> Max</label>
        </div>
      </div>
    </div>
  );
};

export default SideBarFilter;
