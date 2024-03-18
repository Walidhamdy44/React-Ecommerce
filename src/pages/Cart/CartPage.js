import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CartPrice from "../../components/Cart/CartPrice";
import CartItem from "../../components/Cart/CartItem";

const CartPage = () => {
  return (
    <div>
      <Container>
        <div className="head-cart">Cart</div>
        <Row className="d-flex justify-content-center">
          <Col xs="12" md="9">
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
          </Col>
          <Col xs="10" md="3">
            <CartPrice />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CartPage;
