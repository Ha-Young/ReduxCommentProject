import React, { useState } from "react";
import Comment from "../components/Comment";
import MyDialog from "../components/MyDialog";
import { deleteComment, updateComment } from "../store/modules/comments";
import { useDispatch } from "react-redux";

function CommentContainer({ comment }) {
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [updateOpen, setUpdateOpen] = useState(false);
  const [workComment, setWorkComment] = useState({});

  const dispatch = useDispatch();

  const onDeleteClick = (comment) => {
    setWorkComment({ ...comment });
    setDeleteOpen(!deleteOpen);
  };

  const onUpdateClick = (comment) => {
    setWorkComment({ ...comment });
    setUpdateOpen(!updateOpen);
  };

  const onDeleteConfirm = () => {
    console.log("deleteConfirm", workComment);
    dispatch(deleteComment(workComment.id));
    setDeleteOpen(false);
    setWorkComment({});
  };

  const onDeleteCancel = () => {
    setDeleteOpen(false);
    setWorkComment({});
  };

  const onUpdateConfirm = (newComment) => {
    dispatch(updateComment(newComment));
    setUpdateOpen(false);
    setWorkComment({});
  };

  const onUpdateCancel = () => {
    setUpdateOpen(false);
    setWorkComment({});
  };

  return (
    <>
      {deleteOpen && (
        <MyDialog
          type="remove"
          onConfirm={onDeleteConfirm}
          onCancel={onDeleteCancel}
        />
      )}

      {updateOpen && (
        <MyDialog
          type="update"
          onConfirm={onUpdateConfirm}
          onCancel={onUpdateCancel}
          updateObj={workComment}
          onRemoveConfirm={onDeleteConfirm}
          on
        />
      )}

      <Comment
        comment={comment}
        onDeleteClick={onDeleteClick}
        onUpdateClick={onUpdateClick}
      ></Comment>
    </>
  );
}

export default React.memo(CommentContainer);
