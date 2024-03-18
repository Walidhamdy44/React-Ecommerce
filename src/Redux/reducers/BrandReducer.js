import { Get_All_Brands, Get_Error, Set_Brand } from "../type";

const inital = {
  brand: [],
  loading: true,
};

const BrandReducer = (state = inital, action) => {
  switch (action.type) {
    case Get_All_Brands:
      return {
        ...state,
        brand: action.payload,
        loading: false,
      };
    case Get_Error:
      return {
        brand: action.payload,
        loading: true,
      };
    case Set_Brand:
      return {
        brand: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default BrandReducer;
