import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import LectureOption from './LectureOption/LectureOption';

const Lecture = (props) => {
  const [curriculum, setCurriculum] = useState([{}]);

  useEffect(() => {
    props.takeLecture({ chapters: curriculum });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [curriculum]);

  const addChapterBox = () => {
    const getCurriculum = [...curriculum];
    setCurriculum(getCurriculum.concat({}));
  };

  const setUploadFile = (uploadImage) => {
    props.takeImages(uploadImage);
  };

  const takeChapterBox = (chapterElement, curriculumIndex) => {
    const getCurriculum = [...curriculum];
    getCurriculum[curriculumIndex] = chapterElement;
    setCurriculum(getCurriculum);
  };

  return (
    <LectureView>
      <LectureIntroduction>
        <h1>강의 커리큘럼을 구성해주세요</h1>
        <p>
          <div>커리큘럼이 잘 구분된 강의는 수업에 큰 도움이 됩니다.</div>
          <div>강의가 한눈에 들어올 수 있도록 잘 구분해 주세요.</div>
        </p>
      </LectureIntroduction>
      {curriculum.length &&
        curriculum.map((curriculumElement, curriculumIndex) => (
          <LectureOption
            key={curriculumIndex}
            curriculumList={curriculumElement}
            takeImagefile={(uploadImage) =>
              setUploadFile(uploadImage, curriculumIndex)
            }
            takeLectureOption={(chapterElement) => {
              takeChapterBox(chapterElement, curriculumIndex);
            }}
          />
        ))}
      <AddInputButton onClick={() => addChapterBox()}>+</AddInputButton>
    </LectureView>
  );
};

const LectureView = styled.form`
  padding: 50px;
`;

const LectureIntroduction = styled.div`
  margin-bottom: 30px;
  h1 {
    font-size: 25px;
    font-weight: 700;
    margin-bottom: 10px;
  }

  p {
    color: rgb(100, 100, 100);
    font-size: 14px;
    line-height: 20px;
  }
`;

const AddInputButton = styled.div`
  text-align: center;
  width: calc(90% + 60px);
  height: 30px;
  margin-bottom: 100px;
  color: rgb(70, 70, 70);
  background-color: rgb(220, 220, 220);
  border-radius: 5px;
  font-size: 25px;
  cursor: pointer;
`;

export default Lecture;
