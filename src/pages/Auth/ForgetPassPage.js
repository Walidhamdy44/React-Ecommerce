import React from "react";
import { Button } from "react-bootstrap";
import ForgetPassLogic from "../../logic/auth/ForgetPassLogic";
import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

const ForgetPassPage = () => {
  const [email, onchangeEmail, onSubmit] = ForgetPassLogic();

  return (
    <div className="forget-pass-container">
      <div className="forget-pass">
        <h3>Forget Password ?</h3>
        <p>Reset The Password In Two Quik Steps </p>
        <input
          type="text"
          placeholder="Enter Your Email"
          value={email}
          onChange={onchangeEmail}
        />
        <Button onClick={onSubmit}>Reset Password</Button>
        <span className="back-span">
          <Link to={"/login"}>Back</Link>
        </span>
      </div>
      <Toaster />
    </div>
  );
};

export default ForgetPassPage;
