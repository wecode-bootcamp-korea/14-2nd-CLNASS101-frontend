import React, { Component, useState, useEffect } from "react";
import styled from "styled-components";
import { API_DETAIL, API_DETAILPAGE } from "../../../config";
import MainBottom from "./MainBottom";

const TitleImage = () => {
  const [data, setData] = useState([]);
  const [subimage, setSubImage] = useState([]);

  useEffect(() => {
    // fetch(API_DETAIL)
    //   .then((res) => res.json())
    //   .then((res) => setData(res.class));
    fetch(API_DETAILPAGE)
      .then((res) => res.json())
      .then((res) => setData(res.CLASS));
    fetch(API_DETAILPAGE)
      .then((res) => res.json())
      .then((res) => setSubImage(res.CLASS.subImages[0]));
  }, []);

  return (
    <WrapTitleImage>
      <MainImages>
        <MainImageLeft>
          <img src={data.mainImage} alt="titleImage" />
        </MainImageLeft>
        <MainImageRight>
          <MainTop>
            <img src={subimage.imageUrl} alt="titleImage" />
          </MainTop>
          <MainBottoms>
            <MainBottom />
          </MainBottoms>
        </MainImageRight>
      </MainImages>
    </WrapTitleImage>
  );
};

export default TitleImage;

const WrapTitleImage = styled.section`
  display: flex;
  justify-content: center;
  height: 690px;
`;

const MainImages = styled.div`
  width: 1920px;
  display: flex;
`;

const MainImageLeft = styled.div`
  width: 64.3%;
  height: 690px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const MainImageRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 35.7%;
  height: 690px;
  margin-left: 8px;
`;

const MainTop = styled.div`
  width: 100%;
  height: 380px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const MainBottoms = styled.div`
  margin-top: 8px;
`;
