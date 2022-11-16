import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Payment from "./payment";
// import ProceedCheckout from "routes/yourcart/ProceedCheckout";
const stripePromise = loadStripe(
  "pk_live_51L0KQZJZ1JYpOvUzQ2VeiJjY9VlQhlzf0egdzR56LoS6ANdlB731RI2HDSBODyzyvtKnuC7BCBITRrDaCXSKMoFn00r9LJjSjP"
);

// const stripePromise = loadStripe(
//   "pk_test_51L0KQZJZ1JYpOvUzwHv8HLiWy4An572fWFevtpJvUqxPGgg86AmzzCV7VN9Eq5IAHgFDo7RbJPXP237EfRFTKSp200XIlzDi4P"
// );

const Plan = (props) => {
  return (
    <div>
      <div>
        <Elements stripe={stripePromise}>
          <Payment />
        </Elements>
      </div>
    </div>
  );
};

export default Plan;
