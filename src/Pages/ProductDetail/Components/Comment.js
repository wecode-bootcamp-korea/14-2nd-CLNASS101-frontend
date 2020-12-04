import React, { Component, useEffect, useState } from "react";
import styled from "styled-components";
import CommentInput from "./CommentInput";

const Comment = (props) => {
  return (
    <WrapComment>
      <Profile>
        <Img src="" />
        <UserName></UserName>
      </Profile>
      {props.give.map((ele) => (
        <>
          <Profile>
            <Img src="/images/SH/myProfile.png" />
            <UserName>영준</UserName>
          </Profile>
          <CommentLists>
            <div>{ele}</div>
          </CommentLists>
        </>
      ))}
      <CommentInputs>
        <CommentInput />
      </CommentInputs>
    </WrapComment>
  );
};

export default Comment;

const WrapComment = styled.div`
  display: column;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Img = styled.img`
  width: 38px;
  margin-right: 10px;
  border-radius: 100%;
`;

const UserName = styled.div`
  font-size: 11px;
  font-weight: bold;
  line-height: 16px;
  letter-spacing: normal;
`;

const CommentLists = styled.div`
  font-size: 14px;
  line-height: 16px;
  letter-spacing: normal;
  font-weight: normal;
`;

const CommentInputs = styled.div``;
