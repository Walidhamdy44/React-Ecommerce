import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

import { Link } from "react-router-dom";

import { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { DeleteProduct } from "../../Redux/Actions/ProductsAction";
import { ToastAlertSucses } from "../utilty/ToastAlert";

const AdminAllProductCard = ({ itemP }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();
  //
  const Delete = async () => {
    await dispatch(DeleteProduct(itemP._id));
    setShow(false);

    ToastAlertSucses("Deleted Sucesefully");
    window.location.reload();
  };

  return (
    <div className="product-card">
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Delet Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>Do You Want To Delete This Item ?</Modal.Body>
        <Modal.Footer>
          <Button variant="info" onClick={handleClose}>
            Back
          </Button>
          <Button variant="danger" onClick={Delete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="card-edit">
        <span>
          <Link to={`/admin/editproduct/${itemP._id}`}>Edit</Link>
        </span>
        <span onClick={handleShow}>Delete </span>
      </div>
      <div className="img-card">
        <Link to={`/allproducts/${itemP._id}`}>
          <img alt="ll" src={itemP.imageCover} />
        </Link>
      </div>
      <div className="card-info">
        <p>{itemP.title}</p>
      </div>
      <div className="card-footer">
        <span>
          <span>{itemP.price}</span>$
        </span>
        <div className="card-rate">
          <span>4.3</span>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default AdminAllProductCard;
