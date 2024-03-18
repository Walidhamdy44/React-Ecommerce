import {
  allcatagory,
  allcatagoryPages,
} from "../../Redux/Actions/catagoryAction";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const AllCatgoryPageLogic = () => {
  // useDisPatch to active the Reducer >>> Action >>> allcatagory
  const disPatch = useDispatch();

  // Use UseEffect When the Commponamt Load  >> THe Reducer WIll start >> dispatch
  useEffect(() => {
    disPatch(allcatagory(10));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Array of Colors For BackGround
  const colors = [
    "#d6338430",
    "#ffc10770",
    "#0dcaf03d",
    "#dc35453d",
    "#19875470",
    "#0551609c",
    "#3c05605e",
  ];

  // Use USESelector to Accsess to the state >>>

  const catagory = useSelector((state) => state.allcatagory.catagory.data);
  //
  const paginationResult = useSelector(
    (state) => state.allcatagory.catagory.paginationResult
  );
  //
  const loading = useSelector((state) => state.allcatagory.loading);
  // let pagecount = 0 >> to wait the page to load >>
  let pageCount = 0;
  // when page load >> pageCount = ???
  if (paginationResult) {
    pageCount = paginationResult.numberOfPages;
  }

  // Function will Sent as a Props To Paganition To manage Number of pages

  const onPress = (page) => {
    disPatch(allcatagoryPages(10, page));
  };

  return [loading, pageCount, onPress, catagory, colors];
};

export default AllCatgoryPageLogic;
