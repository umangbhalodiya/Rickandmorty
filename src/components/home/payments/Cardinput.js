import React from "react";
import { CardElement } from "@stripe/react-stripe-js";

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: "#000",
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: "antialiased",
      fontSize: "16px",
      border: "1px solid #000",
      "::placeholder": {
        color: "#323232",
      },
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a",
      border: "1px solid #000",
      "::placeholder": {
        color: "#FF0000",
      },
    },
  },
};

export default function CardInput(props) {
  return (
    <CardElement
      options={CARD_ELEMENT_OPTIONS}
      onChange={(e) => {
        props.setPaymentStatus(e.complete);
      }}
    />
  );
}
