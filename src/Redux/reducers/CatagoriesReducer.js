import {
  Get_All_Catagories,
  Get_Error,
  Get_Specific_Catagory,
  Set_Catagory,
} from "../type";

const inital = {
  catagory: [],
  CatagoryDetails: [],
  loading: true,
};

const CatagoriesReducer = (state = inital, action) => {
  switch (action.type) {
    case Get_All_Catagories:
      return {
        ...state,
        catagory: action.payload,
        loading: false,
      };
    case Get_Error:
      return {
        catagory: action.payload,
        loading: true,
      };
    case Set_Catagory:
      return {
        catagory: action.payload,
        loading: false,
      };
    case Get_Specific_Catagory:
      return {
        CatagoryDetails: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default CatagoriesReducer;
