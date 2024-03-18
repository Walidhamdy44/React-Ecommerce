import baseUrl from "../Api/baseUrl";

export const useInsertDataImage = async (url, parmas) => {
  // set confige to get the image data from database ..
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };

  const res = await baseUrl.post(url, parmas, config);
  return res.data;
};

export const useInsertData = async (url, parmas) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };

  const res = await baseUrl.post(url, parmas, config);
  return res.data;
};
