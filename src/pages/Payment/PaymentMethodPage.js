import React from "react";
import { Container } from "react-bootstrap";
import ChoosePaymentMethod from "../../components/PayMent/ChoosePaymentMethod";

const PaymentMethodPage = () => {
  return (
    <div>
      <Container>
        <ChoosePaymentMethod />
      </Container>
    </div>
  );
};

export default PaymentMethodPage;
