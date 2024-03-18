import { New_User, Get_User, Forget_Pass } from "../type";
import { useInsertData } from "../../Hooks/useInsertData";

export const CreateNewUser = (data) => async (dispatch) => {
  try {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const res = await useInsertData(`/api/v1/auth/signup`, data);
    dispatch({
      type: New_User,
      payload: res,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: New_User,
      payload: e,
    });
  }
};

export const LoginUser = (data) => async (dispatch) => {
  try {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const res = await useInsertData(`/api/v1/auth/login`, data);
    dispatch({
      type: Get_User,
      payload: res,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: Get_User,
      payload: e,
    });
  }
};
export const ForgetPass = (data) => async (dispatch) => {
  try {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const res = await useInsertData(`/api/v1/auth/forgotPasswords`, data);
    dispatch({
      type: Forget_Pass,
      payload: res,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: Forget_Pass,
      payload: e,
    });
  }
};
