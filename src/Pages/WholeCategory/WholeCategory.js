/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-constructor */
/* eslint-disable no-dupe-class-members */
import React, { Component } from "react";
import styled, { css } from "styled-components";
import Nav from "../../Components/Nav/Nav";
import Footer from "../../Components/Footer/Footer";
import CreativeContent from "./Components/CreativeContent";
import CareerContent from "./Components/CareerContent";
import MoneyContent from "./Components/MoneyContent";

class WholeCategory extends Component {
  constructor() {
    super();
  }

  handleBackButton = () => {
    this.props.history.push(`/`);
  };

  render() {
    return (
      <>
        <Nav />
        <WrapCategory>
          <WrapContents>
            <Header>
              <i onClick={this.handleBackButton} class="fa fa-arrow-left" />
              <h1>전체 카테고리</h1>
            </Header>
            <Categories>
              <CreativeContent />
              <CareerContent />
              <MoneyContent />
            </Categories>
          </WrapContents>
        </WrapCategory>
        <Footer />
      </>
    );
  }
}

export default WholeCategory;

const AlignCenter = css`
  display: flex;
  align-items: center;
`;

const JustifyCenter = css`
  display: flex;
  justify-content: center;
`;

const WrapCategory = styled.div`
  ${AlignCenter};
  flex-direction: column;
  padding: 88px 0 100px 0;
`;

const WrapContents = styled.div`
  width: 1176px;
`;

const Header = styled.header`
  ${AlignCenter}
  margin-bottom: 64px;
  padding-left: 12px;
  font-size: 24px;

  h1 {
    font-size: 24px;
  }

  i {
    font-size: 22px;
    margin-right: 20px;
    padding-bottom: 5px;

    &:hover {
      cursor: pointer;
      transform: scale(1.3);
      transition: 0.2s;
    }
  }

  h1 {
    color: rgb(27, 28, 29);

    font-weight: bold;
    line-height: 34px;
    letter-spacing: -0.4px;
  }
`;

const Categories = styled.div`
  display: flex;
`;
