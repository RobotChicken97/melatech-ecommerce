import React, { useState } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";
import CheckoutSteps from "../components/CheckoutSteps";
import { savePaymentMethod } from "../actions/cartActions";

const PaymentPage = ({ history }) => {
  const cart = useSelector((state) => state.cart);
  const { deliveryAddress } = cart;

  if (!deliveryAddress) {
    history.push("checkout");
  }
  const [paymentMethod, setPaymentMethod] = useState("PayPal");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    history.push("/placeorder");
  };
  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3 />
      <h1>Payment Method</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label as={"legend"}>Select Method</Form.Label>

          <Col>
            <Form.Check
              type={"radio"}
              label={"PayPal or Debit Card"}
              id={"PayPal"}
              name={"paymentMethod"}
              value={"PayPal"}
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <Form.Check
              type={"radio"}
              label={"PayStack"}
              id={"PayStack"}
              name={"paymentMethod"}
              value={"PayStack"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
          </Col>
        </Form.Group>
        <Button type={"submit"} variant={"primary"}>
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
};

export default PaymentPage;
