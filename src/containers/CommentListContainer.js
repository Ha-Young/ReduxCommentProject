import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CommentList from "../components/CommentList";
import { getComments } from "../store/modules/comments";

function CommentListContainer() {
  const {
    comments: { loading, data, error },
    pageInfo: {
      page: { currentPage },
    },
  } = useSelector((state) => state.comments);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getComments());
  }, [dispatch, currentPage]);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>애러발생... {error}</div>;
  if (!data) return null;

  return <CommentList comments={data} />;
}

export default CommentListContainer;
