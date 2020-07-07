import axios from "axios";

const URL_COMMENTS = "http://localhost:4000/comments";

export const getComments = async () => {
  const response = await axios.get(URL_COMMENTS);

  return response.data;
};
