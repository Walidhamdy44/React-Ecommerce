import {
  Delete_Product,
  Get_All_Products,
  Get_Error,
  Get_Specific_Product,
  Set_Products,
  Update_Product,
} from "../type";

const inital = {
  products: [],
  loading: true,
  allproducts: [],
  productDetails: [],
  Deleteproduct: [],
  updateProduct: [],
};

const ProductsReducer = (state = inital, action) => {
  switch (action.type) {
    case Get_Error:
      return {
        products: action.payload,
        loading: true,
      };
    case Set_Products:
      return {
        products: action.payload,
        loading: false,
      };
    case Get_All_Products:
      return {
        ...state,
        allproducts: action.payload,
        loading: false,
      };
    case Update_Product:
      return {
        updateProduct: action.payload,
        loading: false,
      };

    case Delete_Product:
      return {
        Deleteproduct: action.payload,
        loading: false,
      };
    case Get_Specific_Product:
      return {
        ...state,
        productDetails: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default ProductsReducer;
