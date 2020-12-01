import React, { Component, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { API_List } from "../../config";
import MainNav from "./Components/MainNav";
import CategoryItems from "./Components/CategoryItems";
import Lists from "./Components/Lists";
import ListsAll from "./Components/ListsAll";
import Nav from "../../Components/Nav/Nav";
import Footer from "../../Components/Footer/Footer";

const ProductLists = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch(API_List)
      .then((res) => res.json())
      .then((res) => setList(res.RESULT));
  }, []);
  return (
    <>
      <Nav />
      <ProductListsWrapper>
        <Wrapper>
          <MainNav />
          <WrapMainAd>
            <AdText>
              <h2>
                준비물까지 챙겨주는 <br />
                온라인 클래스
              </h2>
              <p>취미를 시작하는데 필요한 모든 것을 준비해드려요.</p>
            </AdText>
            <AdImage>
              <img
                src="https://www.wework.com/ideas/wp-content/uploads/sites/4/2020/04/WeWork_CommonArea_Kitchen-1440x810.jpg"
                alt="creative"
              />
            </AdImage>
          </WrapMainAd>
          <CategoryItems />
          <WrapLists>
            <WrapHeader>
              <header>지금, 인기 TOP10</header>
            </WrapHeader>
            <WrapArrList>
              {list.map((list) => {
                return <Lists list={list} />;
              })}
            </WrapArrList>
          </WrapLists>
          <WrapLists>
            <WrapHeader>
              <header>최근 업데이트</header>
            </WrapHeader>
            <WrapArrList>
              {list.map((list) => {
                return <Lists list={list} />;
              })}
            </WrapArrList>
          </WrapLists>
          <ListsAll />
        </Wrapper>
      </ProductListsWrapper>
      <Footer />
    </>
  );
};

export default ProductLists;

const AlignCenter = css`
  display: flex;
  align-items: center;
`;

const JustifyCenter = css`
  display: flex;
  justify-content: center;
`;

const ProductListsWrapper = styled.div`
  ${AlignCenter}
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
`;
const Wrapper = styled.div`
  width: 1176px;
  margin: 0 308px;
`;

const WrapMainAd = styled.section`
  position: relative;
  width: 100%;
  height: 320px;
  background-color: #222222;
  .adImg {
  }
`;

const AdText = styled.div`
  position: absolute;
  top: 46px;
  left: 48px;
  width: 330px;
  height: 126px;
  color: #fff;
  h2 {
    font-size: 2rem;
    letter-spacing: -0.6px;
  }
  p {
    margin-top: 12px;
    opacity: 0.55;
    font-size: 1rem;
    letter-spacing: -0.3px;
  }
`;

const AdImage = styled.div`
  img {
    position: absolute;
    left: 600px;
    width: 576px;
    height: 320px;
  }
`;

const WrapHeader = styled.div`
  position: relative;

  header {
    color: rgb(27, 28, 29);
    font-size: 24px;
    font-weight: bold;
    line-height: 34px;
    letter-spacing: -0.4px;
  }
`;

const WrapLists = styled.section`
  margin-top: 48px;
`;

const WrapArrList = styled.div`
  display: flex;
`;
