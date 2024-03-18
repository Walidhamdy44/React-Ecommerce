import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AdminSideBar from "../../components/Admin/AdminSideBar";
import AdminNewCatagury from "../../components/Admin/AdminNewCatagury";

const AdminNewCataguryPage = () => {
  return (
    <div>
      <Container>
        <h3 className="m-3">Add New Catagury </h3>
        <Row className="py-3">
          <Col sm="4" md="2" xs="4">
            <AdminSideBar />
          </Col>
          <Col sm="8" md="10" xs="8">
            <AdminNewCatagury />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AdminNewCataguryPage;
