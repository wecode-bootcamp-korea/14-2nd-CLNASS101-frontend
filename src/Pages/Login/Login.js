import React from 'react';
import styled from 'styled-components';

const Login = (props) => {
  const { Kakao } = window;

  function KakaoLogin() {
    Kakao.Auth.login({
      success: (auth) => {
        localStorage.setItem('access_token', auth.access_token);
      },
    });
    fetch('http://192.168.200.110:8000/user/login/kakao', {
      method: 'POST',
      headers: {
        Authorization: localStorage.getItem('access_token'),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.token) {
          console.log(result);
          localStorage.setItem('token', result.token);
          props.history.push('./', {
            name: result.name,
            profileImage: result.profileImage,
          });
        }
      });
  }

  return (
    <>
      <Background>
        <LeftConstainer>
          <LogoContainer>
            <LogoBox>
              <Logo>
                <img src='/images/SH/logo_text.png' alt='logo_text' />
              </Logo>
              <Language>
                <img src='/images/SH/global.png' alt='global' />
                <span>한국어</span>
              </Language>
            </LogoBox>
          </LogoContainer>
          <LoginForm>
            <Title>로그인</Title>
            <EmailLabel>이메일</EmailLabel>
            <InputEmail></InputEmail>
            <PasswordLabel>비밀번호</PasswordLabel>
            <InputPassWord></InputPassWord>
            <SignUp>
              <div className='findPassword'>비밀번호를 잊으셨나요?</div>
              <div className='signUp'>회원 가입하기</div>
            </SignUp>
            <LoginButton>로그인</LoginButton>
          </LoginForm>
          <SocialLogin>
            <KakaoButton onClick={KakaoLogin}>카카오로 시작하기</KakaoButton>
            <NaverButton>네이버로 시작하기</NaverButton>
            <GoogleButton>구글로 시작하기</GoogleButton>
          </SocialLogin>
          <Provision>
            <div className='text'>
              <span>이용약관, 개인정보 수집 및 이용, 개인정보 제공</span> 내용을
              확인하였고 동의합니다.
            </div>
          </Provision>
        </LeftConstainer>
        <CoverContainer>
          {/* <img src='/images/SH/coverImage.jpeg' alt='' /> */}
        </CoverContainer>
      </Background>
    </>
  );
};

const Background = styled.div`
  display: flex;
`;

const LeftConstainer = styled.div`
  display: flex;
  flex: 1 1 0%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 47vw;
  padding: 30px;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  margin-bottom: 20px;
`;

const LogoBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 378px;
  height: 46px;
`;

const Logo = styled.div`
  width: 100px;

  img {
    width: 100%;
  }
`;

const Language = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 92px;
  height: 46px;
  cursor: pointer;

  &:hover {
    background-color: rgb(240, 240, 240);
  }

  img {
    width: 14px;
    margin-right: 5px;
    opacity: 0.5;
  }

  span {
    font-size: 14px;
    opacity: 0.5;
  }
`;

const CoverContainer = styled.div`
  display: flex;
  flex: 1 1 10%;
  width: 53vw;
  height: 100vh;
  background-image: url('/images/SH/coverImage.jpeg');
  background-size: cover;
  /* width: 53%; */
  @media (max-width: 1023px) {
    display: none;
  }
`;

const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 378px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgb(220, 220, 220);
`;

const Title = styled.div`
  font-size: 32px;
  font-weight: 800;
  margin-bottom: 25px;
`;

const EmailLabel = styled.label`
  font-size: 14px;
  margin-bottom: 10px;
`;
const InputEmail = styled.input`
  height: 40px;
  border: 1px solid rgb(220, 220, 220);
  margin-bottom: 15px;

  &:focus {
    outline: 1px solid black;
  }
`;

const PasswordLabel = styled.label`
  font-size: 14px;
  margin-bottom: 10px;
`;
const InputPassWord = styled.input`
  height: 40px;
  border: 1px solid rgb(220, 220, 220);
  margin-bottom: 15px;

  &:focus {
    outline: 1px solid black;
  }
`;

const SignUp = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 11px;
  color: rgb(170, 170, 170);
  margin-bottom: 15px;
`;

const SocialLogin = styled.div`
  display: flex;
  flex-direction: column;
  width: 378px;
`;
const LoginButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  margin-bottom: 7px;
  color: white;
  background-color: #ff922b;
  border-radius: 4px;
  outline: none;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const KakaoButton = styled(LoginButton.withComponent('button'))`
  color: black;
  background-color: #ffe812;
  margin-top: 20px;
`;

const NaverButton = styled(LoginButton.withComponent('button'))`
  background-color: #00c73c;
`;
const GoogleButton = styled(LoginButton.withComponent('button'))`
  color: white;
  background-color: black;
`;

const Provision = styled.div`
  margin-top: 5px;
  font-size: 11px;
  span {
    color: #2a8fb4;
  }
`;
export default Login;
