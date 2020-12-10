import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Kit = (props) => {
  const [firstInputText, setFirstInputText] = useState('');
  const [secondInputText, setSecondInputText] = useState('');
  const [thirdInputText, setThirdInputText] = useState('');
  const [firstUploadImage, setfirstUploadImage] = useState('');
  const [secondUploadImage, setSecondUploadImage] = useState('');
  const [thirdUploadImage, setThirdUploadImage] = useState('');
  const [files, setFiles] = useState([]);

  useEffect(() => {
    props.takeKitImage(files);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [files]);

  useEffect(() => {
    props.takeKitName({
      kits: [
        { name: firstInputText },
        { name: secondInputText },
        { name: thirdInputText },
      ],
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [firstInputText, secondInputText, thirdInputText]);

  function onFileUpload(event) {
    event.preventDefault();
    let file = event.target.files[0];
    setFiles([...files, file]);
  }

  const upLoadFirstImage = (e) => {
    let reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
      reader.onloadend = () => {
        const imageUrl = reader.result;
        setfirstUploadImage(imageUrl.toString());
      };
    }
  };

  const upLoadSecondImage = (e) => {
    let reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
      reader.onloadend = () => {
        const imageUrl = reader.result;
        setSecondUploadImage(imageUrl.toString());
      };
    }
  };

  const upLoadThirdImage = (e) => {
    let reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
      reader.onloadend = () => {
        const imageUrl = reader.result;
        setThirdUploadImage(imageUrl.toString());
      };
    }
  };

  return (
    <KitView>
      <KitIntroduction>
        <h1>키트를 구성해주세요</h1>
        <p>
          <div>강의에 적합한 키트로 선정해주세요.</div>
          <div>좋은 키트는 강의를 더욱 즐겁게 해줍니다.</div>
        </p>
      </KitIntroduction>
      <SelectFileBox>
        <FirstForm method='post' encType='multipart/form-data'>
          <FirstLabel htmlFor='firstUpLoad'>
            <img
              src={
                firstUploadImage ? firstUploadImage : '/images/SH/noImage.png'
              }
              alt='noimage'
            />
          </FirstLabel>
          <FirstInput
            type='file'
            id='firstUpLoad'
            onChange={(e) => {
              onFileUpload(e);
              upLoadFirstImage(e);
            }}
          />
          <FirstInputText
            type='text'
            placeholder='키트 이름을 입력해주세요'
            onChange={(e) => setFirstInputText(e.target.value)}
          />
        </FirstForm>
        <SecondForm encType='multipart/form-data'>
          <SecondLabel htmlFor='secondUpLoad'>
            <img
              src={
                secondUploadImage ? secondUploadImage : '/images/SH/noImage.png'
              }
              alt='noimage'
            />
          </SecondLabel>
          <SecondInput
            type='file'
            id='secondUpLoad'
            onChange={(e) => {
              onFileUpload(e);
              upLoadSecondImage(e);
            }}
          />
          <SecondInputText
            type='text'
            placeholder='키트 이름을 입력해주세요'
            onChange={(e) => setSecondInputText(e.target.value)}
          />
        </SecondForm>
        <ThirdForm encType='multipart/form-data'>
          <ThirdLabel htmlFor='thirdUpLoad'>
            <img
              src={
                thirdUploadImage ? thirdUploadImage : '/images/SH/noImage.png'
              }
              alt='noimage'
            />
          </ThirdLabel>
          <ThirdInput
            type='file'
            id='thirdUpLoad'
            onChange={(e) => {
              onFileUpload(e);
              upLoadThirdImage(e);
            }}
          />
          <ThirdInputText
            type='text'
            placeholder='키트 이름을 입력해주세요'
            onChange={(e) => setThirdInputText(e.target.value)}
          />
        </ThirdForm>
      </SelectFileBox>
    </KitView>
  );
};

const KitView = styled.form`
  padding: 50px;
`;

const KitIntroduction = styled.div`
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

const SelectFileBox = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const FirstForm = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 32%;
  height: 500px;
  overflow: hidden;
  border: 1px solid rgb(200, 200, 200);
  border-radius: 10px;

  &:hover {
    border: 1px solid rgb(100, 100, 100);
  }
`;

const SecondForm = styled(FirstForm.withComponent('form'))``;

const ThirdForm = styled(FirstForm.withComponent('form'))``;

const FirstLabel = styled.label`
  height: 100%;
  color: #ffffff;
  cursor: pointer;

  img {
    width: 100%;
  }
`;

const SecondLabel = styled(FirstLabel.withComponent('label'))``;

const ThirdLabel = styled(FirstLabel.withComponent('label'))``;

const FirstInput = styled.input`
  border: 1px solid red;
  position: absolute;
  width: 100%;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: none;
  color: white;
`;

const SecondInput = styled(FirstInput.withComponent('input'))``;

const ThirdInput = styled(FirstInput.withComponent('input'))``;

const FirstInputText = styled.input`
  position: absolute;
  top: 430px;
  text-align: center;
  width: 80%;
  height: 30px;
  border: 1px solid rgb(200, 200, 200);
  border-radius: 3px;
  &:focus {
    outline: none;
  }
`;

const SecondInputText = styled(FirstInputText.withComponent('input'))``;

const ThirdInputText = styled(FirstInputText.withComponent('input'))``;

export default Kit;
