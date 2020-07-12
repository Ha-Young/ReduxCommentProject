import React, { useState } from "react";
import Comment from "../components/Comment";
import MyDialog from "../components/MyDialog";

function CommentContainer({ comment }) {
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [updateOpen, setUpdateOpen] = useState(false);
  const [workComment, setWorkComment] = useState({});

  const onDeleteClick = (comment) => {
    setWorkComment({ ...comment });
    setDeleteOpen(!deleteOpen);
  };

  const onUpdateClick = (comment) => {
    setWorkComment({ ...comment });
    setUpdateOpen(!updateOpen);
  };

  const onRemoveConfirm = () => {};

  const onRemoveCancel = () => {};

  const onUpdateConfirm = () => {};

  const onUpdateCancel = () => {};

  return (
    <>
      {deleteOpen && (
        <MyDialog
          type="remove"
          onConfirm={onRemoveConfirm}
          onCancel={onRemoveCancel}
        />
      )}

      {updateOpen && (
        <MyDialog
          type="update"
          onConfirm={onUpdateConfirm}
          onCancel={onUpdateCancel}
          updateObj={workComment}
        />
      )}
      <Comment comment={comment}></Comment>
    </>
  );
}

export default CommentContainer;
