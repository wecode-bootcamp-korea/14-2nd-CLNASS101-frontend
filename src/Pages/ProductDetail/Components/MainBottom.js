import React, { Component, useEffect, useState } from "react";
import styled from "styled-components";
import { API_DETAIL, API_DETAILPAGE } from "../../../config";

const MainBottom = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // fetch(API_DETAIL)
    //   .then((res) => res.json())
    //   .then((res) => setData(res.class.mainImageBottom));
    fetch(API_DETAILPAGE)
      .then((res) => res.json())
      .then((res) => setData(res.CLASS.subImages));
  }, []);

  return (
    <WrapMainBottom>
      {data.map((image) => {
        return <img key={image.id} src={image.imageUrl} alt="bottomImages" />;
      })}
    </WrapMainBottom>
  );
};

export default MainBottom;

const WrapMainBottom = styled.div`
  display: flex;
  width: 50%;
  height: 304px;

  img {
    width: 100%;
    height: 100%;

    &:last-child {
      margin-left: 8px;
    }
  }
`;
