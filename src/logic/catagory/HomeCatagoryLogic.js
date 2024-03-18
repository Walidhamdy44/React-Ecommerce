import { useEffect } from "react";
import { allcatagory } from "../../Redux/Actions/catagoryAction";
import { useDispatch, useSelector } from "react-redux";
const HomeCatagoryLogic = () => {
  // useDisPatch to active the Reducer >>> Action >>> allcatagory
  const disPatch = useDispatch();

  // Use UseEffect When the Commponamt Load  >> THe Reducer WIll start >> dispatch
  useEffect(() => {
    disPatch(allcatagory());
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
  const loading = useSelector((state) => state.allcatagory.loading);

  //
  return [loading, catagory, colors];
};

export default HomeCatagoryLogic;
