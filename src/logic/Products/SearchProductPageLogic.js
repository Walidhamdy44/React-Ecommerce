import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  GetAllProducts,
  GetAllProductsPages,
} from "../../Redux/Actions/ProductsAction";

const SearchProductPageLogic = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetAllProducts(9));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const allproducts = useSelector(
    (state) => state.ProductsReducer.allproducts.data
  );
  const allproductsPaganition = useSelector(
    (state) => state.ProductsReducer.allproducts.paginationResult
  );

  const numberOfProducts = useSelector(
    (state) => state.ProductsReducer.allproducts.results
  );
  // for most view items >>
  let items = [];
  if (allproducts) {
    items = allproducts;
  } else items = [];

  const onPress = (page) => {
    dispatch(GetAllProductsPages(page));
  };
  let pageCount = 0;
  if (allproductsPaganition) pageCount = allproductsPaganition.numberOfPages;
  //
  return [items, onPress, numberOfProducts, pageCount];
};

export default SearchProductPageLogic;
