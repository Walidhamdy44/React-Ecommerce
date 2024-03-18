import { Get_All_Brands, Get_Error, Set_Brand } from "../type";
import useGetData from "../../Hooks/useGetData";
import { useInsertDataImage } from "../../Hooks/useInsertData";

export const allBrand = (limit) => async (dispatch) => {
  try {
    const res = await useGetData(`/api/v1/brands?limit=${limit}`);
    dispatch({
      type: Get_All_Brands,
      payload: res,
    });
  } catch (e) {
    dispatch({
      type: Get_Error,
      payload: "error" + e,
    });
  }
};

export const allBrandPage = (limit, page) => async (dispatch) => {
  try {
    const res = await useGetData(`/api/v1/brands?limit=${limit}&page=${page}`);
    dispatch({
      type: Get_All_Brands,
      payload: res,
    });
  } catch (e) {
    dispatch({
      type: Get_Error,
      payload: "error" + e,
    });
  }
};

export const CreateBrand = (formData) => async (dispatch) => {
  try {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const res = await useInsertDataImage(`/api/v1/brands`, formData);
    dispatch({
      type: Set_Brand,
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
