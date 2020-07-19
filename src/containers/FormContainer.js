import React from "react";
import Form from "../components/Form";
import { useDispatch } from "react-redux";
import { createComment } from "../store/modules/comments";

function FormContainer() {
  const dispatch = useDispatch();

  const createComment_Submit = (comment_NonHaveID) => {
    dispatch(createComment(comment_NonHaveID));
  };

  return <Form createComment_Submit={createComment_Submit} />;
}

export default React.memo(FormContainer);
