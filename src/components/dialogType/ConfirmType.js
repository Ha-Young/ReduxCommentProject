import React from "react";
import styled, { keyframes } from "styled-components";
import MyButton from "../MyButton";

const slideUp = keyframes`
  from {
    transform: translateY(200px);
  }
  to {
    transform: translateY(0px);
  }
`;

const ConfirmTypeBlock = styled.div`
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

function ConfirmType({ text, onConfirm, onCancel }) {
  return (
    <ConfirmTypeBlock>
      <h2>{text}</h2>
      <ButtonGroup>
        <MyButton color="gray" name="cancel" onClick={onCancel}>
          취소
        </MyButton>
        <MyButton color="#f03e3e" name="confirm" onClick={onConfirm}>
          삭제
        </MyButton>
      </ButtonGroup>
    </ConfirmTypeBlock>
  );
}

export default ConfirmType;
