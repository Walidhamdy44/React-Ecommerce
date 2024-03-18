import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allcatagory } from "../../Redux/Actions/catagoryAction";
import { allBrand } from "../../Redux/Actions/BrandAction";
import HomeAllProductViewLogic from "../Products/HomeAllProductViewLogic";

const SideBarFilterLogic = () => {
  const [items1, items2, Search, word, sortData] = HomeAllProductViewLogic();

  const dispatch = useDispatch();

  useEffect(() => {
    const run = async () => {
      await dispatch(allcatagory());
      await dispatch(allBrand());
    };
    run();
  }, []);

  const catagory = useSelector((state) => state.allcatagory.catagory.data);
  const brand = useSelector((state) => state.allBrands.brand.data);

  // state to store the data to use it in retreve data form database >>
  const [selectedCat, setSelectedCat] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState([]);

  //

  var queryCat;

  // handle select Category
  const handleSelectCata = (e) => {
    let val = e.target.value;
    if (val === "0") {
      setSelectedCat([]);
    } else {
      if (e.target.checked === true) {
        setSelectedCat([...selectedCat, val]);
      } else if (e.target.checked === false) {
        let newArray = selectedCat.filter((e) => e !== val);
        setSelectedCat(newArray);
      }
    }
  };

  useEffect(() => {
    queryCat = selectedCat.map((value) => "category[in][]=" + value).join("&");
    localStorage.setItem("queryCat", queryCat);

    Search();
  }, [selectedCat]);

  var queryBrand;

  // handl barand select >>
  const handleSelectBrand = (e) => {
    let val = e.target.value;
    if (val === "00") {
      setSelectedBrand([]);
    } else {
      if (e.target.checked === true) {
        setSelectedBrand([...selectedBrand, val]);
      } else if (e.target.checked === false) {
        let newArray1 = selectedBrand.filter((e) => e !== val);
        setSelectedBrand(newArray1);
      }
    }
  };

  //

  useEffect(() => {
    queryBrand = selectedBrand.map((value) => "brand[in][]=" + value).join("&");
    localStorage.setItem("querybrand", queryBrand);

    Search();
  }, [selectedBrand]);

  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(0);

  const priceFrom = (e) => {
    localStorage.setItem("priceFrom", e.target.value);
    setFrom(e.target.value);
  };
  const priceTo = (e) => {
    localStorage.setItem("priceTo", e.target.value);
    setTo(e.target.value);
  };

  useEffect(() => {
    setTimeout(() => {
      Search();
    }, 1000);
  }, [from, to]);

  return [
    catagory,
    brand,
    handleSelectCata,
    handleSelectBrand,
    priceFrom,
    priceTo,
  ];
};

export default SideBarFilterLogic;
