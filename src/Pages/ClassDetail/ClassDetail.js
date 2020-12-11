import React, { Component } from 'react';
import styled from 'styled-components';
import { css } from 'styled-components';
import Nav from '../../Components/Nav/Nav';

import ClassRightSide from './ClassRightSide';
import CommentInput from './CommentInput';
import { IoIosArrowDown } from 'react-icons/io';
import { BsArrowLeft } from 'react-icons/bs';
import { BsArrowRight } from 'react-icons/bs';
import { withRouter } from 'react-router-dom';

class ClassDetail extends Component {
  constructor() {
    super();
    this.state = {
      detaildata: {},
    };
  }
  getData = () => {
    fetch(
      `http://192.168.200.130:8001/products/chapters/${this.props.location.state.classId}/lecture/${this.props.match.params.id}`,
      {
        method: 'GET',
        headers: { Authorization: localStorage.getItem('token') },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        this.setState({
          detaildata: res.LECTURE,
        });
      });
  };

  componentDidMount() {
    this.getData();
  }

  componentDidUpdate(prevProps, preState) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.getData();
    }
  }

  goToPrevious = () => {
    console.log(this.props);
    this.props.history.push(
      `/ClassDetail/${parseInt(this.props.match.params.id) - 1}`
    );
  };

  goToNext = () => {
    this.props.history.push(
      `/ClassDetail/${parseInt(this.props.match.params.id) + 1}`
    );
  };
  render() {
    // console.log(this.props.location.state.classId);
    // console.log(this.props.match);
    // console.log(this.props);
    const { detaildata } = this.state;
    return (
      <div>
        <Nav />
        <Listpage>
          <LeftContainer>
            <LeftSide>
              <TitleContainer>
                <div className='titleBox'>
                  <span className='title'>{detaildata?.class_title}</span>
                </div>
                <div className='lecture'>
                  <div className='lectureTitle'>
                    {detaildata.lecture_title}
                    <span>
                      <IoIosArrowDown size='25' />
                    </span>
                  </div>
                  <div className='page'>
                    <div>
                      <div className='previousPage' onClick={this.goToPrevious}>
                        <BsArrowLeft />
                        이전 콘텐츠
                      </div>
                    </div>
                    <div>
                      <div className='nextPage' onClick={this.goToNext}>
                        다음 콘텐츠
                        <BsArrowRight />
                      </div>
                    </div>
                  </div>
                </div>
              </TitleContainer>
              <VideoContainer>
                <video
                  title='hs'
                  width='830'
                  height='504'
                  src={
                    detaildata.lecture_url // 'https://clnass101.s3.ap-northeast-2.amazonaws.com/videos/%5BWecode+_+%E1%84%8B%E1%85%B1%E1%84%8F%E1%85%A9%E1%84%83%E1%85%B3+_+%E1%84%8F%E1%85%A9%E1%84%83%E1%85%B5%E1%86%BC+%E1%84%87%E1%85%AE%E1%84%90%E1%85%B3%E1%84%8F%E1%85%A2%E1%86%B7%E1%84%91%E1%85%B3%5D+%E1%84%8C%E1%85%A9%E1%86%AF%E1%84%8B%E1%85%A5%E1%86%B8%E1%84%89%E1%85%A2%E1%86%BC+%E1%84%8B%E1%85%B5%E1%84%89%E1%85%A5%E1%86%AB%E1%84%8C%E1%85%AE%E1%84%82%E1%85%B5%E1%86%B7+%E1%84%92%E1%85%AE%E1%84%80%E1%85%B5.mp4'
                  }
                  controls
                  autoplay='autoplay'
                  alt='video'
                />
              </VideoContainer>
              <CommentBox>
                <CommentHeader>
                  <span className='comment'>댓글</span>
                  <span className='length'>15개</span>
                </CommentHeader>
                <CommentInput />
              </CommentBox>
            </LeftSide>
          </LeftContainer>
          <ClassRightSide
            detaildata={detaildata}
            lecture_detail={detaildata.lecture_detail}
          />
        </Listpage>
      </div>
    );
  }
}

export default withRouter(ClassDetail);

const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Listpage = styled.div`
  display: flex;
  width: 100%;
`;

const LeftContainer = styled.div`
  width: 67%;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: scroll;
  padding: 32px;
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleContainer = styled.div`
  width: 850px;
  box-sizing: border-box;
  padding: 0px 12px;
  .titleBox {
    width: 100%;
    font-size: 14px;
    letter-spacing: -0.15px;
    color: #1b1c1d;
    margin-bottom: 12px;
    .title {
    }
  }
  .lecture {
    display: flex;
    justify-content: space-between;

    .lectureTitle {
      position: relative;
      font-size: 24px;
      line-height: 34px;
      letter-spacing: -0.4px;
      font-weight: 700;
      span {
        margin-left: 10px;
        position: absolute;
        top: 3px;
      }
    }
    .page {
      ${flexCenter};
      align-items: center;
      div {
        ${flexCenter};
        .previousPage {
          width: 109px;
          height: 32px;
          background-color: #f8f8f9;
          margin-right: 10px;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: -0.2px;
          cursor: pointer;
        }
        .nextPage {
          width: 109px;
          height: 32px;
          background-color: #f8f8f9;
          margin-right: 10px;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: -0.2px;
          cursor: pointer;
        }
      }
    }
  }
`;

const VideoContainer = styled.div`
  ${flexCenter};
  margin-top: 30px;
`;

const CommentBox = styled.div`
  width: 100%;
  margin-top: 20px;
`;

const CommentHeader = styled.div`
  padding: 12px;
  .comment {
    margin-right: 10px;
    font-size: 20px;
    font-weight: 700;
    line-height: 28px;
  }
  .length {
    font-size: 14px;
    letter-spacing: -0.15px;
    line-height: 20px;
    color: lightgray;
  }
`;
