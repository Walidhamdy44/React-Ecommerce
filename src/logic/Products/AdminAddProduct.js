import { useState } from "react";
import { useEffect } from "react";
import { allcatagory } from "../../Redux/Actions/catagoryAction";
import { useDispatch, useSelector } from "react-redux";
import { allBrand } from "../../Redux/Actions/BrandAction";
import { GetSubCatagory } from "../../Redux/Actions/SubCatagoryAction";
import { CreateProducts } from "../../Redux/Actions/ProductsAction";
import {
  ToastAlertError,
  ToastAlertSucses,
} from "../../components/utilty/ToastAlert";

const AdminAddProduct = () => {
  // start Get Data From DataBase >>
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allcatagory());
    dispatch(allBrand());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const catagory = useSelector((state) => state.allcatagory.catagory.data);
  // Select Sub Catagory Component >>
  const brand = useSelector((state) => state.allBrands.brand.data);

  const subCat = useSelector(
    (state) => state.SubCatagoryReducer.subcatagory.data
  );
  // OnSelect Any Value of the dropdown >>

  const handelselectCat = async (e) => {
    if (e.target.value !== 0) {
      await dispatch(GetSubCatagory(e.target.value));
    }
    setCatId(e.target.value);
  };
  const handelselectBrand = (e) => {
    setBrandId(e.target.value);
  };

  // end get data from database

  // Handel Color Picker >>
  const [showColor, setShowColor] = useState(false);
  const [colors, setColors] = useState([]);

  const handleSelectColor = (color) => {
    setColors([...colors, color.hex]);
    setShowColor(!showColor);
  };
  const removeColor = (item) => {
    const newColors = colors.filter((e) => e !== item);
    setColors(newColors);
  };
  //

  const onSelect = (selectedList) => {
    setSelectedSubCatID(selectedList);
  };

  const onRemove = (selectedList) => {
    setSelectedSubCatID(selectedList);
  };
  //

  // manage all state >>
  const [images, setImages] = useState({});
  const [proName, setProName] = useState("");
  const [proDesc, setProDesc] = useState("");
  const [Qty, setQty] = useState("Quantety are avalible");
  const [priceBefore, setPriceBefore] = useState("Price Before Sale");
  const [priceAfter, setPriceAfter] = useState(" Price Before Sale");
  const [catId, setCatId] = useState("");
  const [selectedsubCatID, setSelectedSubCatID] = useState([]);
  const [brandId, setBrandId] = useState("");
  const [options, setOption] = useState([]);
  // use state Restore the imge to the orignalimge After loading and the name  >>
  const [loading, setLoading] = useState(true);
  // use state to know if the user press on the button or not >>
  const [isPress, setIspress] = useState(false);

  //
  useEffect(() => {
    if (catId !== 0) {
      if (subCat) {
        setOption(subCat);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [catId]);
  //

  // function to convert the base 64 to imge >> search on google for it >>

  function dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[arr.length - 1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  }

  // Handle Send data tio database and Create Product >>

  const handleSendData = async (e) => {
    e.preventDefault();

    // start Validation >>

    if (proName === "" || proDesc === "" || priceBefore <= 0 || catId === "") {
      ToastAlertError("Please Fill out The Fild");
      return;
    } else {
      const imgCover = dataURLtoFile(images[0], Math.random() + ".png");

      const newImages = Array.from(
        Array(Object.keys(images).length).keys()
      ).map((item, index) => {
        return dataURLtoFile(images[index], Math.random() + ".png");
      });

      const formData = new FormData();
      formData.append("title", proName);
      formData.append("description", proDesc);
      formData.append("category", catId);
      formData.append("imageCover", imgCover);
      formData.append("quantity", Qty);
      formData.append("price", priceBefore);
      // formData.append("brand", brandId);

      // to send array in formData You must map >> in all arrays >>
      colors.map((color) => formData.append("availableColors", color));

      selectedsubCatID.map((sub) => formData.append("subcategory", sub._id));

      newImages.map((item) => formData.append("images", item));

      setLoading(true);
      setIspress(true);
      //
      await dispatch(CreateProducts(formData));
      ToastAlertSucses("Created Sucsessfully");
      setIspress(false);
      setLoading(false);
    }

    window.location.reload();
  };
  useEffect(() => {
    if (!loading) {
      setIspress(false);
      setLoading(false);

      setColors([]);
      setProName("");
      setProDesc("");
      setImages([]);
      setSelectedSubCatID([]);
      setPriceAfter("Price Before Sale");
      setPriceBefore("Price After Sale");
      setQty("Quantety are avalible");
    }
  }, [loading]);

  // retur ?>>>

  return [
    images,
    colors,
    setImages,
    setPriceAfter,
    setPriceBefore,
    setProName,
    setProDesc,
    setQty,
    setShowColor,
    handleSendData,
    handelselectBrand,
    handleSelectColor,
    handelselectCat,
    loading,
    priceAfter,
    isPress,
    options,
    onRemove,
    onSelect,
    removeColor,
    catagory,
    brand,
    proName,
    proDesc,
    Qty,
    priceBefore,
    showColor,
  ];
};

export default AdminAddProduct;
