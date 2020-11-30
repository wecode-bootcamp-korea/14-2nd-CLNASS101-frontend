import React, { Component } from 'react';
import styled from 'styled-components';
import './MyPage.scss';
import { withRouter } from 'react-router-dom';

class VideoCardList extends Component {
  goToClassPage = () => {
<<<<<<< HEAD
    this.props.history.push('/ClassLists');
=======
    this.props.history.push('/ClassDetail');
>>>>>>> c809a03 (ADD: 마이페이지 레이아웃)
  };

  render() {
    const { carditems } = this.props;
    console.log(carditems);
    return (
      <VideoContainer>
        {carditems.length &&
          carditems.map((item) => (
            <VideoCard>
              <div className='videoBox'>
                {/* <iframe
                  width='250'
                  height='200'
                  src={item.url}
                  frameborder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowfullscreen
                  alt='비디오'
                /> */}
                <img src={item.thumbnail} />
                <img
                  className='playButton'
                  src='/images/HS/playbutton.png'
                  alt='playbutton'
                  onClick={this.goToClassPage}
                />
              </div>
              <div className='title'>{item.title}</div>
              <div className='progressBox'>
<<<<<<< HEAD
                <div className='progress'>
                  10% 수강중
                  <span>89일 남음</span>
                </div>
=======
                <div className='progress'>10% 수강중</div>
>>>>>>> c809a03 (ADD: 마이페이지 레이아웃)
                <div className='barContainer'>
                  <progress className='progressTag' value='10' max='100' />
                </div>
              </div>
            </VideoCard>
          ))}
      </VideoContainer>
    );
  }
}
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
<<<<<<< HEAD
      display: flex;
      justify-content: space-between;
      font-size: 11px;
      color: #fd7e13;
      margin: 6px 0 6px 0;
      span {
        color: #A8AEB2;
      }
=======
      font-size: 11px;
      color: #fd7e13;
      margin: 5px 0 5px 0;
>>>>>>> c809a03 (ADD: 마이페이지 레이아웃)
    }

    .barContainer {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;

      .progressTag {
        width: 100%;
        margin: 0px;
        padding: 0px;
<<<<<<< HEAD
      }
        /* .css-progressbar {
          -moz-animation: css-progressbar 2s ease-out;
          -webkit-animation: css-progressbar 2s ease-out;
        } */
=======

        .css-progressbar {
          width: 30%;
          -moz-animation: css-progressbar 2s ease-out;
          -webkit-animation: css-progressbar 2s ease-out;
>>>>>>> c809a03 (ADD: 마이페이지 레이아웃)
        }
      }
    }
  }
`;

export default withRouter(VideoCardList);

// "https://img.youtube.com/vi/6vy-wArNJmE/mqdefault.jpg"
// 유튜브 썸네일 이렇게
