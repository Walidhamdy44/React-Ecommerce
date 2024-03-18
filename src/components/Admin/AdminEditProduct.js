import React from "react";
import { CompactPicker } from "react-color";
import { Button, Form } from "react-bootstrap";
import MultiImageInput from "react-multiple-image-input";
import Multiselect from "multiselect-react-dropdown";
import { Toaster } from "react-hot-toast";
import LoadingAnimation from "../utilty/LoadingAnimation";
import AdminEditProductLogic from "../../logic/Admin/AdminEditProductLogic";
import { useParams } from "react-router-dom";

const AdminEditProduct = () => {
  const { id } = useParams();
  const [
    images,
    colors,
    setImages,
    setPriceAfter,
    setPriceBefore,
    setProName,
    setProDesc,
    setQty,
    setShowColor,
    handleSendData,
    handelselectBrand,
    handleSelectColor,
    handelselectCat,
    loading,
    priceAfter,
    isPress,
    options,
    onRemove,
    onSelect,
    removeColor,
    catagory,
    brand,
    proName,
    proDesc,
    Qty,
    priceBefore,
    showColor,
    catId,
    brandId,
  ] = AdminEditProductLogic(id);

  return (
    <div>
      <h2>
        Edit Product
        <span style={{ fontSize: 16, color: "#0dcaf0" }}>{proName}</span>
      </h2>
      <div className="new-brand">
        <MultiImageInput
          images={images}
          setImages={setImages}
          cropConfig={{ minWidth: 100 }}
          allowCrop={false}
          theme={"light"}
          max={4}
        />
        <input
          type="text"
          placeholder="Product Name"
          value={proName}
          onChange={(e) => {
            setProName(e.target.value);
          }}
        />
        <textarea
          placeholder="Product Description"
          value={proDesc}
          onChange={(e) => {
            setProDesc(e.target.value);
          }}
        />
        <input
          type="Number"
          placeholder="Quantyty Avalible"
          value={Qty}
          onChange={(e) => {
            setQty(e.target.value);
          }}
        />
        <input
          type="number"
          placeholder="Price Before Sale"
          value={priceBefore}
          onChange={(e) => {
            setPriceBefore(e.target.value);
          }}
        />
        <input
          type="number"
          placeholder="Orignal Price"
          value={priceAfter}
          onChange={(e) => {
            setPriceAfter(e.target.value);
          }}
        />
        <Form.Select
          aria-label="Default select example"
          onChange={handelselectCat}
          value={catId}
        >
          <option value="0">Select Sub Catagury </option>
          {catagory
            ? catagory.map((item, index) => {
                return (
                  <option key={index} value={item._id}>
                    {item.name}
                  </option>
                );
              })
            : null}
        </Form.Select>
        <Multiselect
          options={options}
          placeholder="SubCatagory !"
          onSelect={onSelect}
          onRemove={onRemove}
          displayValue="name"
        />

        <Form.Select
          aria-label="Default select example"
          onChange={handelselectBrand}
          value={brandId}
        >
          <option value="0">Select Brand </option>
          {brand
            ? brand.map((item, index) => {
                return (
                  <option key={index} value={item._id}>
                    {item.name}
                  </option>
                );
              })
            : null}
        </Form.Select>
        <p>Colors Avalable :</p>
        <div className="circles" style={{ height: "100px" }}>
          {colors.length > 0
            ? colors.map((item, index) => {
                return (
                  <span
                    key={index}
                    className="circle active"
                    style={{
                      userSelect: "none",
                      backgroundColor: item,
                      color: "black",
                    }}
                    onClick={() => removeColor(item)}
                  ></span>
                );
              })
            : null}
          <span
            className="circle"
            onClick={() => setShowColor(!showColor)}
            style={{
              userSelect: "none",
              backgroundColor: "white",
              color: "black",
            }}
          >
            +
          </span>
          {showColor ? (
            <CompactPicker onChangeComplete={handleSelectColor} />
          ) : null}
        </div>
        <Button onClick={handleSendData}>Save Changes</Button>
      </div>
      {isPress ? loading ? <LoadingAnimation /> : <h4>Done ...</h4> : null}
      <Toaster />
    </div>
  );
};
export default AdminEditProduct;
