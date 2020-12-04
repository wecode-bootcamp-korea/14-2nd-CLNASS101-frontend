/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styled from "styled-components";

const NavDetail = (props) => {
  return (
    <>
      <NavContents>
        <div className="navContent">
          <a href="#curriculum">커리큘럼</a>
        </div>
        <div className="navContent">
          <a href="#kitIntroduce">키트 소개</a>
        </div>
        <div className="navContent">
          <a href="#community">커뮤니티</a>
        </div>
      </NavContents>
    </>
  );
};

export default NavDetail;

const NavContents = styled.div`
  display: flex;
  border-bottom: 1px solid rgba(133, 138, 141, 0.3);
  box-shadow: rgb(237, 239, 240) 0px -1px 0px 0px inset;

  .navContent {
    margin-right: 24px;
    padding: 14px 0px 13px;
    align-items: center;
    a {
      color: rgb(133, 138, 141);
      font-size: 14px;
      line-height: 20px;
      letter-spacing: -0.15px;

      &:visited {
        color: rgb(133, 138, 141);
      }
    }

    &:hover {
      cursor: pointer;
      transform: scale(1.1);
      transition: 0.2s;
    }
  }
`;
