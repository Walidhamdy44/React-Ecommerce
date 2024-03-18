import { useEffect } from "react";
import { allBrand, allBrandPage } from "../../Redux/Actions/BrandAction";
import { useDispatch, useSelector } from "react-redux";

const AllBrandPageLogic = () => {
  // useDisPatch to active the Reducer >>> Action >>> allcatagory
  const disPatch = useDispatch();

  // Use UseEffect When the Commponamt Load  >> THe Reducer WIll start >> dispatch
  useEffect(() => {
    disPatch(allBrand(6));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Use USESelector to Accsess to the state >>>

  const brand = useSelector((state) => state.allBrands.brand.data);
  //
  const paginationResult = useSelector(
    (state) => state.allBrands.brand.paginationResult
  );
  //
  const loading = useSelector((state) => state.allBrands.loading);
  // let pagecount = 0 >> to wait the page to load >>
  let pageCount = 0;
  // when page load >> pageCount = ???
  if (paginationResult) {
    pageCount = paginationResult.numberOfPages;
  }

  // Function will Sent as a Props To Paganition To manage Number of pages

  const onPress = (page) => {
    disPatch(allBrandPage(6, page));
  };

  return [loading, pageCount, onPress, brand];
};

export default AllBrandPageLogic;
