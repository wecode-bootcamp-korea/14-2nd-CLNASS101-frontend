/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component, useState, useEffect, axios } from "react";
import styled from "styled-components";
import Substance from "./Substance";
import { API_DETAILPAGE } from "../../../config";

const Curriculum = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(API_DETAILPAGE)
      .then((res) => res.json())
      .then((res) => setData(res.CLASS));
  }, []);

  return (
    <WrapCurriculum>
      <Header>
        <h3>
          <a name="curriculum">커리큘럼</a>
        </h3>
        <h4>제작될 클래스의 커리큘럼입니다. 일부 콘텐츠는 무료로 공개될 수 있습니다.</h4>
        <p>커리큘럼은 일부 변동될 수 있으며, 콘텐츠는 순차적으로 업로드 될 수 있습니다.</p>
      </Header>
      <Substances>
        <Substance />
      </Substances>
    </WrapCurriculum>
  );
};

export default Curriculum;

const WrapCurriculum = styled.div`
  margin-bottom: 50px;
`;

const Header = styled.div`
  margin-top: 48px;

  h3 {
    font-size: 24px;
    font-weight: bold;
    color: rgb(27, 28, 29);
    line-height: 34px;
    letter-spacing: -0.4px;

    &:hover {
      cursor: pointer;
    }
  }

  h4 {
    margin: 12px 0 16px 0;
    font-size: 14px;
    font-weight: normal;
    line-height: 24px;
    text-align: left;
    color: rgb(27, 28, 29);

    &:hover {
      cursor: pointer;
    }
  }

  p {
    margin-top: 4px;
    color: rgb(168, 174, 179);
    font-size: 11px;
    line-height: 16px;
    text-align: left;

    &:hover {
      cursor: pointer;
    }
  }
`;

const Substances = styled.div`
  margin-top: 24px;
`;
