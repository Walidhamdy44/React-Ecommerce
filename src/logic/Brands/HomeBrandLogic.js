import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allBrand } from "../../Redux/Actions/BrandAction";

const HomeBrandLogic = () => {
  // useDisPatch to active the Reducer >>> Action >>> allBrand
  const disPatch = useDispatch();

  // Use UseEffect When the Commponamt Load  >> THe Reducer WIll start >> dispatch
  useEffect(() => {
    disPatch(allBrand());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Use USESelector to Accsess to the state >>>

  const brand = useSelector((state) => state.allBrands.brand.data);
  const loading = useSelector((state) => state.allBrands.loading);

  //
  return [loading, brand];
};

export default HomeBrandLogic;
