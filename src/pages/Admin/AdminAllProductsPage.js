import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AdminSideBar from "../../components/Admin/AdminSideBar";
import AdminAllProduct from "../../components/Admin/AdminAllProduct";
import PagenationEl from "../../components/utilty/PagenationEl";
import AdminAllProductPageLogic from "../../logic/Admin/AdminAllProductPageLogic";

const AdminAllProductsPage = () => {
  const [pageCount, onPress, items] = AdminAllProductPageLogic();
  return (
    <div>
      <Container>
        <h3 className="m-3">Manage All Products</h3>
        <Row className="py-3">
          <Col sm="4" md="2" xs="3">
            <AdminSideBar />
          </Col>
          <Col sm="8" md="10" xs="9">
            <AdminAllProduct items={items} />
          </Col>
        </Row>
        {pageCount > 1 ? (
          <PagenationEl pageCount={pageCount} onPress={onPress} />
        ) : null}
      </Container>
    </div>
  );
};

export default AdminAllProductsPage;
