import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import UserSlidBar from "../../components/User/UserSlidBar";
import UserEditAddress from "../../components/User/UserEditAddress";

const UserEditAddressPage = () => {
  return (
    <div>
      <Container>
        <h3 className="m-3">Edit Address</h3>
        <Row className="py-3">
          <Col sm="4" md="3" xs="3">
            <UserSlidBar />
          </Col>
          <Col sm="8" md="9" xs="9">
            <UserEditAddress />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UserEditAddressPage;
