import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { APISH } from '../../config';

const Nav = () => {
  const [myProfileURL, setMyProfileURL] = useState('');
  const [myProfileName, setMyProfileName] = useState('');
  const [handleModalSwitch, setHandleModalSwitch] = useState(false);
  const [loginStatueSwitch, setLoginStatueSwitch] = useState(false);

  useEffect(() => {
    fetch(`${APISH}`, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((result) => {
        setMyProfileURL(result.result.url);
        setMyProfileName(result.result.name);
      });
  }, [loginStatueSwitch]);

  return (
    <Navigation>
      <NavContainer>
        <NavLeftBox>
          <LogoBox>
            <img src='/images/SH/logo_text.png' alt='logo' />
          </LogoBox>
          <SerchBox>
            <input type='text' placeholder='배우고 싶은 것이 있나요?' />
            <img src='/images/SH/serchIcon.png' alt='SerchIcon' />
          </SerchBox>
        </NavLeftBox>
        {loginStatueSwitch ? (
          <NavRightBox>
            <MenuBox>
              <NavLink to={'/creator'}>
                <MenuList>크리에이터 센터</MenuList>
              </NavLink>
              <MenuList>주문 및 배송</MenuList>
              <MenuList>내 쿠폰</MenuList>
              <MenuList color='#ff922b'>내 클래스</MenuList>
            </MenuBox>
            <ProfileBox>
              <ProfileImageBox>
                <img src={myProfileURL} alt='myProfile' />
              </ProfileImageBox>
              <ProfileArrow>
                <img
                  src='/images/SH/showIcon.png'
                  alt='showIcon'
                  onClick={() => setHandleModalSwitch(!handleModalSwitch)}
                />
              </ProfileArrow>
              {handleModalSwitch === true ? (
                <ProfileModalBox>
                  <div className='miniProfileBox'>
                    <div className='miniProfileImageBox'>
                      <img src={myProfileURL} alt='miniMyProfile' />
                    </div>
                    <div className='profileInfo'>
                      <div className='profileName'>{myProfileName}</div>
                      <NavLink className='myPage' to={'/MyPage'}>
                        {'마이페이지 >'}
                      </NavLink>
                    </div>
                  </div>
                  <div
                    className='logOutBox'
                    onClick={() => {
                      setLoginStatueSwitch(!loginStatueSwitch);
                      setHandleModalSwitch(false);
                    }}>
                    로그아웃
                  </div>
                </ProfileModalBox>
              ) : null}
            </ProfileBox>
          </NavRightBox>
        ) : (
          <NavRightBox>
            <MenuBox>
              <MenuList>크리에이터 지원</MenuList>
              <NavLink to={'/login'}>
                <MenuList>
                  {/* onClick={() => setLoginStatueSwitch(!loginStatueSwitch)} */}
                  로그인
                </MenuList>
              </NavLink>
            </MenuBox>
          </NavRightBox>
        )}
      </NavContainer>
    </Navigation>
  );
};

const FlexAlignCenter = css`
  display: flex;
  align-items: center;
`;

const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 67px;
  border-bottom: 1px solid rgb(235, 235, 235);
`;

const NavContainer = styled.div`
  ${FlexAlignCenter}
  justify-content: space-between;
  width: 1178px;
  margin: 0 30px;
`;

const NavLeftBox = styled.div`
  ${FlexAlignCenter}
`;

const LogoBox = styled.div`
  width: 145px;
  height: 16px;

  img {
    height: 100%;
  }
`;

const SerchBox = styled.div`
  position: relative;
  ${FlexAlignCenter}

  input {
    width: 320px;
    height: 38px;
    padding-left: 16px;
    padding-right: 44px;
    font-size: 14px;
    color: rgb(27, 28, 29);
    background-color: rgb(255, 255, 255);
    border: 1px;
    box-shadow: 0px 0.5px 3px rgba(0, 0, 0, 0.15);
    overflow: visible;
    outline: none;
    transition: all 0.2s ease-in-out;

    &:focus {
      width: 370px;
      outline: none;
      background-color: rgb(245, 245, 245);
      box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
    }
  }

  img {
    position: absolute;
    right: 20px;
    width: 15px;
    height: 15px;
  }
`;

const NavRightBox = styled.div`
  ${FlexAlignCenter}
  justify-content: flex-end;
`;

const MenuBox = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 22px;
`;

const MenuList = styled.div`
  font-size: 14px;
  margin-right: 22px;
  color: ${(props) => props.color};
  cursor: pointer;
`;

const ProfileBox = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 54px;
  height: 38px;
`;

const ProfileImageBox = styled.div`
  width: 38px;
  height: 38px;

  img {
    width: 100%;
    border-radius: 50%;
  }
`;

const ProfileArrow = styled.button`
  ${FlexAlignCenter}
  width: 9px;
  background-color: white;
  outline: none;
  cursor: pointer;

  img {
    width: 100%;
  }
`;

const ProfileModalBox = styled.div`
  position: absolute;
  top: 57px;
  right: 0px;
  padding: 25px;
  border: 1px;
  box-shadow: 1px 2px 6px rgba(0, 0, 0, 0.3);

  .miniProfileBox {
    display: flex;
    width: 150px;
    height: 60px;
    .miniProfileImageBox {
      width: 38px;
      height: 38px;
      img {
        width: 100%;
        border-radius: 50%;
      }
    }
    .profileInfo {
      margin-left: 5px;
      .profileName {
        font-size: 14px;
        margin-bottom: 3px;
      }
      .myPage {
        font-size: 12px;
        color: #ff922b;
      }
    }
  }

  .logOutBox {
    display: flex;
    align-items: flex-end;
    width: 150px;
    height: 35px;
    border-top: 1px solid rgb(235, 235, 235);
    font-size: 14px;
    cursor: pointer;
  }
`;
export default Nav;
