<<<<<<< HEAD
<<<<<<< HEAD
import React, { Component } from 'react';
import styled from 'styled-components';
import './MyPage.scss';
import { RiCoupon2Line } from 'react-icons/ri';
import { AiOutlineHeart } from 'react-icons/ai';
import { RiShoppingBasket2Line } from 'react-icons/ri';
import { RiKakaoTalkFill } from 'react-icons/ri';
import VideoCardList from './VideoCardList';
=======
import React, { Component } from "react";
import styled from "styled-components";
=======
import React, { Component } from 'react';
import styled from 'styled-components';
>>>>>>> c809a03 (ADD: 마이페이지 레이아웃)
import './MyPage.scss';
<<<<<<< HEAD
import { RiCoupon2Line } from 'react-icons/Ri';
>>>>>>> b4d81d3 (wip)

class MyPage extends Component {
  constructor() {
    super();
    this.state = {
      carditems: [],
    };
  }

  componentDidMount = () => {
    // console.log('컴디마');
    fetch('http://localhost:3000/data/HS/data.json', {
      method: 'GET',
      // headers: { authorization: localStorage.getItem('token') },
    })
      .then((res) => res.json())
      .then((res) => {
        // console.log('fetch', res);
        this.setState({
          carditems: res.classdata,
        });
      });
  };
=======
import { RiCoupon2Line } from 'react-icons/ri';
import { AiOutlineHeart } from 'react-icons/ai';
import { RiShoppingBasket2Line } from 'react-icons/ri';
import { RiKakaoTalkFill } from 'react-icons/ri';
import VideoCardList from './VideoCardList';

class MyPage extends Component {
  constructor() {
    super();
    this.state = {
      carditems: [],
    };
  }

<<<<<<< HEAD
>>>>>>> bb909cf (wip)
=======
  componentDidMount = () => {
    // console.log('컴디마');
    fetch('http://localhost:3000/data/HS/data.json', {
      method: 'GET',
      // headers: { authorization: localStorage.getItem('token') },
    })
      .then((res) => res.json())
      .then((res) => {
        // console.log('fetch', res);
        this.setState({
          carditems: res.classdata,
        });
      });
  };
>>>>>>> c809a03 (ADD: 마이페이지 레이아웃)

  render() {
    return (
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> c809a03 (ADD: 마이페이지 레이아웃)
      <>
        <Wrapper>
          <Container>
            <ProfileCard>
              <Profile>
                <img src='/images/HS/profile.png' alt='프로필이미지' />
              </Profile>
              <UserInfo>
                <UserName>안혜수</UserName>
                <RiKakaoTalkFill />
              </UserInfo>
              <UserEmail>ahnhs719@gmail.com</UserEmail>
              <PointImg>
                <img src='/images/HS/point.png' alt='coupon' />
              </PointImg>
              <Icons>
                <IconBox>
                  <RiCoupon2Line size='28' />
                  <TextBox>쿠폰 15개</TextBox>
                </IconBox>
                <IconBox>
                  <AiOutlineHeart size='28' />
                  <TextBox>찜 0개</TextBox>
                </IconBox>
                <IconBox>
                  <RiShoppingBasket2Line size='28' />
                  <TextBox>주문 내역 1개</TextBox>
                </IconBox>
              </Icons>
            </ProfileCard>

            <RightSide>
              <Class>
                <MyClass>내 클래스</MyClass>
                <AllClass>내 클래스 전체보기</AllClass>
              </Class>
              <VideoCardList carditems={this.state.carditems} />
<<<<<<< HEAD
              {/* <VideoCard>
              <div className="videoBox">
                <iframe width="250" height="200" src="https://www.youtube.com/embed/WAALoOn0bb8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen alt="비디오" />
              </div>
<<<<<<< HEAD
              <span>낭만적인 캠핑을 위한 아메리칸 바베큐 레시피</span>
              <div className='progressBox'>
                <div className='progress'>10% 수강중</div>
                <div className="barContainer">
                  <progress className="progressTag" value="10" max="100"/>
                </div>
              </div>
            </VideoCard> */}
=======
>>>>>>> fd5d9cb (wip)
            </RightSide>
          </Container>
        </Wrapper>
      </>
    );
=======
   <>
    <Wrapper>
      <Container>
        <ProfileCard>
            <Profile>
              <img src='/images/HS/profile.png' alt='프로필이미지'/>
            </Profile>
            <UserInfo>
              <UserName>안혜수</UserName>
              <RiKakaoTalkFill />
            </UserInfo>
            <UserEmail>ahnhs719@gmail.com</UserEmail>
            <PointImg>
              <img src='/images/HS/point.png' alt='coupon' />
            </PointImg>
            <Icons>
              <IconBox>
                <RiCoupon2Line size='28'/>
                <TextBox>쿠폰 15개</TextBox>
              </IconBox>
              <IconBox>
                <AiOutlineHeart size='28'/>
                <TextBox>찜 0개</TextBox>
              </IconBox>
              <IconBox>
                <RiShoppingBasket2Line size='28'/>
                <TextBox>주문 내역 1개</TextBox>
              </IconBox>
            </Icons>
        </ProfileCard>

        <RightSide>
          <Class>
            <MyClass>내 클래스</MyClass>
            <AllClass>내 클래스 전체보기</AllClass>
          </Class>
          <ListBox>
            <VIDEO>
              <video controls>
                <source src='/images/HS/오트랑나나.mp4'></source>
              </video>
=======
>>>>>>> c809a03 (ADD: 마이페이지 레이아웃)
              <span>낭만적인 캠핑을 위한 아메리칸 바베큐 레시피</span>
              <div className='progressBox'>
                <div className='progress'>10% 수강중</div>
                <div className="barContainer">
                  <progress className="progressTag" value="10" max="100"/>
                </div>
              </div>
<<<<<<< HEAD
            </VIDEO>
          </ListBox>
        </RightSide>
     </Container>
    </Wrapper>
   </>
    )
>>>>>>> b4d81d3 (wip)
=======
            </VideoCard> */}
            </RightSide>
          </Container>
        </Wrapper>
      </>
    );
>>>>>>> c809a03 (ADD: 마이페이지 레이아웃)
  }
}
const Wrapper = styled.div`
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> c809a03 (ADD: 마이페이지 레이아웃)
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;
<<<<<<< HEAD
const Container = styled.div`
  width: 1176px;
  display: flex;
  justify-content: space-between;

  /* align-items: center; */
`;

const ProfileCard = styled.div`
  width: 362px;
  height: 360px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border: 1px solid lightgray; */
  border-radius: 8px;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.11);
`;

const Profile = styled.div`
  width: 80px;
  height: 80px;
  img {
    width: 100%;
  }
`;

const Class = styled.div`
  width: 776px;
  height: 45px;
  display: flex;
  justify-content: space-between;
  /* border: 1px solid lightgray; */
  /* margin: 30px 10px 0px 30px; */
  /* padding: 13px 10px 0 13px; */
  box-sizing: border-box;
  cursor: pointer;
`;

const MyClass = styled.span`
  width: 120px;
  height: 20px;
  font-weight: 700;
  font-size: 18px;
  padding: 12px;
`;

const AllClass = styled.span`
  width: 120px;
  height: 20px;
  font-size: 14px;
  color: #aab0b4;
  text-align: center;
  padding: 12px;
`;
const UserInfo = styled.div`
  display: flex;
`;
const UserName = styled.div`
  width: 50px;
  text-align: center;
  font-weight: 700;
`;
const UserEmail = styled.div`
  width: 200px;
  text-align: center;
  color: gray;
  font-size: 12px;
  letter-spacing: -1;
  margin-top: 5px;
`;
const PointImg = styled.div`
  width: 90px;
  height: 40px;
  margin: 15px 0 30px 0;
  img {
    width: 90px;
    height: 40px;
  }
`;

const Icons = styled.div`
  width: 260px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const IconBox = styled.div`
  width: 105px;
  height: 47px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const TextBox = styled.div`
  height: 15px;
  font-size: 11px;
  font-weight: 500;
  padding-top: 10px;
`;
const RightSide = styled.div`
  width: 778px;
  /* margin: 30px 10px 0px 30px; */
`;

// const VideoCard = styled.div `
// width: 250px;
// height: 280px;
//   video {
//   width: 250px;;
//   height: 180px;
//   overflow: hidden;
//   margin-bottom: 10px;
// }

// span {
//   font-size: 14px;
// }
// .progressBox{
//   .progress {
//     font-size: 11px;
//     color: #fd7e13;
//     margin: 15px 0 5px 0;
//   }

//   .barContainer {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     width:100%;

//     .progressTag {
//       width:100%;
//       margin:0px;
//       padding:0px;

//       .css-progressbar {
//         width: 30%;
//         -moz-animation: css-progressbar 2s ease-out;
//         -webkit-animation: css-progressbar 2s ease-out;
//       }
//     }
//   }
// }
// `
=======
width: 100%;
display: flex;
justify-content: center;
align-items: center;
margin-top: 40px;
`
=======
>>>>>>> c809a03 (ADD: 마이페이지 레이아웃)
const Container = styled.div`
  width: 1176px;
  display: flex;
  justify-content: space-between;

  /* align-items: center; */
`;

const ProfileCard = styled.div`
  width: 362px;
  height: 360px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border: 1px solid lightgray; */
  border-radius: 8px;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.11);
`;

const Profile = styled.div`
  width: 80px;
  height: 80px;
  img {
    width: 100%;
  }
`;

const Class = styled.div`
  width: 776px;
  height: 45px;
  display: flex;
  justify-content: space-between;
  /* border: 1px solid lightgray; */
  /* margin: 30px 10px 0px 30px; */
  /* padding: 13px 10px 0 13px; */
  box-sizing: border-box;
  cursor: pointer;
`;

const MyClass = styled.span`
  width: 120px;
  height: 20px;
  font-weight: 700;
  font-size: 18px;
  padding: 12px;
`;

const AllClass = styled.span`
  width: 120px;
  height: 20px;
  font-size: 14px;
  color: #aab0b4;
  text-align: center;
  padding: 12px;
`;
const UserInfo = styled.div`
  display: flex;
`;
const UserName = styled.div`
  width: 50px;
  text-align: center;
  font-weight: 700;
`;
const UserEmail = styled.div`
  width: 200px;
  text-align: center;
  color: gray;
  font-size: 12px;
  letter-spacing: -1;
  margin-top: 5px;
`;
const PointImg = styled.div`
  width: 90px;
  height: 40px;
<<<<<<< HEAD
}
`
>>>>>>> b4d81d3 (wip)

const Icons = styled.div `
width: 260px;
display: flex;
justify-content: space-between;
align-items: center;
`

const IconBox = styled.div `
width: 105px;
height: 47px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
cursor: pointer;
`
=======
  margin: 15px 0 30px 0;
  img {
    width: 90px;
    height: 40px;
  }
`;

const Icons = styled.div`
  width: 260px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const IconBox = styled.div`
  width: 105px;
  height: 47px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
>>>>>>> c809a03 (ADD: 마이페이지 레이아웃)

const TextBox = styled.div`
  height: 15px;
  font-size: 11px;
  font-weight: 500;
  padding-top: 10px;
`;
const RightSide = styled.div`
  width: 778px;
  /* margin: 30px 10px 0px 30px; */
`;

// const VideoCard = styled.div `
// width: 250px;
// height: 280px;
//   video {
//   width: 250px;;
//   height: 180px;
//   overflow: hidden;
//   margin-bottom: 10px;
// }

// span {
//   font-size: 14px;
// }
// .progressBox{
//   .progress {
//     font-size: 11px;
//     color: #fd7e13;
//     margin: 15px 0 5px 0;
//   }

//   .barContainer {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     width:100%;

//     .progressTag {
//       width:100%;
//       margin:0px;
//       padding:0px;

//       .css-progressbar {
//         width: 30%;
//         -moz-animation: css-progressbar 2s ease-out;
//         -webkit-animation: css-progressbar 2s ease-out;
//       }
//     }
//   }
// }
// `

export default MyPage;
