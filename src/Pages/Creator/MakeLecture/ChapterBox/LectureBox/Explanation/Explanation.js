import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Explanation = (props) => {
  const [explanation, setExplanation] = useState([]);

  useEffect(() => {
    props.takeExplanation(explanation);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [explanation]);

  const takeImage = (image) => {
    props.takeExplanationImage(image);
  };

  return (
    <ExplanationView>
      <UploadImageBox>
        <UploadForm encType='multipart/form-data'>
          <UploadImageLabel htmlFor='chapter'>
            <img src='/images/SH/noImage.png' alt='noimage' />
          </UploadImageLabel>
          <UploadInputImage
            type='file'
            id='chapter'
            onChange={(e) => takeImage(e)}
          />
        </UploadForm>
      </UploadImageBox>
      <TextBox
        type='textarea'
        onChange={(e) => setExplanation(e.target.value)}></TextBox>
    </ExplanationView>
  );
};

const ExplanationView = styled.div`
  width: 95%;
  margin-bottom: 25px;
`;

const UploadImageBox = styled.div`
  width: 100%;
  height: 130px;
  border: 1px solid rgb(200, 200, 200);
  border-radius: 4px;
  margin-bottom: 5px;
`;

const UploadForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 130px;
  overflow: hidden;

  &:hover {
    border: 1px solid rgb(100, 100, 100);
  }
`;

const UploadImageLabel = styled.label`
  height: 130px;
  color: #ffffff;
  cursor: pointer;

  img {
    height: 100%;
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

const TextBox = styled.input`
  position: relative;
  width: calc(100% - 30px);
  height: 70px;
  padding: 0 15px;
  border: 1px solid rgb(200, 200, 200);
  border-radius: 4px;
  font-size: 14px;
  outline: none;
  -webkit-appearance: none;
`;

export default Explanation;
