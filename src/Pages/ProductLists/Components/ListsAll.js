import React, { Component } from "react";
import styled from "styled-components";
import { API_List } from "../../../config";
import Bookmark from "./Bookmark";

class UpdatedClassLists extends Component {
  constructor() {
    super();
    this.state = {
      UpdateClassLists: [],
    };
  }

  componentDidMount() {
    fetch(API_List)
      .then((res) => res.json())
      .then((res) => this.setState({ UpdateClassLists: res.RESULT }));
  }
  render() {
    const { UpdateClassLists } = this.state;
    console.log(UpdateClassLists);
    return (
      <WrapLists>
        <WrapHeader>
          <header>전체 클래스</header>
          <p>크리에이터가 최근 활동한 클래스예요.</p>
        </WrapHeader>
        <WrapList>
          {UpdateClassLists.map((list) => {
            return (
              <ListInfo key={list.id}>
                <ProductImages>
                  <img className="mainImage" src={list.thumbnail} alt="mainImage" />
                  <Bookmark />
                </ProductImages>
                <Intro>
                  <div className="category">{list.subCategory}</div>
                  <div className="title">{list.title}</div>
                  <div className="likes">
                    <i class="fa fa-heart"></i>
                    <span className="likesNum">{list.likeCount}</span>
                    <i class="fa fa-thumbs-up" aria-hidden="true"></i>
                    <span className="likesPer">{list.sale * 100}%</span>
                  </div>
                </Intro>
                <Discount>
                  <span className="originalPrice">{list.price}원</span>
                  <span className="discountPer">{list.sale * 100}%</span>
                </Discount>
                <Price>
                  <span className="monthlyPay">{list.finalPrice}원</span>
                </Price>
                <Commonstates>
                  <span className="comment">미션 답변 작성</span>
                  <span className="commentTime">{list.id}분전</span>
                </Commonstates>
              </ListInfo>
            );
          })}
        </WrapList>
      </WrapLists>
    );
  }
}

export default UpdatedClassLists;

const WrapLists = styled.section`
  margin-top: 48px;
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

const WrapList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

const ListInfo = styled.div`
  width: 276px;
  height: 384px;
  margin: 24px 24px 0 0;
`;

const Commonstates = styled.div`
  margin-top: 10px;
  font-size: 12px;
  font-weight: normal;
  line-height: 16px;
  letter-spacing: normal;

  .comment {
    margin-right: 5px;
  }

  .commentTime {
    color: rgb(243, 51, 64);
  }
`;

const ProductImages = styled.div`
  position: relative;
  overflow: hidden;

  .mainImage {
    width: 276px;
    height: 204px;

    &:hover {
      transform: scale(1.1);
      transition: 0.2s;
      cursor: pointer;
    }
  }
  i {
    position: absolute;
    top: 12px;
    right: 14px;
  }
`;

const Intro = styled.div`
  .category {
    margin: 0px;
    color: rgb(27, 28, 29);
    font-weight: bold;
    font-size: 11px;
    line-height: 16px;
    letter-spacing: normal;
  }
  .title {
    height: 40px;
    margin: 0px 0px 6px;
    color: rgb(27, 28, 29);
    font-size: 14px;
    font-weight: normal;
    line-height: 20px;
    letter-spacing: -0.15px;

    &:hover {
      font-weight: bold;
      text-decoration: underline;
      cursor: pointer;
    }
  }
  .likes {
    display: flex;
    margin: 0px 8px 0px 0px;
    font-size: 11px;
    font-weight: normal;
    line-height: 16px;
    letter-spacing: normal;
    border-bottom: 1px solid lightgrey;
    padding-bottom: 10px;

    i {
      margin-right: 2px;
      color: rgb(133, 138, 141);
    }

    .likesNum {
      margin: 0px 8px 0px 0px;
      color: rgb(133, 138, 141);
      font-size: 11px;
      font-weight: normal;
      line-height: 16px;
      letter-spacing: normal;
    }

    .likesPer {
      margin: 0px 8px 0px 0px;
      color: rgb(133, 138, 141);
      font-size: 11px;
      font-weight: normal;
      line-height: 16px;
      letter-spacing: normal;
    }
  }
`;

const Discount = styled.div`
  margin-top: 10px;

  .originalPrice {
    margin-right: 5px;
    color: #8d8d93;
    font-size: 11px;
    line-height: 20px;
    letter-spacing: -0.15px;
    text-decoration: line-through;
  }
  .discountPer {
    color: rgb(243, 51, 64);
    font-size: 11px;
    line-height: 16px;
    letter-spacing: normal;
    font-weight: bold;
  }
`;

const Price = styled.div`
  .monthlyPay {
    margin-right: 2px;
    color: rgb(27, 28, 29);
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.15px;
    font-weight: bold;
  }
  .installment {
    color: rgb(27, 28, 29);
    font-size: 11px;
    font-weight: normal;
    line-height: 16px;
    letter-spacing: normal;
  }
`;
