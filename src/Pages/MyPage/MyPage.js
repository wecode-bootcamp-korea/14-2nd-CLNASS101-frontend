import React, { Component } from 'react';
import styled from 'styled-components';
import { css } from 'styled-components';
import { RiCoupon2Line } from 'react-icons/ri';
import { AiOutlineHeart } from 'react-icons/ai';
import { RiShoppingBasket2Line } from 'react-icons/ri';
import { RiKakaoTalkFill } from 'react-icons/ri';
import VideoCardList from './VideoCardList';
import Nav from '../../Components/Nav/Nav';
class MyPage extends Component {
  constructor() {
    super();
    this.state = {
      mypage: {},
    };
  }

  componentDidMount = () => {
    fetch('http://localhost:3000/data/HS/data.json', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          mypage: res.mypage,
        });
      });
  };

  render() {
    const { mypage } = this.state;
    return (
      <>
        <Nav />
        <Wrapper>
          <Container>
            <ProfileCard>
              <Profile>
                <img src='/images/HS/profile.png' alt='프로필이미지' />
              </Profile>
              <UserInfo>
                <UserName>{mypage?.user_name}</UserName>
                <RiKakaoTalkFill />
              </UserInfo>
              <UserEmail>{mypage?.user_email}</UserEmail>
              <PointImg>
                <img src='/images/HS/point.png' alt='coupon' />
              </PointImg>
              <Icons>
                <IconBox>
                  <RiCoupon2Line size='28' />
                  <TextBox>{mypage?.coupon}개</TextBox>
                </IconBox>
                <IconBox>
                  <AiOutlineHeart size='28' />
                  <TextBox>찜 0개</TextBox>
                </IconBox>
                <IconBox>
                  <RiShoppingBasket2Line size='28' />
                  <TextBox>주문 내역 {mypage?.cart_history}개</TextBox>
                </IconBox>
              </Icons>
            </ProfileCard>

            <RightSide>
              <Class>
                <MyClass>내 클래스</MyClass>
                <AllClass>내 클래스 전체보기</AllClass>
              </Class>
              <VideoCardList mypage={this.state.mypage} />

              <Class>
                <MyClass>최근 본 클래스</MyClass>
                <AllClass>전체보기</AllClass>
              </Class>
              <Class>
                <MyClass>내가 등록한 클래스</MyClass>
                <AllClass>전체보기</AllClass>
              </Class>
            </RightSide>
          </Container>
        </Wrapper>
      </>
    );
  }
}
const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 100%;
  ${flexCenter};
  margin-top: 40px;
`;
const Container = styled.div`
  width: 1176px;
  display: flex;
  justify-content: space-between;
`;

const ProfileCard = styled.div`
  width: 362px;
  height: 360px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  box-sizing: border-box;
  cursor: pointer;
`;

const MyClass = styled.span`
  width: 150px;
  height: 20px;
  font-weight: 700;
  font-size: 18px;
  padding: 12px;
`;

const AllClass = styled.span`
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
`;

export default MyPage;
