import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import UserSlidBar from "../../components/User/UserSlidBar";
import UserProfile from "../../components/User/UserProfile";
const UserProfilePage = () => {
  return (
    <div>
      <Container>
        <h3 className="m-3">Favorite Products ❤</h3>
        <Row className="py-3">
          <Col sm="4" md="3" xs="3">
            <UserSlidBar />
          </Col>
          <Col sm="8" md="9" xs="9">
            <UserProfile />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UserProfilePage;
