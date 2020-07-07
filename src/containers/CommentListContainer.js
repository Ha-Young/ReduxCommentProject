import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CommentList from "../components/CommentList";
import { getComments } from "../store/modules/comments";

function CommentListContainer() {
  const { loading, data, error } = useSelector(
    (state) => state.comments.comments
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getComments());
  }, [dispatch]);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>애러발생... {error}</div>;
  if (!data) return null;

  console.log("data:", data);

  return <CommentList comments={data} />;
}

export default CommentListContainer;
