import { Get_User, New_User, Forget_Pass } from "../type";

const inital = {
  newUser: [],
  userData: [],
  forgetPass: [],
  loading: true,
};

const AuthReducer = (state = inital, action) => {
  switch (action.type) {
    case New_User:
      return {
        ...state,
        newUser: action.payload,
        loading: false,
      };
    case Get_User:
      return {
        ...state,
        userData: action.payload,
        loading: false,
      };
    case Forget_Pass:
      return {
        ...state,
        forgetPass: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default AuthReducer;
