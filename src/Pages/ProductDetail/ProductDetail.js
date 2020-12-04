/* eslint-disable no-useless-constructor */
import React, { Component, useEffect, useState } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import Nav from "../../Components/Nav/Nav";
import Footer from "../../Components/Footer/Footer";
import TitleImage from "./Components/TitleImage";
import NavDetail from "./Components/NavDetail";
import Curriculum from "./Components/Curriculum";
import OrderPage from "./Components/OrderPage";
import KitIntroduce from "./Components/KitIntroduce";
import Community from "./Components/Community";
import { API_DETAILPAGE } from "../../config";

const ProductDetail = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(API_DETAILPAGE)
      .then((res) => res.json())
      .then((res) => setData(res.CLASS));
  }, []);
  return (
    <>
      <Nav />
      <WrapBody>
        <TitleImage />
        <WrapMainPage>
          <WrapForFlex>
            <WrapProductDetail>
              <NavDetail />
              <Curriculum />
              <KitIntroduce />
              <Community />
            </WrapProductDetail>
            <WrapOrderPage>
              <OrderPage />
            </WrapOrderPage>
          </WrapForFlex>
        </WrapMainPage>
      </WrapBody>
      <Footer />
    </>
  );
};

export default withRouter(ProductDetail);

const WrapBody = styled.section`
  box-sizing: border-box;
`;

const WrapMainPage = styled.section`
  display: flex;
  justify-content: center;
`;

const WrapForFlex = styled.div`
  display: flex;
  width: 1200px;
  padding-top: 24px;
`;

const WrapProductDetail = styled.section`
  width: 66.6667%;
  height: 100%;
  padding: 0 12px;
`;

const WrapOrderPage = styled.section`
  width: 33.3333%;
  height: 100%;
  padding: 0 12px;
`;
