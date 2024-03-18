import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ForgetPass } from "../../Redux/Actions/AuthAction";
import {
  ToastAlertError,
  ToastAlertSucses,
} from "../../components/utilty/ToastAlert";
import { useNavigate } from "react-router-dom";

const ForgetPassLogic = () => {
  const dispatch = useDispatch();

  const navgat = useNavigate();

  const [email, setEmail] = useState("");
  const [loading, setloading] = useState(false);

  const onchangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const validution = () => {
    var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (email === "" || !email.match(validRegex)) {
      ToastAlertError("Please Enter Valid Email !");
      return;
    }
  };

  const res = useSelector((state) => state.AuthReducer.forgetPass);

  const onSubmit = async () => {
    validution();
    setloading(true);
    await dispatch(
      ForgetPass({
        email: email,
      })
    );
    setloading(false);
  };

  useEffect(() => {
    if (loading)
      if (res) {
        if (res.data === 200) {
          ToastAlertSucses("Code Send Succesfully !");
          navgat("/resetcode");
        }
        if (res.response) {
          if (res.response.status === 500 || res.response.status === 404)
            ToastAlertError("Thers Error When Sending Email");
        }
      }
  }, [loading]);

  return [email, onchangeEmail, onSubmit];
};

export default ForgetPassLogic;
