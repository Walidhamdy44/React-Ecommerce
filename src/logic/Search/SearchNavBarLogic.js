import { useState } from "react";
import HomeAllProductViewLogic from "../Products/HomeAllProductViewLogic";
import { useEffect } from "react";

const SearchNavBarLogic = () => {
  const [items1, items2, Search, word, sortData] = HomeAllProductViewLogic();
  const [searchWord, setSearchWord] = useState("");

  //
  let path = window.location.pathname;
  const onchangeSearch = (e) => {
    setSearchWord(e.target.value);
    localStorage.setItem("searchWord", e.target.value);

    if (path !== "/allproducts") {
      window.location.href = "/allproducts";
    }
  };

  useEffect(() => {
    // تاخير تحميل المنتجات المطابقه لكلمه البحث مجده 1 ثانيه
    //  حتي يتم تحميل جميع المنتجات بنجاح

    setTimeout(() => {
      Search();
    }, 600);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchWord]);

  return [searchWord, onchangeSearch];
};

export default SearchNavBarLogic;
