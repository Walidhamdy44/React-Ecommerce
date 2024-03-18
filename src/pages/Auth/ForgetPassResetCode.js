import React from "react";
import { Button } from "react-bootstrap";
import { Toaster } from "react-hot-toast";

const ForgetPassResetCode = () => {
  return (
    <div className="forget-pass-container">
      <div className="forget-pass">
        <h3>We Sent Code To Your Email</h3>
        <p>Enter the code Diget-6 validution To Reset Your Password </p>
        <p>
          We Send The Code To <span>waldi43@gmail.com</span> <span>Change</span>
        </p>
        <input type="number" placeholder="6 Digit Code" />
        <Button>Submit</Button>
        <p className="p-2">If you Dont get areset code check your email</p>
      </div>
      <Toaster />
    </div>
  );
};

export default ForgetPassResetCode;
