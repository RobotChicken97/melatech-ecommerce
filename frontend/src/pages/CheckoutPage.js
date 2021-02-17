import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";
import CheckoutSteps from "../components/CheckoutSteps";
import { saveDeliveryAddress } from "../actions/cartActions";

const CheckoutPage = ({ history }) => {
  const cart = useSelector((state) => state.cart);
  const { deliveryAddress } = cart;
  const [address, setAddress] = useState(deliveryAddress.address);
  const [city, setCity] = useState(deliveryAddress.city);
  const [zipCode, setZipCode] = useState(deliveryAddress.zipCode);
  const [country, setCountry] = useState(deliveryAddress.country);

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveDeliveryAddress({ address, city, zipCode, country }));
    history.push("/payment");
  };
  return (
    <FormContainer>
      <CheckoutSteps step1 step2 />
      <h1>Delivery Address</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId={"address"}>
          <Form.Label>Address</Form.Label>
          <Form.Control
            type={"text"}
            placeholder={"Enter address"}
            value={address}
            required
            onChange={(e) => setAddress(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId={"city"}>
          <Form.Label>City</Form.Label>
          <Form.Control
            type={"text"}
            placeholder={"Enter city"}
            value={city}
            required
            onChange={(e) => setCity(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId={"zipcode"}>
          <Form.Label>Zip Code</Form.Label>
          <Form.Control
            type={"text"}
            placeholder={"Enter zip code"}
            value={zipCode}
            required
            onChange={(e) => setZipCode(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId={"country"}>
          <Form.Label>Country</Form.Label>
          <Form.Control
            type={"text"}
            placeholder={"Enter country"}
            value={country}
            required
            onChange={(e) => setCountry(e.target.value)}
          />
        </Form.Group>
        <Button type={"submit"} variant={"primary"}>
          Continue To Payment
        </Button>
      </Form>
    </FormContainer>
  );
};

export default CheckoutPage;
