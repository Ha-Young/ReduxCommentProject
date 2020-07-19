import React from "react";
import styled from "styled-components";

const CommentBlock = styled.div`
  padding: 7px 10px;
  text-align: left;

  & > img {
    vertical-align: middle;
    margin-right: 10px;
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }
`;

const CreatedAt = styled.div`
  float: right;
  vertical-align: middle;
`;

const Content = styled.div`
  margin: 10px 0;
`;

const Button = styled.span`
  margin-right: 10px;
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  border: 1px solid lightgray;
  cursor: pointer;
  &:hover {
    background-color: lightgray;
  }
`;

const Buttons = styled.div`
  text-align: right;
  margin: 10px 0;
`;

function Comment({ comment, onUpdateClick, onDeleteClick }) {
  return (
    <CommentBlock>
      <img src={comment.profile_url} alt="" />

      {comment.author}

      <CreatedAt>{comment.createdAt}</CreatedAt>

      <Content>{comment.content}</Content>

      <Buttons>
        <Button onClick={() => onUpdateClick(comment)}>수정</Button>
        <Button onClick={() => onDeleteClick(comment)}>삭제</Button>
      </Buttons>

      <hr />
    </CommentBlock>
  );
}

export default Comment;
