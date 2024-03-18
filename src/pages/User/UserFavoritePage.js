import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import UserSlidBar from "../../components/User/UserSlidBar";
import UserFavorite from "../../components/User/UserFavorite";

const UserFavoritePage = () => {
  return (
    <div>
      <Container>
        <h3 className="m-3">Favorite Products ❤</h3>
        <Row className="py-3">
          <Col sm="4" md="3" xs="3">
            <UserSlidBar />
          </Col>
          <Col sm="8" md="9" xs="9">
            <UserFavorite />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UserFavoritePage;
