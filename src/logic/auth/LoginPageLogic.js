import {
  ToastAlertError,
  ToastAlertSucses,
} from "../../components/utilty/ToastAlert";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { LoginUser } from "../../Redux/Actions/AuthAction";
import { useEffect } from "react";
const LoginPageLogic = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [loading, setloading] = useState(false);
  //
  const dispatch = useDispatch();

  const res = useSelector((state) => state.AuthReducer.userData);
  //

  //

  const saveEmail = (e) => {
    setEmail(e.target.value);
  };
  const savePass = (e) => {
    setPass(e.target.value);
  };

  //
  // valldetion >>

  const valldetion = () => {
    //email validation

    var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (email === "" || !email.match(validRegex)) {
      ToastAlertError("Please Enter Valid Email !");
      return;
    }

    if (pass === "") {
      ToastAlertError("The Password Not Valid");
      return;
    }
  };
  //

  //
  const handleSubmit = async () => {
    setloading(true);
    valldetion();

    await dispatch(
      LoginUser({
        email: email,
        password: pass,
      })
    );

    setloading(false);
  };

  useEffect(() => {
    if (loading === false) {
      if (res) {
        if (res.token) {
          localStorage.setItem("token", res.token);
          localStorage.setItem("user", JSON.stringify(res.data));
          ToastAlertSucses("Logged Succes");

          setTimeout(() => {
            window.location.href = "/";
          }, 2000);
        } else {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
        }

        if (res.response) {
          if (res.response.status === 500 || res.response.status === 400) {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            ToastAlertError(res.response.data.message);
          }
        }
      }
    }
  }, [loading]);
  return [saveEmail, savePass, email, pass, loading, handleSubmit];
};

export default LoginPageLogic;
