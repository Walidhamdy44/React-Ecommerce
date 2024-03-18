import React from "react";
import { Button, Form } from "react-bootstrap";
import { Toaster } from "react-hot-toast";

import LoadingAnimation from "../utilty/LoadingAnimation";
import AddSubcatagoryLogic from "../../logic/subCatagory/AddSubcatagoryLogic";

const AdminNewSubCatagury = () => {
  const [
    catagory,
    handelSubmit,
    handelselect,
    name,
    isPress,
    loading,
    setName,
  ] = AddSubcatagoryLogic();
  return (
    <div className="new-brand">
      <input
        type="text"
        placeholder="Sub Catagury Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Form.Select aria-label="Default select example" onChange={handelselect}>
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
      <Button onClick={handelSubmit}>Save Changes</Button>
      {isPress ? loading ? <LoadingAnimation /> : <h4>Done ...</h4> : null}
      <Toaster />
    </div>
  );
};

export default AdminNewSubCatagury;
