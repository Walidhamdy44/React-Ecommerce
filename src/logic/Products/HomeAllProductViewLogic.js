import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllProductsSearch } from "../../Redux/Actions/ProductsAction";

const HomeAllProductViewLogic = () => {
  let limit = 9;
  const dispatch = useDispatch();

  let word = "";
  let queryBrand = "";
  let queryCat = "";
  let pricefrom = 0;
  let priceto = 0;
  if (localStorage.getItem("searchWord") != null) {
    word = localStorage.getItem("searchWord");
  }

  if (localStorage.getItem("queryCat") !== null) {
    queryCat = localStorage.getItem("queryCat");
  }

  if (localStorage.getItem("queryBrand") != null) {
    queryBrand = localStorage.getItem("queryBrand");
  }

  if (localStorage.getItem("priceFrom") != null) {
    pricefrom = localStorage.getItem("priceFrom");
  }
  if (localStorage.getItem("priceTo") != null) {
    priceto = localStorage.getItem("priceTo");
  }

  //

  // handel Select price input >>
  let priceFromString = "";
  let priceToString = "";

  if (pricefrom === "" || pricefrom <= 0) {
    priceFromString = "";
  } else {
    priceFromString = `&price[gte]=${pricefrom}`;
  }

  if (priceto === "" || priceto <= 0) {
    priceToString = "";
  } else {
    priceToString = `&price[lte]=${priceto}`;
  }

  const Search = async () => {
    sortData();
    await dispatch(
      GetAllProductsSearch(
        `limit=${limit}&keyword=${word}&sort=${sort}${priceFromString}
        ${priceToString}&${queryBrand}&${queryCat}`
      )
    );
  };

  useEffect(() => {
    Search();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const allproducts = useSelector((state) => state.ProductsReducer.allproducts);

  // for most view items >>
  let items1 = [];
  if (allproducts.data) {
    items1 = allproducts.data.slice(0, 4);
  } else items1 = [];
  // for most Search items >>
  let items2 = [];
  if (allproducts.data) {
    items2 = allproducts.data.slice(3, 7);
  } else items2 = [];

  let sortType = "";
  let sort = "";

  const sortData = () => {
    if (localStorage.getItem("sortType") !== null) {
      sortType = localStorage.getItem("sortType");
    } else {
      sortType = "";
    }
    if (sortType === "Most sales") {
      sort = "+sold";
    } else if (sortType === "Price Acourding") {
      sort = "+price";
    } else if (sortType === "Price Decording") {
      sort = "-price";
    } else if (sortType === "Higher Rating") {
      sort = "+quantity";
    }
  };

  //
  return [items1, items2, Search, word, sortData];
};

export default HomeAllProductViewLogic;
