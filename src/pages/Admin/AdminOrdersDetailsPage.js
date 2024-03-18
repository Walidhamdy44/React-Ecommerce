import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AdminSideBar from "../../components/Admin/AdminSideBar";
import AdminOrdersDetails from "../../components/Admin/AdminOrdersDetails";

const AdminOrdersDetailsPage = () => {
  return (
    <div>
      <Container>
        <h3 className="m-3">Order #735 Details :</h3>
        <Row className="py-3">
          <Col sm="4" md="2" xs="3">
            <AdminSideBar />
          </Col>
          <Col sm="8" md="10" xs="9">
            <AdminOrdersDetails />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AdminOrdersDetailsPage;
