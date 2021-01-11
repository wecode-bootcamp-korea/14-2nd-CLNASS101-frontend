import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Introdoce = (props) => {
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [difficulty, serDifficulty] = useState([]);
  const [firstUploadImage, setfirstUploadImage] = useState('');
  const [secondUploadImage, setSecondUploadImage] = useState('');
  const [thirdUploadImage, setThirdUploadImage] = useState('');
  const [files, setFiles] = useState([]);

  useEffect(() => {
    props.getUploadImage(files);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [files]);

  useEffect(() => {
    fetch('http://192.168.0.6:8000/creator/1/first', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((result) => {
        setCategory(result.categories);
        serDifficulty(result.difficulties);
      });
  }, []);

  function onFileUpload(event) {
    event.preventDefault();
    let file = event.target.files[0];
    setFiles([...files, file]);
  }

  const getSubCategory = (e) => {
    const filterCategory = category.filter(
      (categoryElement) => categoryElement.name === e.target.value
    )[0].subCategories;
    setSubCategory(filterCategory);
  };

  const upLoadFirstImage = (e) => {
    let reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
      reader.onloadend = () => {
        const imageUrl = reader.result;
        setfirstUploadImage(imageUrl.toString());
        props.getFirstImage(imageUrl.toString());
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
    <IntroduceView>
      <Introduction>
        <h1>카테고리를 선택 해주세요</h1>
        <p>
          <div>언젠가 이런 걸 가르쳐봐야지 생각해본 적이 있으신가요?</div>
          <div>
            간단히 크리에이터님이 알려 줄 수 있는 카테고리를 설정해봐요.
          </div>
          <div>모든 수정 사항은 즉시 저장되니 안심해 주세요.</div>
        </p>
      </Introduction>
      <SelectBox>
        <div>카테고리</div>
        <SelectCategory
          onChange={(e) => {
            getSubCategory(e);
            props.getSelectedCategory(e);
          }}>
          <option hidden selected disabled>
            클래스 분야를 선택해주세요.
          </option>
          {category &&
            category.map((categoryElement, categoryIndex) => (
              <option
                key={categoryIndex}
                id={categoryElement.id}
                value={categoryElement.name}>
                {categoryElement.name}
              </option>
            ))}
        </SelectCategory>
        <div>서브 카테고리</div>
        <SelectSubCategory onChange={(e) => props.getSelectedSubCategory(e)}>
          <option hidden selected disabled>
            세부 카테고리를 선택해주세요.
          </option>
          {subCategory &&
            subCategory.map((subCategoryElement, subCategoryIndex) => (
              <option key={subCategoryIndex} value={subCategoryElement.name}>
                {subCategoryElement.name}
              </option>
            ))}
        </SelectSubCategory>
        <div>클래스 난이도</div>
        <SelectDifficulty onChange={(e) => props.getSelectedDifficulty(e)}>
          <option hidden selected disabled>
            어떤 수강생에게 맞는 난이도인지 선택해주세요.
          </option>
          {difficulty &&
            difficulty.map((subCategoryElement, subCategoryIndex) => (
              <option key={subCategoryIndex} value={subCategoryElement.name}>
                {subCategoryElement.name}
              </option>
            ))}
        </SelectDifficulty>
      </SelectBox>
      <SelectPriceBox>
        <div className='title'>클래스 정보를 입력해주세요</div>
        <ProductIntroduction>
          <div>
            상품에 적절한 가격을 선정해주세요. 적절한 가격 선정이 고민된다면
            기존의 상품들을 참고하시는 것도 좋습니다.
          </div>
          <div>
            가격 선정에 대한 더 자세한 내용을 보고 싶다면,{' '}
            <span>기본 정보 작성 가이드</span>를 확인해 주세요.
          </div>
        </ProductIntroduction>
        <div className='category'>클래스 이름</div>
        <SelectPrice
          type='text'
          onChange={(e) => props.getSelectedClassName(e)}></SelectPrice>
        <div className='category'>클래스 이용권 가격</div>
        <SelectPrice
          type='number'
          onChange={(e) => props.getSelectedPrice(e)}></SelectPrice>
        <div className='category'>할인율</div>
        <SelectPrice
          type='number'
          onChange={(e) => props.getSelectedDiscount(e)}></SelectPrice>
        <div className='category'>대표사진</div>
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
          </FirstForm>
          <SecondForm encType='multipart/form-data'>
            <SecondLabel htmlFor='secondUpLoad'>
              <img
                src={
                  secondUploadImage
                    ? secondUploadImage
                    : '/images/SH/noImage.png'
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
          </ThirdForm>
        </SelectFileBox>
      </SelectPriceBox>
    </IntroduceView>
  );
};

const IntroduceView = styled.form`
  padding: 50px;
`;

const Introduction = styled.div`
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

const SelectBox = styled.div`
  div {
    font-size: 14px;
    margin-bottom: 5px;
  }
`;

const SelectCategory = styled.select`
  position: relative;
  width: 100%;
  height: 50px;
  padding: 0 15px;
  margin-bottom: 20px;
  border: 1px solid rgb(200, 200, 200);
  border-radius: 5px;
  font-size: 14px;
  outline: none;
  -webkit-appearance: none;
  background-image: url('/images/SH/showIcon.png');
  background-repeat: no-repeat;
  background-position: right 16px center;
  background-size: 15px;

  &:focus,
  :hover {
    border: 1px solid rgb(100, 100, 100);
  }
`;

const SelectSubCategory = styled(SelectCategory.withComponent('select'))``;

const SelectDifficulty = styled(SelectCategory.withComponent('select'))`
  margin-bottom: 50px;
`;

const SelectPriceBox = styled.div`
  margin-bottom: 100px;
  .title {
    font-size: 25px;
    font-weight: 700;
    margin-bottom: 10px;
  }

  .category {
    font-size: 14px;
    margin-bottom: 8px;
  }
`;
const ProductIntroduction = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  margin-bottom: 25px;
  color: rgb(100, 100, 100);
  background-color: rgb(245, 245, 245);
  font-size: 14px;
  line-height: 20px;

  span {
    color: #3e98b7;
  }
`;

const SelectPrice = styled.input`
  width: 98%;
  height: 40px;
  padding-left: 15px;
  margin-bottom: 20px;
  border: 1px solid rgb(200, 200, 200);
  border-radius: 5px;
  font-size: 15px;
  font-weight: 500;
  outline: none;

  &:focus,
  :hover {
    border: 1px solid rgb(100, 100, 100);
  }
`;

const SelectFileBox = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const FirstForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32%;
  height: 160px;
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

export default Introdoce;
