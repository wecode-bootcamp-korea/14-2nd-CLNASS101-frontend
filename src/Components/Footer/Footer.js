import React from "react";
import styled, { css } from "styled-components";

const Footer = () => {
  return (
    <FooterBackground>
      <FooterContainer>
        <CustomerServiceBox>
          <div className="link">
            <div className="class101">클래스101</div>
            <div className="home">홈</div>
            <div className="Recruitment">채용</div>
          </div>
          <div className="celler">
            <div className="creator">크리에이터</div>
            <div className="Apply">지원하기</div>
          </div>
          <div className="service">
            <div className="callCenter">
              고객센터<span>오전 10시 ~ 오후 6시 (주말, 공휴일 제외)</span>
            </div>
            <button className="inquireButton">
              <img src="/images/SH/chat-bubble.png" alt="chat" />
              문의하기
            </button>
          </div>
        </CustomerServiceBox>
        <IncInfomationBox>
          <div className="inc">
            <div className="title">Class101 Inc.</div>
            <ul>
              <li>이용약관</li>
              <li>개인정보 처리방침</li>
              <li>환불 정책</li>
              <li>사업자 정보 확인</li>
            </ul>
            <ul>
              <li>제휴/협력 문의</li>
              <li>단체/기업 교육 문의</li>
              <li>정기구독서비스 이용약관</li>
            </ul>
          </div>
          <div className="infomation">
            (주)클래스101 | 대표 고지연 | 서울특별시 중구 통일로 10 세브란스빌딩 18층 |
            사업자등록번호 : 457-81-00277 | 통신판매업신고 : 2019-서울중구-0087 | 주식회사
            클래스101은 전자상거래 등에서의 소비자보호에 관한 법률에 따른 통신판매업과
            통신판매중개업을 영위하고 있습니다. 주식회사 클래스101은 통신판매중개자로서 중개하는
            통신판매에 관하여서는 통신판매의 당사자가 아니므로 어떠한 책임도 부담하지 아니합니다.
          </div>
        </IncInfomationBox>
        <SocialLinkBox>
          <img src="images/SH/iconBox.png" alt="socialIcon" />
        </SocialLinkBox>
      </FooterContainer>
    </FooterBackground>
  );
};

const FooterBackground = styled.div`
  width: 100%;
  height: 292px;
  border-top: 1px solid rgb(230, 230, 230);
`;

const FooterContainer = styled.div`
  width: 1178px;
  height: 230px;
  margin: 0px 30px;
`;

const CustomerServiceBox = styled.div`
  display: flex;
  width: 100%;
  height: 78px;
  margin-top: 33px;
  font-size: 14px;

  .link {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 390px;
    height: 100%;

    .class101 {
      display: flex;
      align-items: center;
      height: 21px;
      margin-bottom: 7px;
      font-weight: 700;
    }

    .home {
      display: flex;
      align-items: center;
      height: 21px;
      margin-bottom: 7px;
      color: #858a8d;
    }

    .Recruitment {
      display: flex;
      align-items: center;
      height: 22px;
      color: #858a8d;
    }
  }

  .celler {
    width: 390px;
    height: 100%;
    padding-left: 10px;

    .creator {
      display: flex;
      align-items: center;
      height: 21px;
      margin-bottom: 7px;
      font-weight: 700;
    }

    .Apply {
      display: flex;
      align-items: center;
      height: 21px;
      margin-bottom: 7px;
      color: #858a8d;
    }
  }

  .service {
    width: 378px;
    height: 100%;
    padding-left: 10px;

    .callCenter {
      display: flex;
      align-items: center;
      height: 21px;
      margin-bottom: 9px;
      font-weight: 700;

      span {
        color: gray;
        font-size: 12px;
        font-weight: 500;
        margin-left: 5px;
      }
    }

    .inquireButton {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 40px;
      border: 1px solid rgb(210, 210, 210);
      border-radius: 3px;
      background-color: white;

      img {
        width: 15px;
        margin-right: 5px;
      }
    }
  }
`;

const IncInfomationBox = styled.div`
  display: flex;
  width: 100%;
  height: 74px;
  margin-top: 30px;
  .inc {
    width: 390px;
    height: 100%;

    .title {
      font-size: 11px;
      font-weight: 700;
      margin-bottom: 7px;
    }

    ul {
      display: flex;
      flex-wrap: wrap;
      font-size: 11px;
      line-height: 23px;

      li {
        margin-right: 12px;
      }

      li::after {
        content: "|";
        margin-left: 12px;
      }
      li:last-child::after {
        display: none;
      }
    }
  }
  .infomation {
    display: flex;
    align-items: flex-end;
    flex-wrap: wrap;
    width: 780px;
    margin-left: 10px;
    color: #858a8d;
    font-size: 11px;
    line-height: 18px;
  }
`;

const SocialLinkBox = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 34px;
  margin-top: 16px;
  img {
    width: 280px;
  }
`;

export default Footer;
