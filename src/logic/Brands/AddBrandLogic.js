import { useEffect, useState } from "react";
import brand from "../../images/avatar.png";
import { useDispatch } from "react-redux";
import { CreateBrand } from "../../Redux/Actions/BrandAction";
import {
  ToastAlertError,
  ToastAlertSucses,
} from "../../components/utilty/ToastAlert";

const AddBrandLogic = () => {
  // dispatch for the action Create Catagory >>
  const dispatch = useDispatch();

  // use state to store the imge to Change it and send it to the database
  const [img, setImg] = useState(brand);

  // use state to store the Name in the input to send it to the database
  const [name, setName] = useState("");

  // use state to store the image to the formData
  const [SelectedFile, setSelectedFile] = useState(null);

  // use state Restore the imge to the orignalimge After loading and the name  >>
  const [loading, setLoading] = useState(true);

  // use state to know if the user press on the button or not >>
  const [isPress, setIspress] = useState(false);

  // OnChange Image >>

  const onimageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      // set new imge >>
      setImg(URL.createObjectURL(e.target.files[0]));
      // تخزين ال File   نفسه لاستخدامه في تحميل ال data  من الجهاز
      setSelectedFile(e.target.files[0]);
    }
  };
  // OnChange name >>

  const OnchangeName = (e) => {
    setName(e.target.value);
  };
  // OnChange name >>

  const handelSubmit = async (e) => {
    // check internet Connection After Connect to database >>
    // التاكد من حاله اتصال الانترنت قبل ارسال ريكوست الي السيرفر
    if (!navigator.onLine) {
      ToastAlertError("Check Your Connection !");
      return;
    }
    // Validation >>
    if (name === "" || SelectedFile === null) {
      ToastAlertError("Please Select file ,enter name");
    } else {
      // Craete Object From Class FormData >>
      // to send the data >>
      const formData = new FormData();
      formData.append("name", name);
      formData.append("image", SelectedFile);
      // قبل م البياتات تتحمل حاله التحميل هتبقي false
      setLoading(true);
      setIspress(true);
      // استخدمنا async await
      // علشان الفنكشن تستني لحد م البياتات تتحمل وبعد كدا يدخل علي الكود الي بعده ..
      await dispatch(CreateBrand(formData));
      // بعد م البياتات تتحمل حاله التحميل هتبقي true
      setLoading(false);
      setIspress(false);
      // Toast style >>
      ToastAlertSucses("Brand Add Succesfully");
    }
  };
  // Use Effect  لتغيير حاله العناصر بالنسبه لل loading >>
  useEffect(() => {
    if (!loading) {
      setImg(brand);
      setName("");
      setLoading(false);
      setSelectedFile(null);
    }
  }, [loading]);

  // Return To The AdminNewCatagory >>
  return [
    img,
    name,
    loading,
    isPress,
    onimageChange,
    OnchangeName,
    handelSubmit,
  ];
};

export default AddBrandLogic;
