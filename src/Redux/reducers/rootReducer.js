import { combineReducers } from "redux";
import CatagoriesReducer from "./CatagoriesReducer";
import BrandReducer from "./BrandReducer";
import SubCatagoryReducer from "./SubCatagoryReducer";
import ProductsReducer from "./ProductsReducer";
import AuthReducer from "./AuthReducer";

export default combineReducers({
  allcatagory: CatagoriesReducer,
  allBrands: BrandReducer,
  SubCatagoryReducer: SubCatagoryReducer,
  ProductsReducer: ProductsReducer,
  AuthReducer: AuthReducer,
});
