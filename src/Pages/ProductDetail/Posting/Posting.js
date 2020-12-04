import React, { Component, useState } from "react";
import styled from "styled-components";

const Posting = (props) => {
  const [textValue, setTextValue] = useState("");

  const postValue = (e) => {
    e.preventDefault();
    props.take(e, textValue);
  };

  return (
    <>
      <WrapPosting>
        <Main>
          <Header>
            <Logo>
              <img src="/images/SH/logo_text.png" alt="logo" />
            </Logo>
            <Search>
              <img src="/images/SH/serchIcon.png" alt="SerchIcon" />
            </Search>
            <Profile>
              <img src="/images/SH/myProfile.png" alt="profile" />
            </Profile>
          </Header>
          <Post>
            <h1>글 작성하기</h1>
            <WrapProfile>
              <img src="/images/SH/myProfile.png" alt="profile" />
              <span className="username">영준</span>
            </WrapProfile>
            <TextInput>
              <textarea
                onChange={(e) => setTextValue(e.target.value)}
                cols="50"
                rows="10"
              ></textarea>
              <Button onClick={(e) => postValue(e)}>저장하기</Button>
            </TextInput>
          </Post>
        </Main>
      </WrapPosting>
    </>
  );
};

export default Posting;

const WrapPosting = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  z-index: 10000;
`;

const Main = styled.div`
  width: 614px;
  background-color: white;
`;

const Header = styled.header`
  position: relative;
  padding: 16px 16px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const Post = styled.div`
  padding: 24px;
  font-size: 24px;
  font-weight: bold;
  color: rgb(27, 28, 29);
  line-height: 34px;
`;

const WrapProfile = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 30px;
    border-radius: 100%;
    margin-right: 10px;
  }

  .username {
    font-size: 14px;
    font-weight: bold;
    color: rgb(27, 28, 29);
    line-height: 20px;
  }
`;

const TextInput = styled.form`
  textarea {
    width: 100%;
    height: 314px;
    margin-top: 20px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    outline-style: none;
  }
`;

const Logo = styled.span`
  img {
    width: 110px;
  }
`;

const Search = styled.span`
  position: absolute;
  top: 14px;
  right: 40px;
  img {
    width: 20px;
  }
`;

const Profile = styled.span`
  position: absolute;
  top: 13px;
  right: 10px;
  img {
    width: 20px;
    border-radius: 100%;
  }
`;

const Button = styled.button`
  width: 100%;
  height: 48px;
  color: white;
  background-color: #f77803;
  outline-style: none;
  border-radius: 5px;
  margin-top: 25px;
  font-size: 15px;

  &:hover {
    transform: scale(1.03);
    transition: 0.2s;
    cursor: pointer;
  }
`;
