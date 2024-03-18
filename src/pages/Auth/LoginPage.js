import React from "react";
import { Button, Container } from "react-bootstrap";
import loginIMg from "../../images/loginBK.jpg";
import { Link } from "react-router-dom";
import LoginPageLogic from "../../logic/auth/LoginPageLogic";
import LoadingAnimation from "../../components/utilty/LoadingAnimation";
import { Toaster } from "react-hot-toast";

const LoginPage = () => {
  const [saveEmail, savePass, email, pass, loading, handleSubmit] =
    LoginPageLogic();
  return (
    <div>
      <Container className="login-page">
        <div className="box">
          <div className="form">
            <h3>Welcom Back</h3>
            <input
              onChange={saveEmail}
              type="text"
              placeholder="Enter Your Email"
              value={email}
            />
            <input
              onChange={savePass}
              type="password"
              placeholder="Enter Password"
              value={pass}
            />
            <span className="forget">
              <Link to={"/forgetpassword"}>Forget Password ?</Link>
            </span>
            <Button onClick={handleSubmit}>Login</Button>
            {loading ? <LoadingAnimation className="m-2" /> : null}
            <p>
              Dont Have Account ?
              <Link to="/regest">
                <span>Regrest</span>
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
            <img alt="" src={loginIMg} />
          </div>
        </div>
      </Container>
      <Toaster />
    </div>
  );
};

export default LoginPage;
