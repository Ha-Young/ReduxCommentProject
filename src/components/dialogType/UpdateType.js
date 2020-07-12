import React, { useCallback } from "react";
import styled, { keyframes } from "styled-components";
import MyButton from "../MyButton";
import useInputs from "../../customHooks/useInputs";

const slideUp = keyframes`
  from {
    transform: translateY(200px);
  }
  to {
    transform: translateY(0px);
  }
`;

const UpdateTypeBlock = styled.div`
  width: 320px;
  padding: 1.5rem;
  background: white;
  border-radius: 2px;

  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-name: ${slideUp};
  animation-fill-mode: forwards;
`;

const ButtonGroup = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: flex-end;
`;

const Input = styled.textarea`
  padding: 5px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  height: 10rem;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
  margin-bottom: 20px;
`;

function UpdateType({ onConfirm, onCancel, updateObj }) {
  const initialContent = updateObj ? updateObj.content : "";

  const [form, onChange, reset] = useInputs({
    content: initialContent,
  });
  const { content } = form;

  const clickHandler = useCallback(
    (e) => {
      if (e.target.name === "confirm") {
        const updateComment = {
          ...updateObj,
          content,
        };
        onConfirm(updateComment);
      } else {
        onCancel();
      }
      reset();
    },
    [onCancel, onConfirm, reset, content, updateObj]
  );

  return (
    <UpdateTypeBlock>
      <h2>댓글 수정</h2>
      <h3>내용</h3>
      <Input autoFocus name="content" value={content} onChange={onChange} />
      <ButtonGroup>
        <MyButton color="gray" name="cancel" onClick={clickHandler}>
          취소
        </MyButton>
        <MyButton name="confirm" onClick={clickHandler}>
          수정
        </MyButton>
      </ButtonGroup>
    </UpdateTypeBlock>
  );
}

export default React.memo(UpdateType);
