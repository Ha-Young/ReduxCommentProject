import * as commentsApi from "../../api/comments";

const GET_COMMENTS = "comments/GET_COMMENTS";
const GET_COMMENTS_SUCCESS = "comments/GET_COMMENTS_SUCCESS";
const GET_COMMENTS_ERROR = "comments/GET_COMMENTS_ERROR";

const SET_PAGENATION = "page/SET_PAGENATION";
const SET_PAGE = "page/SET_PAGE";

const CREATE_COMMENT = "comment/CREATE_COMMENT";
const UPDATE_COMMENT = "comment/UPDATE_COMMENT";
const DELETE_COMMENT = "comment/DELETE_COMMENT";

// page객체를 만드는 함수
const makePage = (
  currentPage = 1,
  pageCount = 1,
  minimumPage = 1,
  maximumPage = 1
) => {
  return {
    currentPage,
    pageCount,
    minimumPage,
    maximumPage,
  };
};

export const setPagenation = () => async (dispatch, getState) => {
  dispatch({ type: SET_PAGENATION, page: makePage() }); // 페이지네이션 초기화
  try {
    const comments = await commentsApi.getComments(); // API 호출

    // 페이지 개수 구하기
    const pageCount = Math.floor(
      (comments.length - 1) / getState().comments.pageInfo.limit + 1
    );
    const maximumPage = pageCount;

    dispatch({
      type: SET_PAGENATION,
      page: makePage(1, pageCount, 1, maximumPage),
    });
  } catch (error) {
    throw new Error(`set Pagenation Error : ${error.message}`);
  }
};

export const setPage = (page) => async (dispatch, getState) => {
  dispatch({
    type: SET_PAGE,
    currentPage: page,
  });
};

export const getComments = () => async (dispatch, getState) => {
  dispatch({ type: GET_COMMENTS }); // 요청 시작

  try {
    const currentPage = getState().comments.pageInfo.page.currentPage;
    const limit = getState().comments.pageInfo.limit;
    const comments = await commentsApi.getComments_Pagenation(
      currentPage,
      limit
    ); // API 호출
    dispatch({ type: GET_COMMENTS_SUCCESS, comments }); // 성공
  } catch (error) {
    dispatch({ type: GET_COMMENTS_ERROR, error }); // 애러
  }
};

export const initialState = {
  comments: {
    loading: false,
    data: null,
    error: null,
  },
  pageInfo: {
    limit: 4,
    page: {
      pageCount: 1,
      currentPage: 1,
      minimumPage: 1,
      maximumPage: 1,
    },
  },
};

export default function comments(state = initialState, action) {
  switch (action.type) {
    case GET_COMMENTS:
      return {
        ...state,
        comments: {
          loading: true,
          data: null,
          error: null,
        },
      };
    case GET_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: {
          loading: false,
          data: action.comments,
          error: null,
        },
      };
    case GET_COMMENTS_ERROR:
      return {
        ...state,
        comments: {
          loading: false,
          data: null,
          error: action.error,
        },
      };
    case SET_PAGENATION:
      return {
        ...state,
        pageInfo: {
          ...state.pageInfo,
          page: action.page,
        },
      };
    case SET_PAGE:
      return {
        ...state,
        pageInfo: {
          ...state.pageInfo,
          page: {
            ...state.pageInfo.page,
            currentPage: action.currentPage,
          },
        },
      };
    default:
      return state;
  }
}
