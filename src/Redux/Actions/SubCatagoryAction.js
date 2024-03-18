import useGetData from "../../Hooks/useGetData";
import { useInsertData } from "../../Hooks/useInsertData";
import { Get_Error, Get_Sub_Catagory, Set_Sub_Catagory } from "../type";

export const CreateSubCatagory = (formData) => async (dispatch) => {
  try {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const res = await useInsertData(`/api/v1/subcategories`, formData);
    dispatch({
      type: Set_Sub_Catagory,
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
export const GetSubCatagory = (id) => async (dispatch) => {
  try {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const res = await useGetData(`/api/v1/categories/${id}/subcategories`);
    dispatch({
      type: Get_Sub_Catagory,
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
