import axios from "axios";

const URL_COMMENTS = "http://localhost:4000/comments";

export const getComments = async () => {
  const response = await axios.get(URL_COMMENTS);

  return response.data;
};

export const getComments_Pagenation = async (currentPage, limit) => {
  const response = await axios.get(
    URL_COMMENTS + `?_page=${currentPage}&_limit=${limit}&_order=desc&_sort=id`
  );

  return response.data;
};
