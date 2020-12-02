import React, { Component } from 'react';
import styled from 'styled-components';
import { css } from 'styled-components';
import { withRouter } from 'react-router-dom';

class VideoCardList extends Component {
  goToClassPage = () => {
    this.props.history.push('/ClassLists');
  };

  render() {
    const { mypage } = this.props;
    console.log(mypage);
    return (
      <>
        <VideoContainer>
          {mypage.my_class?.map((item, idx) => (
            <VideoCard key={idx}>
              <div className='videoBox'>
                <img src={item.thumbnail} alt='섬네일' />
                <img
                  className='playButton'
                  src='/images/HS/playbutton.png'
                  alt='playbutton'
                  onClick={this.goToClassPage}
                />
              </div>
              <div className='title'>{item.title}</div>
              <div className='progressBox'>
                <div className='progress'>
                  {item.progress}% 수강중
                  <span>89일 남음</span>
                </div>
                <div className='barContainer'>
                  <progress
                    className='progressTag'
                    value={item.progress}
                    max='100'
                  />
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
    font-size: 14px;
    height: 36px;
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

export default withRouter(VideoCardList);

// "https://img.youtube.com/vi/6vy-wArNJmE/mqdefault.jpg"
// 유튜브 썸네일 이렇게
