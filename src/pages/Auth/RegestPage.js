import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import regestImg from "../../images/regestimg.jpg";
import RegestPageLogic from "../../logic/auth/RegestPageLogic";
import { Toaster } from "react-hot-toast";
const RegestPage = () => {
  const [
    saveEmail,
    saveName,
    saveComPass,
    savePass,
    savePhone,
    handleSubmit,
    email,
    pass,
    name,
    phone,
    comPass,
  ] = RegestPageLogic();
  return (
    <div>
      <Container className="login-page">
        <div className="box">
          <div className="form">
            <h3>New Account</h3>
            <input
              value={name}
              onChange={saveName}
              type="text"
              placeholder="Enter User Name"
            />
            <input
              onChange={saveEmail}
              value={email}
              type="mail"
              placeholder="Enter Email"
            />

            <input
              value={phone}
              onChange={savePhone}
              type="number"
              placeholder="Enter Mobile Number"
            />
            <input
              value={pass}
              onChange={savePass}
              type="password"
              placeholder="Enter Password"
            />
            <input
              value={comPass}
              onChange={saveComPass}
              type="password"
              placeholder="Confirem Password"
            />
            <span className="forget">Forget Password ?</span>
            <Button onClick={handleSubmit}>Regrest</Button>
            <p>
              You Already Have An Account ?
              <Link to="/login">
                <span>Login</span>
              </Link>
            </p>
            <Button>
              <i class="fa-brands fa-apple"></i>
              Login With Appel
            </Button>
            <Button>
              <i class="fa-brands fa-google"></i>
              Login With Google
            </Button>
          </div>
          <div className="img">
            <img alt="" src={regestImg} />
          </div>
        </div>
      </Container>
      <Toaster />
    </div>
  );
};

export default RegestPage;
