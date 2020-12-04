/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component, useState } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import Comment from "./Comment";
import Posting from "../Posting/Posting";

const Community = () => {
  const [state, setState] = useState([]);
  const [modalSwitch, setModalSwitch] = useState(false);

  const goToPosting = () => {
    setModalSwitch(!modalSwitch);
  };

  const handleChange = (_, inputValue) => {
    const getComments = [...state];
    getComments.push(inputValue);
    setState(getComments);
    setModalSwitch(!modalSwitch);
  };

  return (
    <>
      <Header>
        <h1>
          <a name="community">커뮤니티</a>
        </h1>
        <p>1개의 글</p>
        <Button onClick={goToPosting}>글 작성하기</Button>
      </Header>
      {modalSwitch ? (
        <PostingBox>
          <Posting take={(e, inputValue) => handleChange(e, inputValue)} />
        </PostingBox>
      ) : null}

      <Comment give={state} />
    </>
  );
};

export default withRouter(Community);

const Header = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  position: relative;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 24px;
  padding: 48px 0 24px 0;

  h1 {
    font-size: 24px;
    font-weight: bold;
    line-height: 34px;
    letter-spacing: -0.4px;
    margin-right: 20px;
  }

  p {
    display: inline-block;
    font-size: 14px;
    line-height: 24px;
    color: rgb(168, 174, 179);
  }
`;

const PostingBox = styled.div`
  position: Fixed;
  top: 0;
  left: 0;
`;

const Button = styled.button`
  position: absolute;
  right: 0;
  color: rgb(237, 239, 240);
  background-color: rgb(62, 64, 66);
  width: 100px;
  height: 40px;
  border-radius: 10px;
  outline-style: none;

  &:hover {
    transform: scale(1.05);
    transition: 0.2s;
    cursor: pointer;
  }
`;
