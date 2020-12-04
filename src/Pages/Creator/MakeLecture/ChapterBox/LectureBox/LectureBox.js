import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Explanation from './Explanation/Explanation';

const LectureBox = (props) => {
  const [videoViewer, setVideoViewer] = useState('');
  const [explanationBox, setExplanationBox] = useState([{}]);
  const [explanationImage, setExplanationImage] = useState([]);

  useEffect(() => {
    const rawLectureBox = {
      lecture_id: props.giveLecture.lectureId,
      contents: explanationBox,
    };
    props.takeLecture(rawLectureBox);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [explanationBox]);

  useEffect(() => {
    props.takeImages(explanationImage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [explanationImage]);

  // const upLoadLectureVideo = (e) => {
  //   e.preventDefault();
  //   let reader = new FileReader();
  //   if (e.target.files[0]) {
  //     reader.readAsDataURL(e.target.files[0]);
  //   }
  //   reader.onloadend = () => {
  //     const rawImagePath = reader.result;
  //     const imagePath = rawImagePath.toString();
  //     setVideoViewer(imagePath);
  //   };
  // };

  const addExplanationBox = () => {
    const getExplanationBox = [...props.giveLecture.content];
    setExplanationBox(getExplanationBox.concat({}));
  };

  const takeExplanation = (explanation, explanationIndex) => {
    const getExplanationBox = [...explanationBox];
    getExplanationBox[explanationIndex] = { description: explanation };
    setExplanationBox(getExplanationBox);
  };

  function onImageUpload(e) {
    e.preventDefault();
    let file = e.target.files[0];
    setExplanationImage([...explanationImage, file]);
  }

  const takeVideo = (video) => {
    props.takeLectureVideo(video);
  };

  const { giveLecture } = props;
  return (
    <LectureContainer>
      <LectureTitle>{giveLecture.name}</LectureTitle>
      <LectureBody>
        <UploadVideoForm encType='multipart/form-data'>
          <VideoLabel htmlFor='UpLoadVideo'>
            {videoViewer ? (
              <video title='title' src={videoViewer} alt='noVideo' />
            ) : (
              <img src='/images/SH/noVideo.png' alt='novideo' />
            )}
          </VideoLabel>
          <VideoInput
            type='file'
            id='UpLoadVideo'
            multiple
            onChange={(e) => {
              takeVideo(e);
            }}
          />
        </UploadVideoForm>
        <ExplanationBox>
          {explanationBox.map((explanationElement, explanationIndex) => (
            <Explanation
              giveExplanation={explanationElement}
              takeExplanationImage={(image) => onImageUpload(image)}
              takeExplanation={(explanation) =>
                takeExplanation(explanation, explanationIndex)
              }
            />
          ))}
          <AddButton onClick={addExplanationBox}>+</AddButton>
        </ExplanationBox>
      </LectureBody>
    </LectureContainer>
  );
};

const LectureContainer = styled.form`
  width: 95%;
  padding: 20px;
  margin-bottom: 20px;
  border: 1px solid rgb(200, 200, 200);
  border-radius: 4px;
`;

const LectureTitle = styled.div`
  height: 50px;
  font-size: 20px;
  font-weight: 700;
`;

const LectureBody = styled.div`
  display: flex;
  justify-content: space-between;
`;
const UploadVideoForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 300px;
  margin: 0 20px 30px 20px;
  overflow: hidden;
  border: 1px solid rgb(200, 200, 200);
  border-radius: 10px;

  &:hover {
    border: 1px solid rgb(100, 100, 100);
  }
`;

const VideoLabel = styled.label`
  color: #ffffff;
  cursor: pointer;

  iframe {
    width: 100%;
  }
`;

const VideoInput = styled.input`
  position: absolute;
  width: 100%;
  border: 1px solid red;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: none;
  color: white;
`;

const ExplanationBox = styled.div`
  width: 35%;
  margin-bottom: 10px;
`;

const AddButton = styled.div`
  text-align: center;
  width: 95%;
  height: 30px;
  margin-bottom: 30px;
  color: rgb(70, 70, 70);
  background-color: rgb(220, 220, 220);
  border-radius: 5px;
  font-size: 25px;
  cursor: pointer;
`;
export default LectureBox;
