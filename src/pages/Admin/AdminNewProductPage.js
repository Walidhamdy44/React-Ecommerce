import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AdminSideBar from "../../components/Admin/AdminSideBar";
import AdminNewProduct from "../../components/Admin/AdminNewProduct";

const AdminNewProductPage = () => {
  return (
    <div>
      <Container>
        <h3 className="m-3">Add New Product </h3>
        <Row className="py-3">
          <Col sm="4" md="2" xs="3">
            <AdminSideBar />
          </Col>
          <Col sm="8" md="10" xs="9">
            <AdminNewProduct />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AdminNewProductPage;
