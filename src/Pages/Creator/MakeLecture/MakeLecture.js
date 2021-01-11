import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ChapterBox from './ChapterBox/ChapterBox';

const MakeLecture = (props) => {
  const [result, setResult] = useState('');
  const [makeLecture, setMakeLecture] = useState([]);

  useEffect(() => {
    fetch('http://192.168.0.6:8000/creator/1/third', {
      headers: {
        authorization: localStorage.getItem('token'),
      },
      method: 'GET',
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setResult(result.products);
      });
  }, []);

  const takeResult = (lecture, chapterIndex) => {
    const getResult = [...makeLecture];
    getResult[chapterIndex] = lecture;
    setMakeLecture(getResult);
  };

  useEffect(() => {
    props.takeResult({ lectures: makeLecture });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [makeLecture]);

  const takeImages = (images) => {
    props.takeImages(images);
  };

  const takeVideos = (videos) => {
    props.takeVideos(videos);
  };

  return (
    <MakeLectureView>
      <MakeLectureIntroduction>
        <h1>강의를 만들어주세요</h1>
        <p>
          <div>각각의 강의에 보여지게 될 영상을 업로드 해주세요.</div>
          <div>강의 영상을 도와줄 사진과 설명을 입력해주세요.</div>
        </p>
      </MakeLectureIntroduction>
      {result.length &&
        result.map((chapterElement, chapterIndex) => (
          <FlexChapterBox>
            <ChapterBox
              giveChapter={chapterElement}
              takeImages={(images) => takeImages(images)}
              takeVideos={(video) => takeVideos(video)}
              takeResult={(lecture) => takeResult(lecture, chapterIndex)}
            />
          </FlexChapterBox>
        ))}
    </MakeLectureView>
  );
};

const MakeLectureView = styled.form`
  padding: 50px;
`;

const MakeLectureIntroduction = styled.div`
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

const FlexChapterBox = styled.div`
  margin-bottom: 80px;
`;
export default MakeLecture;
