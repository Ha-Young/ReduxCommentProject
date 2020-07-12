import React from "react";
import styled from "styled-components";
import useInputs from "../customHooks/useInputs";

const FormStyle = styled.div`
  & > form {
    padding: 0 10px;
    margin-bottom: 50px;
  }

  & > form > textarea {
    padding: 5px 1%;
    width: 98%;
    height: 50px;
  }

  & > form > input {
    padding: 5px 1%;
    width: 98%;
    margin-bottom: 10px;
  }

  & > form > button {
    padding: 0.375rem 0.75rem;
    border-radius: 0.25rem;
    border: 1px solid lightgray;
    cursor: pointer;
  }
`;

function Form({ createComment_Submit }) {
  const [form, onChange, reset] = useInputs({
    profile_url: "",
    author: "",
    content: "",
  });

  const { profile_url, author, content } = form;
  const currentDate = new Date().toISOString().split("T")[0];

  const onSubmit = (e) => {
    e.preventDefault();

    const comment_nonHaveId = {
      profile_url,
      author,
      content,
    };
    createComment_Submit(comment_nonHaveId);
    reset();
  };

  return (
    <FormStyle>
      <form onSubmit={onSubmit}>
        <input
          name="profile_url"
          placeholder="https://picsum.photos/id/1/50/50"
          required
          value={profile_url}
          onChange={onChange}
        />
        <br />
        <input
          name="author"
          placeholder="작성자"
          value={author}
          onChange={onChange}
        />
        <br />
        <textarea
          name="content"
          placeholder="내용"
          required
          value={content}
          onChange={onChange}
        ></textarea>
        <br />
        <input
          type="text"
          name="createdAt"
          placeholder={currentDate}
          value={currentDate}
          required
          disabled
        />
        <br />
        <button type="submit">등록</button>
      </form>
    </FormStyle>
  );
}

export default Form;
