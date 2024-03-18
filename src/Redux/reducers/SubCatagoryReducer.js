import { Get_Error, Set_Sub_Catagory, Get_Sub_Catagory } from "../type";

const inital = {
  subcatagory: [],
  loading: true,
};

const SubCatagoryReducer = (state = inital, action) => {
  switch (action.type) {
    case Get_Error:
      return {
        subcatagory: action.payload,
        loading: true,
      };
    case Set_Sub_Catagory:
      return {
        subcatagory: action.payload,
        loading: false,
      };
    case Get_Sub_Catagory:
      return {
        subcatagory: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default SubCatagoryReducer;
