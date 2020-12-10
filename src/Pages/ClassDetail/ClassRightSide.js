import React from 'react';
import styled from 'styled-components';

const ClassRightSide = (props) => {
  // console.log(props.lecture_detail);
  return (
    <RightContainer>
      <RightSide>
        <CouponImg>
          <img src='/images/HS/coupon.png' alt='coupon' />
        </CouponImg>
        <LectureNote>수업 노트</LectureNote>
        <NoteImg>
          <img src='/images/HS/note.png' alt='note' />
        </NoteImg>
        <div className='Lecture'>
          <LectureObject>[수업목표]</LectureObject>
          <LectureDes>{props.detaildata.lecture_purpose}</LectureDes>
          <LectureObject>[수업개요]</LectureObject>
          {/* 여기부터~ */}
          {props.lecture_detail &&
            props.lecture_detail.map((el, idx) => {
              return (
                <LectureDes key={idx}>
                  <div>
                    <span>[{el.set_time}]</span>
                    {el.detail_des}
                  </div>
                  <div className='image'>
                    <img src={el.image_url} alt='수업개요' />
                  </div>
                </LectureDes>
              );
            })}
          {/* ~여기까지 맵 돌리는 부분 */}
          <LectureObject>[다음 수업 예고]</LectureObject>
          <LectureDes>
            준비한 바비큐 클래스의 내용은 이번 강의까지 입니다.
          </LectureDes>
        </div>
      </RightSide>
    </RightContainer>
  );
};

export default ClassRightSide;

const RightContainer = styled.div`
  width: 37%;
  height: 100vh;
  overflow-x: hidden;
  padding: 32px;
  border-left: 1px solid rgb(235, 235, 235);
`;

const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;

const CouponImg = styled.div`
  margin-bottom: 40px;
  img {
    width: 100%;
    object-fit: cover;
  }
`;

const LectureNote = styled.div`
  margin-bottom: 15px;
  font-size: 20px;
  font-weight: 700;
  line-height: 28px;
  color: #1b1c1d;
`;

const NoteImg = styled.div`
  img {
    width: 100%;
    object-fit: cover;
    margin-bottom: 20px;
  }
`;

const LectureObject = styled.div`
  font-size: 16px;
  font-weight: 700;
  letter-spacing: -0.3px;
  line-height: 24px;
  color: #1b1c1d;
`;

const LectureDes = styled.div`
  margin-bottom: 40px;
  span {
    color: #2a8fb4;
    margin-right: 8px;
  }
  img {
    width: 100%;
    object-fit: cover;
  }
`;
