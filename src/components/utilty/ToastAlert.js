import toast from "react-hot-toast";

export const ToastAlertSucses = (msg) => {
  toast.success(msg, {
    style: {
      border: "2px solid #20c997",
      padding: "16px",
      color: "#fff",
      backgroundColor: "#52d699",
    },
    iconTheme: {
      primary: "#198754",
      secondary: "#FFF",
      style: {
        border: "1px solid #fff",
      },
    },
  });
};
export const ToastAlertError = (msg) => {
  toast.error(msg);
};
