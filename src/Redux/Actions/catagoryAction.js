import {
  Get_All_Catagories,
  Get_Error,
  Set_Catagory,
  Get_Specific_Catagory,
} from "../type";
import useGetData from "../../Hooks/useGetData";
import { useInsertDataImage } from "../../Hooks/useInsertData";

export const allcatagory = (limit) => async (dispatch) => {
  try {
    const res = await useGetData(`/api/v1/categories?limit=${limit}`);
    dispatch({
      type: Get_All_Catagories,
      payload: res,
    });
  } catch (e) {
    dispatch({
      type: Get_Error,
      payload: "error" + e,
    });
  }
};

export const allcatagoryPages = (limit, page) => async (dispatch) => {
  try {
    const res = await useGetData(
      `/api/v1/categories?limit=${limit}&page=${page}`
    );
    dispatch({
      type: Get_All_Catagories,
      payload: res,
    });
  } catch (e) {
    dispatch({
      type: Get_Error,
      payload: "error" + e,
    });
  }
};
export const GetSpecificCatagory = (catId) => async (dispatch) => {
  try {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const res = await useGetData(`/api/v1/categories/${catId}`);
    dispatch({
      type: Get_Specific_Catagory,
      payload: res,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: Get_Error,
      payload: "error" + e,
    });
  }
};
export const CreateCatagory = (formData) => async (dispatch) => {
  try {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const res = await useInsertDataImage(`/api/v1/categories`, formData);
    dispatch({
      type: Set_Catagory,
      payload: res,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: Get_Error,
      payload: "error" + e,
    });
  }
};
