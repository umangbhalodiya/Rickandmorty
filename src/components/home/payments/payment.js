import React from "react";
import CardInputs from "./Cardinput";

const Payment = () => {
    return (
        <div className="form-inputs">
            <div className="inputs">
                <div>Enter Name On Card</div>
                <input className="email-input" type="text" />
            </div>
            <div className="inputs">
                <div>Enter Email</div>
                <input className="email-input" type="email" />
            </div>
            <div className="inputs">
                <div>Enter Card Details</div>
                <div className="email-input-card">
                    <CardInputs />
                </div>
            </div>
        </div>
    )
}

export default Payment;