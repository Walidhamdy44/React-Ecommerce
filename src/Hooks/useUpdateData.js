import baseUrl from "../Api/baseUrl";

const useUpdateData = async (url, parmas) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const res = await baseUrl.put(url, parmas, config);
  return res.data;
};

const useUpdateDataWithImage = async (url, parmas) => {
  // set confige to get the image data from database ..
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };

  const res = await baseUrl.put(url, parmas, config);

  return res.data;
};

export { useUpdateData, useUpdateDataWithImage };
