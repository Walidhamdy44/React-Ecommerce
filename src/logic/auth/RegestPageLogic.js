import { useEffect, useState } from "react";
import {
  ToastAlertError,
  ToastAlertSucses,
} from "../../components/utilty/ToastAlert";
import { useDispatch, useSelector } from "react-redux";
import { CreateNewUser } from "../../Redux/Actions/AuthAction";
import { useNavigate } from "react-router-dom";

const RegestPageLogic = () => {
  //
  const navgate = useNavigate();
  //
  const dispatch = useDispatch();

  const res = useSelector((state) => state.AuthReducer.newUser);
  //
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [pass, setPass] = useState("");
  const [comPass, setComPass] = useState("");
  const [loading, setloading] = useState(true);

  // set all data from the input to the state >>
  const saveEmail = (e) => {
    setEmail(e.target.value);
  };
  const savePass = (e) => {
    setPass(e.target.value);
  };
  const saveName = (e) => {
    setName(e.target.value);
  };
  const savePhone = (e) => {
    setPhone(e.target.value);
  };
  const saveComPass = (e) => {
    setComPass(e.target.value);
  };

  // valldetion >>

  const valldetion = () => {
    if (name === "" || name.length < 4) {
      ToastAlertError("Please Enter Valid Name !");
      return;
    }

    //
    //email validation

    var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (email === "" || !email.match(validRegex)) {
      ToastAlertError("Please Enter Valid Email !");
      return;
    }

    var validPhone = /^01[0125][0-9]{8}$/;

    if (
      phone === "" ||
      phone.length < 10 ||
      !phone.match(validPhone) ||
      !phone.startsWith(0)
    ) {
      ToastAlertError("Please Enter Valid Number !");
      return;
    }
    if (pass !== comPass) {
      ToastAlertError("The Password Not Identical");
      return;
    }
  };
  //

  // start func for submit and send the data >>>

  const handleSubmit = async () => {
    valldetion();
    setloading(true);

    await dispatch(
      CreateNewUser({
        name: name,
        email: email,
        password: pass,
        passwordConfirm: comPass,
        phone: phone,
      })
    );
    setloading(false);
    //
  };

  useEffect(() => {
    if (loading === false) {
      if (res) {
        if (res.token) {
          localStorage.setItem("token", res.token);
          ToastAlertSucses("User Created Succesfully .");

          setTimeout(() => {
            navgate("/login");
          }, 2000);
        }
        if (!res.token) {
          ToastAlertError(res.response.data.errors[0].msg);
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  // return all data >>
  return [
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
  ];
};

export default RegestPageLogic;
