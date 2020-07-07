import * as commentsApi from "../../api/comments";

const GET_COMMENTS = "comments/GET_COMMENTS";
const GET_COMMENTS_SUCCESS = "comments/GET_COMMENTS_SUCCESS";
const GET_COMMENTS_ERROR = "comments/GET_COMMENTS_ERROR";

const CREATE_COMMENT = "comment/CREATE_COMMENT";
const UPDATE_COMMENT = "comment/UPDATE_COMMENT";
const DELETE_COMMENT = "comment/DELETE_COMMENT";

export const getComments = () => async (dispatch) => {
  dispatch({ type: GET_COMMENTS }); // 요청 시작
  try {
    const comments = await commentsApi.getComments(); // API 호출
    dispatch({ type: GET_COMMENTS_SUCCESS, comments }); // 성공
  } catch (error) {
    dispatch({ type: GET_COMMENTS_ERROR, error }); // 애러
  }
};

export const initialState = {
  posts: {
    loading: false,
    data: null,
    error: null,
  },
};

export default function comments(state = initialState, action) {
  switch (action.type) {
    case GET_COMMENTS:
      return {
        ...state,
        loading: true,
        data: null,
        error: null,
      };
    case GET_COMMENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.comments,
        error: null,
      };
    case GET_COMMENTS_ERROR:
      return {
        ...state,
        loading: false,
        data: null,
        error: action.error,
      };
    default:
      return state;
  }
}
