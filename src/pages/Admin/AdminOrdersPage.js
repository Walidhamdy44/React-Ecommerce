import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AdminSideBar from "../../components/Admin/AdminSideBar";
import AdminOrders from "../../components/Admin/AdminOrders";
import PagenationEl from "../../components/utilty/PagenationEl";

const AdminOrdersPage = () => {
  return (
    <div>
      <Container>
        <h3 className="m-3">Orders Management</h3>
        <Row className="py-3">
          <Col sm="4" md="2" xs="3">
            <AdminSideBar />
          </Col>
          <Col sm="8" md="10" xs="9">
            <AdminOrders />
          </Col>
        </Row>
        <PagenationEl />
      </Container>
    </div>
  );
};

export default AdminOrdersPage;
