/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component, useState, useEffect } from "react";
import styled from "styled-components";
import { API_DETAILPAGE } from "../../../config";

const KitIntroduce = () => {
  const [kit, setKit] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch(API_DETAILPAGE)
      .then((res) => res.json())
      .then((res) => setKit(res.CLASS.kitInfo));
  }, []);

  console.log(kit);
  return (
    <>
      <WrapKitIntroduce>
        <Header>
          <h1>키트 소개</h1>
          <p>🌠 오토 크리에이터가 세심하게 준비한 키트 구성을 살펴보세요.</p>
        </Header>
        <AllInOne>
          {/* <h3>{kit.subHeader}</h3> */}
          {kit.length > 0 &&
            kit.map((kit) => {
              return (
                <>
                  <img src={kit.mainImageUrl} alt="1" />
                  <h3>{kit.kitName}</h3>
                </>
              );
            })}

          {/* <p>{kit.allInOneText}</p> */}
          <AllInOneText>
            {list.map((list) => {
              // return <li>{list.list}</li>;
            })}
          </AllInOneText>
          <AllInOneInfo>{/* <p>{kit.allInOneInfo}</p> */}</AllInOneInfo>
        </AllInOne>
      </WrapKitIntroduce>
    </>
  );
};

export default KitIntroduce;

const WrapKitIntroduce = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Header = styled.header`
  margin-top: 48px;
  h1 {
    margin-bottom: 60px;
    font-size: 20px;
    font-weight: bold;
    line-height: 28px;
  }
  p {
    font-size: 20px;
    font-weight: bold;
    line-height: 28px;
  }
`;

const AllInOne = styled.div`
  h3 {
    margin-top: 24px;
  }

  img {
    margin-top: 8px;
    width: 100%;
  }
  p {
    font-size: 16px;
    font-weight: normal;
    line-height: 24px;
    letter-spacing: -0.3px;
  }
`;

const AllInOneText = styled.ol`
  margin-top: 24px;
  font-size: 16px;
  font-weight: normal;
  padding-left: 24px;

  li {
    margin: 4px 0px 4px;
  }
`;

const AllInOneInfo = styled.div`
  margin-top: 48px;
`;

const ViewMoreFold = styled.button`
  margin-top: 24px;
  color: orange;
`;
