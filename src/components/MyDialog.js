import React from "react";
import styled, { css } from "styled-components";

const DarkBackground = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.8);
`;

const DialogBlock = styled.div`
  width: 320px;
  padding: 1.5rem;
  background: white;
  border-radius: 2px;
  h3 {
    margin: 0;
    font-size: 1.5rem;
  }
  p {
    font-size: 1.125rem;
  }
`;

const ButtonGroup = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.div`
  background-color: #dee2e6;

  ${(props) =>
    props.cancle &&
    css`
      background-color: #f03e3e;
      color: white;
    `}

  ${(props) =>
    props.cancle &&
    css`
      background-color: #495057;
      color: white;
    `}
`;

function MyDialog({ title, children, confirmText, cancelText }) {
  return (
    <DarkBackground>
      <DialogBlock>
        <h3>{title}</h3>
        <p>{children}</p>
        <ButtonGroup>
          <Button cancle>{cancelText}</Button>
          <Button ok>{confirmText}</Button>
        </ButtonGroup>
      </DialogBlock>
    </DarkBackground>
  );
}

MyDialog.defaultProps = {
  confirmText: "확인",
  cancelText: "취소",
};

export default MyDialog;
