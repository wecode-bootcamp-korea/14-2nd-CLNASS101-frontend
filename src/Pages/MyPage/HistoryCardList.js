import React, { Component } from 'react';
import styled from 'styled-components';
import { css } from 'styled-components';
import { withRouter } from 'react-router-dom';

class HistoryCardList extends Component {
  goToClassPage = (index) => {
    this.props.history.push(
      `/ClassLists/${this.props.mypage.history_class[index].id}`
    );
  };

  render() {
    const { recentView } = this.props;

    // console.log(recentView);
    return (
      <>
        <VideoContainer>
          {recentView?.map((item, index) => (
            <VideoCard key={index}>
              <div className='videoBox'>
                <img src={item.thumbnail} alt='섬네일' />
              </div>
              <div className='title'>{item.title}</div>
              <div className='priceInfo'>
                <div className='priceUnderbar'></div>
                <span className='price'>{item.price}원</span>
                <span className='discountPer'>{item.sale * 100}% 할인중</span>
                <div className='totalPrice'>
                  {/* {parseInt((item.price * (100 - item.sale)) / 100)}원 */}
                  {item.finalPrice.toLocaleString(2)}원
                </div>
                <div className='giveGift'>
                  <span className='gift'>선물하기</span>
                  <span className='direct'>바로 수강 가능</span>
                </div>
              </div>
            </VideoCard>
          ))}
        </VideoContainer>
      </>
    );
  }
}
const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const VideoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const VideoCard = styled.div`
  width: 242px;
  margin-bottom: 15px;
  .videoBox {
    /* overflow: hidden; */
    margin-bottom: 10px;
    position: relative;
    img {
      width: 100%;
      height: 182px;
      object-fit: cover;
    }
    .playButton {
      width: 35px;
      height: 35px;
      position: absolute;
      left: 110px;
      bottom: 80px;
      z-index: 1;
      opacity: 0.7;
      :hover {
        opacity: 0.9;
      }
    }
  }
  .title {
    line-height: 20px;
    margin-bottom: 7px;
    font-size: 14px;
  }
  .priceInfo {
    position: relative;

    .price {
      font-size: 11px;
      line-height: 16px;
      color: #a8aeb2;
      margin-right: 5px;
      /* font-style: ; */
    }
    .priceUnderbar {
      position: absolute;
      top: 10px;
      width: 36px;
      border-bottom: 1px solid #a8aeb2;
    }
    .discountPer {
      color: #f33340;
      font-size: 11px;
      font-weight: 600;
      line-height: 16px;
    }
    .totalPrice {
      font-size: 14px;
      font-weight: 700;
      line-height: 20px;
    }
    .gift {
      background-color: #f7f4f4;
      font-size: 10px;
      font-weight: 700;
      line-height: 12px;
      color: #f33340;
      padding: 4px;
      margin-right: 10px;
    }
    .direct {
      background-color: #f7f4f4;
      font-size: 10px;
      font-weight: 700;
      line-height: 12px;
      color: #858a8d;
      padding: 4px;
    }
  }
  .progressBox {
    .progress {
      display: flex;
      justify-content: space-between;
      font-size: 11px;
      color: #fd7e13;
      margin: 6px 0 6px 0;
      span {
        color: #a8aeb2;
      }
    }

    .barContainer {
      ${flexCenter};
      width: 100%;

      .progressTag {
        width: 100%;
        margin: 0px;
        padding: 0px;
      }
    }
  }
`;

export default withRouter(HistoryCardList);

// "https://img.youtube.com/vi/6vy-wArNJmE/mqdefault.jpg"
// 유튜브 썸네일 이렇게
