import React, { Component, useEffect, useState } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { API_DETAILPAGE } from "../../../config";

const OrderPage = (props) => {
  console.log(props);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(API_DETAILPAGE)
      .then((res) => res.json())
      .then((res) => setData(res.CLASS));
  }, []);

  const applyClass = () => {
    fetch(`http://127.0.0.1:8000/products/${props.match.params.id}/order`, {
      method: "POST",
      header: { authorization: localStorage.getitem("token") },
      body: JSON.stringify({
        user_name: "안혜수",
        phone_number: "01011111111",
        post_number: "123-123",
        address: "서울시 강남구",
        sub_address: "테헤란로 427 위워크 타워(위워크 선릉 2호점)",
        request_option: "문 앞에 놓고, 연락주세요~~",
        coupon_id: null,
        price: 100000,
        payment_method_id: "1",
      }),
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };
  return (
    <WrapContainer>
      <WrapBox>
        <ProductHeader>
          <Header>
            <HeaderCategoty>{data.subCategoryName}</HeaderCategoty>
            <HeaderTitle>{data.title}</HeaderTitle>
            <HeaderTerm>
              <Term>{data.isTakeClass}</Term>
            </HeaderTerm>
          </Header>
          <SaleProductInfoTable>
            <Installment>
              <ApplyCoupon>쿠폰 적용 시</ApplyCoupon>
              <InstallmentDetail>
                <FiveMonth>금액</FiveMonth>
                <MonthlyPay>
                  <DiscountPer>{data.sale}%</DiscountPer>
                  <SumAmount>{data.price}</SumAmount>
                </MonthlyPay>
              </InstallmentDetail>
            </Installment>
            <TotalDiscount>
              <DiscountText>총 할인액</DiscountText>
              <DiscountNum>-{data.sale}원</DiscountNum>
            </TotalDiscount>
            <EarlyBird>
              <EarlyBirdButton>얼리버드 쿠폰 받기</EarlyBirdButton>
            </EarlyBird>
            <ProvideThings>
              <ProvideContents>
                <sapn>콘텐츠 이용권</sapn>
              </ProvideContents>
              <ProvideKits>
                <span>준비물 키트</span>
              </ProvideKits>
              <ForBeginner>
                <span>{data.difficulty}</span>
              </ForBeginner>
            </ProvideThings>
            <Buttons>
              <TopButtons>
                <LikeButton>
                  <i class="fa fa-heart" aria-hidden="true"></i>
                  <span>{data.likeCount}</span>
                </LikeButton>
                <ShareButton>
                  <i class="fa fa-share" aria-hidden="true"></i>
                  <span>공유하기</span>
                </ShareButton>
              </TopButtons>
              <ApplyButton onClick={applyClass}>
                <span className="bigText">클래스 신청하기</span>
                <span className="smallText">15개 남음</span>
              </ApplyButton>
              <Attention>키트 미개봉 시, 1월 28일까지 전액 환불 보장</Attention>
            </Buttons>
          </SaleProductInfoTable>
        </ProductHeader>
      </WrapBox>
    </WrapContainer>
  );
};

export default withRouter(OrderPage);

const WrapContainer = styled.div`
  position: static;
`;

const WrapBox = styled.div`
  position: sticky;
  top: 0px;
  max-height: 100vh;
  overflow: auto;
  padding-left: 4px;
  padding-right: 4px;
`;

const ProductHeader = styled.div`
  padding: 24px;
  border-radius: 3px;
  box-shadow: rgba(41, 42, 43, 0.16) 0px 2px 6px -2px;
  border: 1px solid rgb(255, 255, 255);
`;

const Header = styled.div``;

const HeaderCategoty = styled.div`
  margin-bottom: 4px;
  font-size: 14px;
  font-weight: 500;
  color: rgb(27, 28, 29);
  line-height: 20px;
  letter-spacing: -0.15px;
`;

const HeaderTitle = styled.div`
  margin-bottom: 8px;
  color: rgb(27, 28, 29);
  font-size: 20px;
  font-weight: bold;
  line-height: 28px;
  word-break: keep-all;
`;

const HeaderTerm = styled.div`
  margin-right: 4px;
  margin-bottom: 4px;
  padding-right: 6px;
  width: 116px;
  height: 24px;
  border-radius: 3px;
`;

const Term = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 11px;
  color: rgb(133, 138, 141);
  line-height: 16px;
  letter-spacing: normal;
  background-color: rgba(0, 0, 0, 0.1);
`;

const SaleProductInfoTable = styled.div`
  margin: 8px 0px 12px;
`;

const Installment = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const ApplyCoupon = styled.div`
  margin-left: auto;
  margin-bottom: 2px;
  font-size: 11px;
  font-weight: normal;
  color: rgb(133, 138, 141);
  line-height: 16px;
  letter-spacing: normal;
`;

const InstallmentDetail = styled.div`
  display: flex;
`;

const FiveMonth = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 700;
  color: rgb(27, 28, 29);
  line-height: 20px;
  letter-spacing: -0.15px;
  margin: 0px;
`;

const MonthlyPay = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

const DiscountPer = styled.div`
  color: rgb(255, 81, 143);
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.3px;
`;

const SumAmount = styled.h4`
  margin-left: 4px;
  color: rgb(27, 28, 29);
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.45px;
`;

const TotalDiscount = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  margin-top: 16px;
`;

const DiscountText = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 700;
  color: rgb(27, 28, 29);
  line-height: 20px;
  letter-spacing: -0.15px;
`;

const DiscountNum = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  font-size: 18px;
  font-weight: 700;
  color: rgb(255, 81, 143);
  line-height: 24px;
  letter-spacing: -0.45px;
`;

const EarlyBird = styled.div`
  margin-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(20, 20, 20, 0.1);
`;

const EarlyBirdButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  padding: 0px 16px;
  border-radius: 3px;
  color: rgb(255, 255, 255);
  background-color: rgb(255, 81, 143);
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.2px;
  transition: background-color 0.1s ease 0s;
  text-decoration-line: none;
  outline-style: none;

  &:hover {
    cursor: pointer;
    transform: scale(1.03);
    transition: 0.2s;
  }
`;

const ProvideThings = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px 0;
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
  color: rgb(27, 28, 29);
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.15px;
`;

const ProvideContents = styled.div`
  width: 50%;
  margin-bottom: 20px;
`;

const ProvideKits = styled.div`
  width: 50%;
  margin-bottom: 20px;
`;

const ForBeginner = styled.div`
  width: 50%;
`;

const Buttons = styled.div`
  margin-top: 20px;
`;

const TopButtons = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  cursor: pointer;
`;

const LikeButton = styled.button`
  width: 153px;
  height: 40px;
  margin-right: 12px;
  background-color: rgb(221, 221, 225);
  border-radius: 5px;
  outline-style: none;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    transition: 0.2s;
  }

  i {
    margin-right: 5px;
    color: red;
  }
`;

const ShareButton = styled.button`
  width: 153px;
  height: 40px;
  background-color: rgb(221, 221, 225);
  border-radius: 5px;
  outline-style: none;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    transition: 0.2s;
  }

  i {
    margin-right: 5px;
    color: rgba(0, 0, 0, 0.5);
  }
`;

const ApplyButton = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  color: rgb(255, 255, 255);
  background-color: rgb(255, 146, 43);
  padding: 0px 20px;
  height: 48px;
  transition: background-color 0.1s ease 0s;
  text-decoration-line: none;
  outline-style: none;

  &:hover {
    cursor: pointer;
    transform: scale(1.03);
    transition: 0.2s;
  }

  .bigText {
    font-weight: 700;
    font-size: 16px;
    letter-spacing: -0.2px;
    margin-right: 5px;
  }

  .smallText {
    font-size: 11px;
    letter-spacing: -0.2px;
  }
`;

const Attention = styled.div`
  font-size: 11px;
  font-weight: normal;
  line-height: 16px;
  letter-spacing: normal;
  margin: 16px 0px 0px;
  text-align: center;
  color: rgb(168, 174, 179);
`;
