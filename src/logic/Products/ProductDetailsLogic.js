import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetSpecificProduct } from "../../Redux/Actions/ProductsAction";
import { GetSpecificCatagory } from "../../Redux/Actions/catagoryAction";
import mobile from "../../images/mobile.png";
const ProductDetailsLogic = (id) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetSpecificProduct(id));
  }, []);
  const productDetails = useSelector(
    (state) => state.ProductsReducer.productDetails.data
  );

  // Get One Product >>

  let item = [];
  if (productDetails) {
    item = productDetails;
  } else {
    item = [];
  }

  const CatagoryDetails = useSelector(
    (state) => state.allcatagory.CatagoryDetails.data
  );
  //
  useEffect(() => {
    if (CatagoryDetails) {
      dispatch(GetSpecificCatagory(item.category));
    }
  }, [item]);

  let cat = [];
  if (CatagoryDetails) {
    cat = CatagoryDetails;
  } else {
    cat = [];
  }

  // product Detail Galllary Logic  >>>
  let images = [];
  if (item.images) {
    images = item.images.map((img) => {
      return { original: img };
    });
  } else {
    images = [{ original: `${mobile}` }];
  }

  return [item, images, cat];
};

export default ProductDetailsLogic;
