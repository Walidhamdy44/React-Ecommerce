import { useInsertDataImage } from "../../Hooks/useInsertData";
import useGetData from "../../Hooks/useGetData";
import useDeleteData from "../../Hooks/useDeleteData";
import { useUpdateDataWithImage } from "../../Hooks/useUpdateData";

import {
  Get_Error,
  Set_Products,
  Get_All_Products,
  Get_Specific_Product,
  Delete_Product,
  Update_Product,
} from "../type";

export const GetAllProducts = (limit) => async (dispatch) => {
  try {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const res = await useGetData(`/api/v1/products?limit=${limit}`);
    dispatch({
      type: Get_All_Products,
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
export const GetAllProductsSearch = (Query) => async (dispatch) => {
  try {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const res = await useGetData(`/api/v1/products?${Query}`);
    dispatch({
      type: Get_All_Products,
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
export const GetAllProductsPages = (page) => async (dispatch) => {
  try {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const res = await useGetData(`/api/v1/products?page=${page}&limit=9`);
    dispatch({
      type: Get_All_Products,
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

export const GetSpecificProduct = (id) => async (dispatch) => {
  try {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const res = await useGetData(`/api/v1/products/${id}`);
    dispatch({
      type: Get_Specific_Product,
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
export const UpdateProduct = (id, formData) => async (dispatch) => {
  try {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const res = await useUpdateDataWithImage(
      `/api/v1/products/${id}`,
      formData
    );
    dispatch({
      type: Update_Product,
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
export const DeleteProduct = (id) => async (dispatch) => {
  try {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const res = await useDeleteData(`/api/v1/products/${id}`);
    dispatch({
      type: Delete_Product,
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
export const CreateProducts = (formData) => async (dispatch) => {
  try {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const res = await useInsertDataImage(`/api/v1/products`, formData);
    dispatch({
      type: Set_Products,
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
