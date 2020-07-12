import React from "react";
import styled from "styled-components";
import CommentContainer from "../containers/CommentContainer";

const CommentListBlock = styled.div``;

function CommentList({ comments }) {
  return (
    <CommentListBlock>
      {comments.map((comment) => (
        <CommentContainer key={comment.id} comment={comment} />
      ))}
    </CommentListBlock>
  );
}

export default CommentList;
