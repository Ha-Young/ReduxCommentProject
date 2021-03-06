import axios from "axios";

const URL_COMMENTS = "http://localhost:4000/comments/";

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

export const postComment = async (comment) => {
  axios.post(URL_COMMENTS, comment);
};

export const deleteComment = async (commentId) => {
  axios.delete(URL_COMMENTS + commentId);
};

export const putComment = async (comment) => {
  axios.put(URL_COMMENTS + comment.id, comment);
};
