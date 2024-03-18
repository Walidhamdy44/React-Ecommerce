import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allcatagory } from "../../Redux/Actions/catagoryAction";
import { useEffect } from "react";
import {
  ToastAlertError,
  ToastAlertSucses,
} from "../../components/utilty/ToastAlert";
import { CreateSubCatagory } from "../../Redux/Actions/SubCatagoryAction";
const AddSubcatagoryLogic = () => {
  const [name, setName] = useState("");
  const [id, setId] = useState("0");
  const [loading, setLoading] = useState(true);
  const [isPress, setIspress] = useState(false);

  // useDisPatch to active the Reducer >>> Action >>> allcatagory
  const disPatch = useDispatch();

  // Use UseEffect When the Commponamt Load  >> THe Reducer WIll start >> dispatch
  useEffect(() => {
    disPatch(allcatagory());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const catagory = useSelector((state) => state.allcatagory.catagory.data);
  // OnSelect Any Value of the dropdown >>
  const handelselect = (e) => {
    setId(e.target.value);
  };
  // HandelSubmit Button >>
  const handelSubmit = async (e) => {
    // check internet Connection After Connect to database >>
    // التاكد من حاله اتصال الانترنت قبل ارسال ريكوست الي السيرفر
    if (!navigator.onLine) {
      ToastAlertError("Check Your Connection !");
      return;
    }
    e.preventDefault();
    if (id === "0") {
      ToastAlertError("Select A Main Catagory");
      return;
    } else if (name === "" || Array.from(name).length < 5) {
      ToastAlertError("Enter Valid Name");
      return;
    } else {
      setLoading(true);
      setIspress(true);
      // استخدمنا async await
      // علشان الفنكشن تستني لحد م البياتات تتحمل وبعد كدا يدخل علي الكود الي بعده ..
      await disPatch(
        CreateSubCatagory({
          name: name,
          category: id,
        })
      );
      ToastAlertSucses("SubCatagory Created Succesffuly");
      // بعد م البياتات تتحمل حاله التحميل هتبقي true
      setLoading(false);
      setIspress(false);
    }
  };
  useEffect(() => {
    setName("");
  }, [loading]);
  // Return all data From The Componant To the page >>
  return [
    catagory,
    handelSubmit,
    handelselect,
    name,
    isPress,
    loading,
    setName,
  ];
};

export default AddSubcatagoryLogic;
