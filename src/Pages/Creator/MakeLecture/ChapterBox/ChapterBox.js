import React, { useState, useEffect } from 'react';
import LectureBox from './LectureBox/LectureBox';

const ChapterBox = (props) => {
  const [uploadVideo, setUploadVideo] = useState('');
  useEffect(() => {
    props.takeVideos(uploadVideo);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [uploadVideo]);

  const takeLecture = (lectureBox) => {
    props.takeResult(lectureBox);
  };

  const takeImages = (images) => {
    props.takeImages(images);
  };

  function onVideoUpload(e) {
    e.preventDefault();
    let file = e.target.files[0];
    setUploadVideo([...uploadVideo, file]);
  }

  const { giveChapter } = props;
  return (
    <>
      {giveChapter.lectures.map((lectureElement) => {
        return (
          <LectureBox
            giveLecture={lectureElement}
            takeLecture={(lectureBox) => takeLecture(lectureBox)}
            takeImages={(images) => takeImages(images)}
            takeLectureVideo={(video) => onVideoUpload(video)}
          />
        );
      })}
    </>
  );
};

export default ChapterBox;
//챕터 이름 구분
