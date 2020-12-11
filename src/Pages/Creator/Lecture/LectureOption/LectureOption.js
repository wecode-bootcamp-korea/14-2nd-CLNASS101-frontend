import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const LectureOption = (props) => {
  const [chapterBox, setChapterBox] = useState();
  const [uploadImage, setUploadImage] = useState([]);
  const [imageViewer, setImageViewer] = useState([]);
  const [chapterTitle, setChapterTitle] = useState('');
  const [LectureList, setLectureTitleList] = useState([{ name: '' }]);

  useEffect(() => {
    const rawChapterBox = {
      name: chapterTitle,
      lectures: LectureList,
    };
    setChapterBox(rawChapterBox);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chapterTitle, LectureList]);

  useEffect(() => {
    props.takeLectureOption(chapterBox);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chapterBox]);

  useEffect(() => {
    props.takeImagefile(uploadImage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [uploadImage]);

  const onChangeImage = (e) => {
    e.preventDefault();
    let file = e.target.files[0];
    setUploadImage([...uploadImage, file]);
  };

  const onChangeViewerImage = (e) => {
    let reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
      reader.onloadend = () => {
        const imageUrl = reader.result;
        setImageViewer(imageUrl.toString());
      };
    }
  };

  const onChangeChapterTitle = (e) => {
    setChapterTitle(e.target.value);
  };

  const onChangeLectureIitleList = (e, lectureIndex) => {
    const getLectureList = [...LectureList];
    getLectureList[lectureIndex].name = e.target.value;
    setLectureTitleList(getLectureList);
  };

  const addLectureBox = () => {
    const getLectureList = [...LectureList];
    const lectureBox = {};
    getLectureList.push(lectureBox);
    setLectureTitleList(getLectureList);
  };

  const deleteLectureBox = (index) => {
    const getLectureList = [...LectureList];
    const filterLecture = getLectureList.filter(
      (lectureElement) => lectureElement !== getLectureList[index]
    );
    setLectureTitleList(filterLecture);
  };

  return (
    <>
      <InputBox>
        <UploadImageBox>
          <UploadForm method='post' encType='multipart/form-data'>
            <UploadImageLabel htmlFor='chapter'>
              <img
                src={
                  imageViewer.length ? imageViewer : '/images/SH/noImage.png'
                }
                alt='noimage'
              />
            </UploadImageLabel>
            <UploadInputImage
              type='file'
              id='chapter'
              onChange={(e) => {
                onChangeImage(e);
                onChangeViewerImage(e);
              }}
            />
          </UploadForm>
        </UploadImageBox>
        <InputChapterBox>
          <p>
            챕터명 <span>( ex : 양식 만들기 )</span>
          </p>
          <InputChapterTitle
            onChange={(e) => onChangeChapterTitle(e)}></InputChapterTitle>
          <InputLectureFlexBox>
            {LectureList.map((_, lectureIndex) => (
              <InputLectureBox>
                <p>
                  강의명 <span>( ex : 스페니쉬 오믈렛 만드는 방법 )</span>
                </p>
                <InputLectureTitle
                  onChange={(e) =>
                    onChangeLectureIitleList(e, lectureIndex)
                  }></InputLectureTitle>
                <DeleteBox onClick={() => deleteLectureBox(lectureIndex)}>
                  x
                </DeleteBox>
              </InputLectureBox>
            ))}
            <AddLectureButton onClick={addLectureBox}>+</AddLectureButton>
          </InputLectureFlexBox>
        </InputChapterBox>
      </InputBox>
    </>
  );
};

const InputBox = styled.div`
  display: flex;
  width: 90%;
  padding: 30px;
  margin-bottom: 20px;
  border: 1px solid rgb(200, 200, 200);
  border-radius: 5px;
  p {
    font-size: 13px;
    margin-bottom: 5px;

    span {
      color: gray;
    }
  }
`;

const UploadImageBox = styled.div`
  width: 210px;
  height: 190px;
`;

const UploadForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border: 1px solid rgb(200, 200, 200);
  border-radius: 10px;

  &:hover {
    border: 1px solid rgb(100, 100, 100);
  }
`;

const UploadImageLabel = styled.label`
  color: #ffffff;
  cursor: pointer;

  img {
    width: 100%;
  }
`;

const UploadInputImage = styled.input`
  border: 1px solid red;
  position: absolute;
  width: 100%;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: none;
  color: white;
`;

const InputChapterBox = styled.div`
  width: 80%;
  margin-left: 50px;
`;

const InputChapter = styled.input`
  position: relative;
  width: calc(100% - 30px);
  height: 30px;
  padding: 0 15px;
  margin-bottom: 10px;
  border: 1px solid rgb(200, 200, 200);
  border-radius: 5px;
  font-size: 14px;
  outline: none;
  -webkit-appearance: none;

  &:focus,
  :hover {
    border: 1px solid rgb(100, 100, 100);
  }
`;

const InputChapterTitle = styled(InputChapter.withComponent('input'))`
  height: 30px;
  margin-bottom: 20px;
`;

const InputLectureFlexBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputLectureBox = styled.div`
  position: relative;
  width: calc(100% - 40px);
  margin-bottom: 5px;
  padding: 10px 20px;
  background-color: rgb(245, 245, 245);
  border-radius: 5px;
`;

const AddLectureButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30px;
  color: rgb(70, 70, 70);
  background-color: rgb(220, 220, 220);
  border-radius: 5px;
  font-size: 25px;
  cursor: pointer;
`;

const InputLectureTitle = styled(InputChapter.withComponent('input'))`
  width: calc(100% - 35px);
  height: 30px;
`;

const DeleteBox = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  right: 0;
  width: 30px;
  height: 30px;
  color: rgb(100, 100, 100);
  font-family: 'Trebuchet MS', sans-serif;
  cursor: pointer;
`;

export default LectureOption;
