import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  GetAllProducts,
  GetAllProductsPages,
} from "../../Redux/Actions/ProductsAction";

const AdminAllProductPageLogic = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetAllProducts(9));
  }, []);

  const allproducts = useSelector(
    (state) => state.ProductsReducer.allproducts.data
  );
  const PagenationResult = useSelector(
    (state) => state.ProductsReducer.allproducts.paginationResult
  );

  let items = [];
  if (allproducts) {
    items = allproducts;
  } else items = [];

  let pageCount = 0;
  if (PagenationResult) {
    pageCount = PagenationResult.numberOfPages;
  } else pageCount = 0;

  const onPress = async (page) => {
    await dispatch(GetAllProductsPages(page));
  };

  return [pageCount, onPress, items];
};

export default AdminAllProductPageLogic;
