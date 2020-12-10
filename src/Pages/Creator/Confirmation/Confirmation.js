import React from 'react';
import styled from 'styled-components';

const Confirmation = () => {
  return (
    <ConfirmationView>
      <ConfirmationIntroduction>
        <h1>클래스 개설 전 주의사항</h1>
        <p>
          <RangeButton>클릭</RangeButton>
          <div>
            1. 강의 영상의 저작권은 없으므로 무단 배포시 운정님한테 혼납니다.
          </div>
          <div>2. 강의 영상을 캡처 또는 녹화하는 경우 준식님한테 혼납니다.</div>
          <div>
            3. 세개는 써야 있어보이는데, 할말이 없어서 아무말이나 씁니다.
          </div>
          <iframe
            src='https://clnass101.s3.ap-northeast-2.amazonaws.com/videos/c90b18df-71fa-4727-a675-089d07e52caf?start=200'
            autoplay='autoplay'></iframe>
        </p>
      </ConfirmationIntroduction>
    </ConfirmationView>
  );
};

const RangeButton = styled.button``;
const ConfirmationView = styled.form`
  margin: 80px;
  padding: 80px;
  width: 70%;
  height: 40vh;
  border: 1px solid rgb(200, 200, 200);
  background-color: rgb(250, 250, 250);
  border-radius: 10px;
`;

const ConfirmationIntroduction = styled.div`
  margin-bottom: 30px;
  h1 {
    font-size: 25px;
    font-weight: 700;
    margin-bottom: 50px;
  }

  p {
    color: rgb(100, 100, 100);
    font-size: 20px;
    line-height: 30px;
  }
`;

export default Confirmation;
