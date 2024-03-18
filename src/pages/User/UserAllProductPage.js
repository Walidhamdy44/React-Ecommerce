import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import UserSlidBar from "../../components/User/UserSlidBar";
import UserAllProduct from "../../components/User/UserAllProduct";

const UserAllProductPage = () => {
  return (
    <div>
      <Container>
        <h3 className="m-3">Hello, Mohamed Ali</h3>
        <Row className="py-3">
          <Col sm="4" md="3" xs="3">
            <UserSlidBar />
          </Col>
          <Col sm="8" md="9" xs="9">
            <UserAllProduct />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UserAllProductPage;
