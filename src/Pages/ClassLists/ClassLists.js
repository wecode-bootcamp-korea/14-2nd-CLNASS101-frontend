import React, { Component } from 'react';
import Nav from '../../Components/Nav/Nav';
import RightSideList from './RightSideList';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

import { RiArrowRightSLine } from 'react-icons/ri';
import { BiWindows } from 'react-icons/bi';

class ClassLists extends Component {
  constructor() {
    super();
    this.state = {
      lecture: {},
      curriculums: [],
      lectures: [],
    };
  }
  componentDidMount() {
    fetch(
      `http://192.168.200.130:8001/products/${this.props.match.params.id}/challenge`,
      {
        method: 'GET',
        headers: { Authorization: localStorage.getItem('token') },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res.MESSAGE);
        this.setState({
          lecture: res.MESSAGE,
          curriculums: res.MESSAGE.curriculum,
          lectures: res.MESSAGE.curriculum.lectures,
        });
      });
  }

  handleButtonClick = (curriculumId) => {
    // console.log('curriculumId: ', curriculumId);
    const { curriculums, lecture } = this.state;
    // let count = 0;
    // for (let i = 0; i < curriculums.length; i++) {
    //   if (curriculums[i].id === curriculumId) {
    //     curriculums[i].isplayed = true;
    //     count += 1;
    //   } else if (curriculums[i].isplayed) count += 1;
    // }

    let count = 0;
    const newCurriculums = curriculums.map((curriculum) => {
      if (curriculum.id === curriculumId) {
        count += 1;

        return {
          ...curriculum,
          isplayed: true,
        };
      }

      if (curriculum.isplayed) count += 1;
      return curriculum;
    });

    lecture.progress =
      count === curriculums.length
        ? 100
        : parseInt(100 / curriculums.length) * count;

    this.setState({
      curriculums: newCurriculums,
      lecture,
    });

    // fetch('api', {
    //   method: 'PATCH',
    //   body: JSON.stringify({
    //     lecture_id: curriculumId,
    //   }),
    // })
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((result) => {
    //     if (result.message === 'success') {
    //       console.log(result.message);

    //     }
    //   });
    //
  };

  render() {
    console.log(this.state.lectures);
    const { curriculums, lecture } = this.state;
    return (
      <>
        <div>
          <Nav />
        </div>
        <div className='navBox'>
          <NavContainer>
            <div className='nav'>
              <div className='navLeft'>
                <div className='myClass'>내 클래스</div>
                <div className='and'> {`>`} </div>
                <div className='classroom'>클래스 홈</div>
              </div>
              <div className='navRight'>
                <div>
                  <div>
                    소개페이지 바로가기
                    <BiWindows size='12' />
                  </div>
                </div>
                <div>
                  <div>
                    무료로 수강기간 연장하기
                    <span>
                      <RiArrowRightSLine size='12' />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </NavContainer>
        </div>
        <Listpage>
          <div className='qq'>
            <div className='leftContainer'>
              <div className='leftBox'>
                <div className='titleBox'>
                  <img src={lecture?.thumbnail} alt='섬네일이미지' />
                  <div className='title'>
                    <div className='name'>{lecture?.title}</div>
                    <div className='status'>
                      <div className='text'>
                        <div className='percentage'>
                          {lecture?.progress}% 수강중
                        </div>
                        <div className='spanDiv'>
                          <span>2021.2.28 까지</span>
                          <span>만료 88일 전</span>
                        </div>
                      </div>
                      <progress
                        className='progressTag'
                        value={lecture?.progress}
                        max='100'
                      />
                    </div>
                  </div>
                </div>
                <div className='videoBox'>
                  <video
                    title='hs'
                    width='745'
                    height='419'
                    src={lecture?.video_url}
                    alt='video'
                  />
                  <img
                    className='playButton'
                    src='/images/HS/playbuttonwhite.png'
                    alt='playbutton'
                  />
                  <div className='emptyDiv'></div>
                  <div className='videoChapter'>
                    <div className='a'>WELCOME</div>
                    <div className='b'>
                      <div className='c'>{lecture?.title}</div>
                    </div>
                  </div>
                </div>

                <Tabitem>
                  <div className='challenge'>도전</div>
                  <div className='feed'>피드</div>
                  <div className='news'>소식</div>
                </Tabitem>
                <InfoBox>
                  <div className='text'>
                    <div className='firstInfo'>클래스 1년 더 듣고싶다면?</div>
                    <div className='secondInfo'>
                      누적 수강일 30일 달성하면 클래스 연장해드려요.
                    </div>
                  </div>
                  <div className='icon'>
                    <img src='/images/HS/Calendar Icon.png' alt='img' />
                  </div>
                </InfoBox>
                <BoxContainer>
                  <div className='box1'>
                    <div className='mission'>미션 수행하기</div>
                    <div className='arrowContainer'>
                      <img src='/images/HS/arrow.png' alt='image1' />
                    </div>
                    <div className='successPoint'>성공시 2,000P</div>
                  </div>
                  <div className='box2'>
                    <div className='likeButton'>댓글에 좋아요 누르기</div>
                    <div className='heartContainer'>
                      <img src='/images/HS/heart.png' alt='image2' />
                    </div>
                    <div className='successPoint'>성공시 500P</div>
                  </div>
                  <div className='box3'>
                    <div>
                      아래 버튼을 누르시면 새로운 도전이 생길때 알려드립니다.
                    </div>
                  </div>
                </BoxContainer>
              </div>
            </div>
            <RightList>
              <div className='rightBox'>
                <div className='curriculum'>커리큘럼</div>
                {curriculums.length &&
                  curriculums.map((el, idx) => (
                    <RightSideList
                      curriculum={el}
                      key={idx}
                      getEvent={this.handleButtonClick}
                    />
                  ))}
              </div>
            </RightList>
          </div>
        </Listpage>
      </>
    );
  }
}

const NavContainer = styled.div`
  width: 100%;
  height: 67px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #f2f2f2;
  box-sizing: border-box;
  .nav {
    width: 1178px;
    margin: 0 30px;
    display: flex;
    justify-content: space-between;
    padding-right: 7px;
    box-sizing: border-box;
    .navLeft {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 14px;
      letter-spacing: -0.15px;
      color: #858a8d;

      .myClass {
        margin-right: 10px;
      }
      .and {
        font-size: 15px;
        margin-right: 10px;
      }
      .classroom {
        font-weight: 700;
        color: black;
      }
    }
    .navRight {
      display: flex;
      justify-content: center;
      align-items: center;

      color: #1b1c1d;
      font-size: 11px;
      font-weight: 600;
      letter-spacing: -0.2px;
      div {
        width: 130px;
        height: 32px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        background-color: #f8f8f9;
        span {
          position: relative;
          top: 1px;
        }
      }
    }
  }
`;

const Listpage = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .qq {
    width: 1176px;
    display: flex;
    .leftContainer {
      width: 68%;
      height: 100vh;
      overflow-x: hidden;
      border-right: 1px solid #f2f2f2;
      .leftBox {
        width: 100%;
        /* display: flex; */
        /* flex-direction: column; */
        margin-top: 40px;
        overflow-x: hidden;
        overflow-y: scroll;
        .titleBox {
          width: 745px;
          display: flex;
          height: 111px;
          margin-bottom: 32px;

          img {
            width: 148px;
            height: 111px;
            margin-right: 24px;
          }
          .title {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 573px;
            height: 111px;

            .name {
              width: 573px;
              height: 24px;
              padding: 0 24px 0 0;
              font-size: 18px;
              font-weight: 700;
              letter-spacing: -0.45;
              color: #1b1c1d;
              box-sizing: border-box;
            }
            .status {
              width: 573px;
              justify-content: center;
              align-items: center;

              .text {
                display: flex;
                justify-content: space-between;
                width: 573px;
                margin-bottom: 7px;
                color: #fd7e14;
                font-size: 18px;
                font-weight: 700;
                letter-spacing: -0.45px;

                .percentage {
                }
                .spanDiv {
                  span {
                    font-size: 10px;
                    color: lightgray;
                    text-align: center;
                    margin-right: 15px;
                  }
                }
              }
              .progressTag {
                display: flex;
                width: 573px;
              }
            }
          }
        }
        .videoBox {
          /* display: flex;
          flex-direction: column; */
          position: relative;
          width: 750px;
          height: 419px;

          .playButton {
            position: absolute;
            width: 70px;
            height: 70px;
            top: 40%;
            left: 46%;
            cursor: pointer;
          }
          .emptyDiv {
            position: absolute;
            top: 0px;
            width: 744px;
            height: 418px;
            z-index: 10;
            cursor: pointer;
          }
          .videoChapter {
            /* display: flex; */
            /* flex-direction: column; */
            position: absolute;
            width: 745px;
            height: 40px;
            bottom: 18%;
            padding: 0 30px;
            box-sizing: border-box;
            .a {
              width: 100%;
              font-size: 13px;
              font-weight: 800;
              color: white;
              line-height: 16px;
              margin-bottom: 3px;
            }
            .b {
              display: flex;
              justify-content: space-between;
              width: 100%;
              font-size: 22px;
              font-weight: 800;
              color: white;
              line-height: 16px;
              /* .interval{
              .restTime {
                font-size: 15px;
                margin-right: 7px;
              }
              .totalTime {
                font-size: 15px;
              } */
            }
          }
        }
      }
    }
  }
`;

const Tabitem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  /* width: 200px; */
  height: 50px;
  /* border: 1px solid black; */
  margin: 60px 0 30px 0;
  font-size: 18px;
  font-weight: 700;

  .challenge {
    /* height: 50px; */
    margin-right: 20px;
    border-bottom: 2px solid black;
  }
  .feed {
    margin-right: 20px;
    color: #dde0e2;
  }
  .news {
    color: #dde0e2;
  }
`;

const InfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 745px;
  height: 111px;
  margin-bottom: 32px;
  background-color: #f8f8f9;
  box-sizing: border-box;
  padding: 20px 40px;
  .text {
    .firstInfo {
      font-size: 14px;
      font-weight: 700;
      margin-bottom: 7px;
    }
    .secondInfo {
      font-size: 11px;
      color: #616568;
    }
  }
  .icon {
    img {
      width: 40px;
      height: 40px;
    }
  }
`;

const BoxContainer = styled.div`
  width: 745px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  .box1 {
    width: 240px;
    height: 200px;
    /* display: flex;
    flex-direction: column; */
    justify-content: space-between;
    /* align-items: center; */
    padding: 20px;
    background-color: #2f78ff;
    font-weight: 700;
    box-sizing: border-box;
    .mission {
      font-size: 17px;
      color: white;
    }
    .arrowContainer {
      width: 200px;
      height: 120px;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 40px;
        height: 40px;
        text-align: center;
      }
    }
    .successPoint {
      color: white;
      font-weight: 600;
      font-size: 14px;
    }
  }
  .box2 {
    width: 240px;
    height: 200px;
    /* display: flex;
    flex-direction: column; */
    justify-content: space-between;
    /* align-items: center; */
    padding: 20px;
    background-color: #f54444;
    font-weight: 700;
    box-sizing: border-box;
    .likeButton {
      font-size: 17px;
      color: white;
    }
    .heartContainer {
      width: 200px;
      height: 120px;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 40px;
        height: 40px;
        text-align: center;
      }
    }
    .successPoint {
      color: white;
      font-weight: 600;
      font-size: 14px;
    }
  }
  .box3 {
    width: 240px;
    height: 200px;
    display: flex;
    /* justify-content: center; */
    align-items: center;
    padding: 20px;
    background-color: #2f78ff;
    box-sizing: border-box;
    background-color: #f8f8f9;
    div {
      font-size: 10px;
      color: black;
    }
  }
`;

const RightList = styled.div`
  width: 32%;
  height: 100vh;
  overflow-x: hidden;
  padding: 0 0 40px 24px;
  box-sizing: border-box;
  .rightBox {
    position: relative;
    display: flex;
    flex-direction: column;
    margin-top: 40px;

    overflow-y: scroll;
    box-sizing: border-box;
    .curriculum {
      /* width: 100%; */
      position: sticky;
      height: 93px;
      padding: 25px 0 25px 0;
      /* border: 1px solid red; */
      font-size: 20px;
      font-weight: 700;
      line-height: 28px;
      box-sizing: border-box;
    }
    .chapterContainer {
      width: 90%;
      margin-bottom: 35px;
      border-bottom: 1px solid #f2f2f2;
      /* color: red; */
      .chapter {
        /* height: 80px; */
        margin: 20px 0;
        .chapterID {
          font-size: 10px;
          font-weight: 600;
          line-height: 12px;
        }
        .chapterTitle {
          font-size: 16px;
          font-weight: 700;
          line-height: 24px;
        }
      }
      .videoDetail {
        .detail {
          margin-bottom: 20px;
          font-size: 14px;
          letter-spacing: -0.15px;
          line-height: 20px;
          cursor: pointer;
          color: #1b1c1d;
          /* font-weight: 700; */
        }
        .detailBox {
          position: relative;
          display: flex;
          color: lightgray;
          font-size: 12px;
          font-weight: 500;
          margin-bottom: 10px;

          .time {
            margin-right: 11px;
            .iconTime {
              margin-right: 2px;
            }
          }
          .talk {
            margin-right: 10px;
            .iconTalk {
              margin-right: 2px;
            }
          }
          .mission {
            margin-right: 10px;
            .iconMission {
              margin-right: 2px;
            }
          }
          .imageButton {
            width: 40px;
            position: relative;
            top: -16px;
            left: 150px;
            cursor: pointer;
            img {
              width: 100%;
              opacity: 0.2;
              :hover {
                opacity: 0.7;
              }
            }
          }
          .imageButtonClick {
            width: 40px;
            position: relative;
            top: -16px;
            left: 150px;
            cursor: pointer;
            img {
              width: 100%;
              opacity: 0.7;
            }
          }
        }
      }
    }
  }
`;

export default withRouter(ClassLists);
