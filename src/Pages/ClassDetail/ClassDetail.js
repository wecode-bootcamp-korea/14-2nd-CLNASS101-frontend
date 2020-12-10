import React, { Component } from 'react';
import styled from 'styled-components';
import { css } from 'styled-components';
import Nav from '../../Components/Nav/Nav';

import ClassRightSide from './ClassRightSide';
import CommentInput from './CommentInput';
import { IoIosArrowDown } from 'react-icons/io';
import { BsArrowLeft } from 'react-icons/bs';
import { BsArrowRight } from 'react-icons/bs';

class ClassDetail extends Component {
  constructor() {
    super();
    this.state = {
      detaildata: {},
    };
  }
  componentDidMount() {
    fetch(
      `http://localhost:3000/data/HS/ClassDetailData${this.props.match.params.id}.json`,
      {
        method: 'GET',
      }
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res.class_detail);
        this.setState({
          detaildata: res.class_detail,
        });
      });
  }

  render() {
    const { detaildata } = this.state;
    return (
      <div>
        <Nav />
        <Listpage>
          <LeftContainer>
            <LeftSide>
              <TitleContainer>
                <div className='titleBox'>
                  <span className='title'>{detaildata.class_title}</span>
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
                      <div className='previousPage'>
                        <BsArrowLeft />
                        이전 콘텐츠
                      </div>
                    </div>
                    <div>
                      <div className='nextPage'>
                        다음 콘텐츠
                        <BsArrowRight />
                      </div>
                    </div>
                  </div>
                </div>
              </TitleContainer>
              <VideoContainer>
                <iframe
                  title='hs'
                  width='830'
                  height='504'
                  src={detaildata.lecture_url}
                  frameborder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowfullscreen
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

export default ClassDetail;

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
