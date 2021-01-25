import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import Introduce from './Introduce/Introduce';
import Lecture from './Lecture/Lecture';
import MakeLecture from './MakeLecture/MakeLecture';
import Kit from './Kit/Kit';
import Confirmation from './Confirmation/Confirmation';

const Creator = () => {
  const [selectedPage, setSelectedPage] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubCategory, setSelectedSubCategory] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('');
  const [selectedClassName, setSelectedClassName] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');
  const [selectedDiscount, setSelectedDiscount] = useState('');
  const [uploadFirstImage, setUploadFirstImage] = useState();
  const [files, setFiles] = useState([]);
  const [selectedLecture, setSelectedLecture] = useState([{}]);
  const [lecturefiles, setLecturefiles] = useState([]);
  const [makeLecture, setMakeLecture] = useState([]);
  const [lectureImage, setLectureImage] = useState([]);
  const [lectureVideo, setLectureVideo] = useState([]);
  const [kitnames, setKitnames] = useState([]);
  const [kitImage, setKitImage] = useState([]);

  const postTemporaryInfomation = () => {
    if (selectedPage === 0) {
      const temp = JSON.stringify({
        categoryName: selectedCategory,
        subCategoryName: selectedSubCategory,
        difficultyName: selectedDifficulty,
        name: selectedClassName,
        price: selectedPrice,
        sale: selectedDiscount / 100,
      });
      let formData = new FormData();
      formData.append('body', temp);
      for (let i = 0; i < files.length; i++) {
        formData.append('files', files[i]);
      }
      formData.append('files', files);
      fetch('http://192.168.0.6:8000/creator/1/first', {
        headers: {
          authorization: localStorage.getItem('token'),
        },
        method: 'POST',
        body: formData,
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
        });
    } else if (selectedPage === 2) {
      const temp = JSON.stringify(makeLecture);
      let formData = new FormData();
      formData.append('body', temp);
      for (let i = 0; i < lectureImage.length; i++) {
        formData.append('images', lectureImage[i]);
      }
      for (let j = 0; j < lectureVideo.length; j++) {
        formData.append('videos', lectureVideo[j]);
      }
      fetch('http://192.168.0.6:8000/creator/1/third', {
        headers: {
          authorization: localStorage.getItem('token'),
        },
        method: 'POST',
        body: formData,
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
        });
    } else if (selectedPage === 3) {
      const temp = JSON.stringify(kitnames);
      let formData = new FormData();
      formData.append('body', temp);
      for (let k = 0; k < kitImage.length; k++) {
        formData.append('files', kitImage[k]);
      }
      for (var value of formData.values()) {
        console.log(value);
      }

      for (var key of formData.keys()) {
        console.log(key);
      }
      fetch('http://192.168.0.6:8000/creator/1/fourth', {
        headers: {
          authorization: localStorage.getItem('token'),
        },
        method: 'POST',
        body: formData,
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
        });
    }
  };

  const temporary = () => {
    const temp = JSON.stringify(selectedLecture);
    let formData = new FormData();
    formData.append('body', temp);
    for (let i = 0; i < lecturefiles.length; i++) {
      formData.append('files', lecturefiles[i]);
    }
    fetch('http://192.168.0.6:8000/creator/1/second', {
      headers: {
        authorization: localStorage.getItem('token'),
      },
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };

  const complete = () => {
    fetch('http://192.168.0.6:8000/creator/1/create', {
      headers: {
        authorization: localStorage.getItem('token'),
      },
      method: 'POST',
      body: { user_id: 1 },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };

  return (
    <CreatorView>
      <Titlebar>
        <LogoBox>
          <img src='/images/SH/creatorLogo.png' alt='creatorLogo' />
        </LogoBox>
        <Title>클래스 개설하기</Title>
        <Completeness>{selectedPage * 25 + '%'}</Completeness>
        <ExitButton>
          <div>나가기</div>
        </ExitButton>
      </Titlebar>
      <MainContainer>
        <AsidBar>
          <AsidMenu>
            {MENU.length &&
              MENU.map((MENUelement, MENUindex) => (
                <LeftContainer
                  key={MENUindex}
                  id={MENUindex}
                  onClick={(e) => setSelectedPage(parseInt(e.target.id))}
                  menu={selectedPage}>
                  <div className='numberBox' id={MENUindex}>
                    {MENUelement.id}
                  </div>
                  <div className='menuText' id={MENUindex}>
                    {MENUelement.menu}
                  </div>
                </LeftContainer>
              ))}
          </AsidMenu>
        </AsidBar>
        <SectionContainer>
          <FlexSectionBox>
            <Section>
              {selectedPage === 0 ? (
                <Introduce
                  getSelectedCategory={(e) =>
                    setSelectedCategory(e.target.value)
                  }
                  getSelectedSubCategory={(e) =>
                    setSelectedSubCategory(e.target.value)
                  }
                  getSelectedDifficulty={(e) =>
                    setSelectedDifficulty(e.target.value)
                  }
                  getSelectedClassName={(e) =>
                    setSelectedClassName(e.target.value)
                  }
                  getSelectedPrice={(e) => setSelectedPrice(e.target.value)}
                  getSelectedDiscount={(e) =>
                    setSelectedDiscount(e.target.value)
                  }
                  getFirstImage={(e) => setUploadFirstImage(e)}
                  getUploadImage={(file) => setFiles(file)}
                />
              ) : null}
              {selectedPage === 1 ? (
                <Lecture
                  takeLecture={(e) => setSelectedLecture(e)}
                  takeImages={(e) => setLecturefiles(e)}
                />
              ) : null}
              {selectedPage === 2 ? (
                <MakeLecture
                  giveLecture={selectedLecture}
                  takeResult={(e) => setMakeLecture(e)}
                  takeImages={(images) => setLectureImage(images)}
                  takeVideos={(videos) => setLectureVideo(videos)}
                />
              ) : null}
              {selectedPage === 3 ? (
                <Kit
                  takeKitImage={(images) => setKitImage(images)}
                  takeKitName={(names) => setKitnames(names)}
                />
              ) : null}
              {selectedPage === 4 ? <Confirmation /> : null}
              <Footer>
                <ButtonBox>
                  <TempButton
                    changeColor={selectedPage}
                    onClick={(e) => temporary(e)}>
                    임시저장
                  </TempButton>
                  <PrevButton onClick={() => setSelectedPage(selectedPage - 1)}>
                    이전
                  </PrevButton>
                  <NextButton
                    onClick={() => {
                      setSelectedPage(selectedPage + 1);
                      postTemporaryInfomation();
                    }}>
                    다음
                  </NextButton>
                  <MakeButton
                    changeColor={selectedPage}
                    onClick={(e) => complete(e)}>
                    만들기
                  </MakeButton>
                </ButtonBox>
              </Footer>
            </Section>
          </FlexSectionBox>
          <Viewer hiddneViewer={selectedPage}>
            <ViewerBox>
              {selectedDifficulty ? (
                <DificultyViewerBox>{selectedDifficulty}</DificultyViewerBox>
              ) : null}
              {selectedClassName ? (
                <ClassNameViewerBox coverImage={uploadFirstImage}>
                  {selectedClassName}
                </ClassNameViewerBox>
              ) : null}
              <FlexPriceBox>
                {selectedDiscount ? (
                  <DiscountViewerBox max='100'>
                    {selectedDiscount}
                    {selectedDiscount && selectedPrice ? '%' : null}
                  </DiscountViewerBox>
                ) : null}
                {selectedPrice ? (
                  <PriceViewerBox>
                    {(
                      (Number(selectedPrice) *
                        (100 - Number(selectedDiscount))) /
                      100
                    )
                      .toLocaleString('en')
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '원'}
                  </PriceViewerBox>
                ) : null}
              </FlexPriceBox>
              {selectedCategory ? (
                <FlexCategoryBox>
                  <SubCategoryViewerBox>
                    {selectedSubCategory}
                    {selectedCategory && selectedSubCategory ? ' | ' : null}
                  </SubCategoryViewerBox>
                  <CategoryViewerBox>{selectedCategory}</CategoryViewerBox>
                </FlexCategoryBox>
              ) : null}
              <GradationContainer>
                <img
                  src={
                    uploadFirstImage
                      ? '/images/SH/gradation.png'
                      : '/images/SH/nobackground.png'
                  }
                  alt='gradation'
                />
              </GradationContainer>
              <BackgroundContainer>
                <img
                  src={uploadFirstImage ? uploadFirstImage : ''}
                  alt='background'
                />
              </BackgroundContainer>
            </ViewerBox>
            <img
              src='/images/SH/iphone.png'
              className='background'
              alt='viewer'
            />
          </Viewer>
          <ChapterViewer hiddneViewer={selectedPage}>
            <ChapterBox>
              {selectedPage === 2 && selectedLecture.chapters.length
                ? selectedLecture.chapters.map((chapterElement) => (
                    <>
                      <ChapterTitle>{chapterElement.name}</ChapterTitle>
                      {chapterElement.lectures.map((ele) => (
                        <LectureTitle>{ele.name}</LectureTitle>
                      ))}
                    </>
                  ))
                : null}
            </ChapterBox>
          </ChapterViewer>
        </SectionContainer>
      </MainContainer>
    </CreatorView>
  );
};

const DefaultFont = css`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
    'Segoe UI Symbol';
  letter-spacing: -0.3px;
`;

const FlexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CreatorView = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Titlebar = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 72px;
  padding: 0 0 0 25px;
  border-bottom: 3px solid #edeff0;
`;

const LogoBox = styled.div`
  width: 37px;
  height: 27px;
  img {
    width: 100%;
  }
`;

const Title = styled.div`
  ${DefaultFont};
  font-size: 16px;
  margin-left: 12px;
`;

const Completeness = styled.div`
  ${DefaultFont};
  margin-left: 13px;
  font-size: 14px;
  color: #fd7e14;
`;

const ExitButton = styled.div`
  ${DefaultFont};
  ${FlexCenter};
  position: absolute;
  top: 1;
  right: 30px;
  width: 70px;
  height: 40px;
  background-color: #f8f8f9;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #dddde1;
  }
`;

const MainContainer = styled.div`
  display: flex;
  width: 100%;
`;

const AsidBar = styled.div`
  position: sticky;
  width: 280px;
  height: calc(100vh - 75px);
  border-right: 1px solid #edeff0;
`;

const AsidMenu = styled.div`
  width: 246px;
  margin: 25px 17px 17px 17px;
`;
const LeftContainer = styled.div`
  color: ${(props) => (props.id === props.menu ? 'black' : 'black')};
  background-color: ${(props) =>
    props.id === props.menu ? 'rgb(240, 240, 240)' : 'null'};
  display: flex;
  align-items: center;
  height: 48px;
  margin: 12px 0;
  cursor: pointer;

  &:hover {
    background-color: rgb(240, 240, 240);

    .numberBox {
      background-color: white;
      border: 1px solid black;
    }
  }

  .numberBox {
    ${FlexCenter}
    width: 22px;
    height: 22px;
    margin-left: 10px;
    background-color: white;
    border: ${(props) =>
      props.id === props.menu ? '1px solid black' : '1px solid #dddde1'};
    font-size: 11px;
    border-radius: 6px;

    &hover {
      background-color: white;
    }
  }

  .menuText {
    display: flex;
    align-items: center;
    height: 20px;
    margin-left: 13px;
    font-size: 16px;
    font-weight: 500;
  }
`;

const SectionContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const FlexSectionBox = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: calc(100vh - 75px);
  overflow-x: hidden;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Section = styled.div`
  width: 100%;
  position: relative;
`;

const Viewer = styled.div`
  display: ${(props) => (props.hiddneViewer === 0 ? 'block' : 'none')};
  position: relative;
  top: 0;
  right: 0;
  width: 30%;
  height: 100%;
  margin: 40px 50px 0 0;

  img {
    position: sticky;
    width: 317px;
    height: 648px;
    filter: drop-shadow(5px 5px 8px rgba(50, 50, 50, 0.8));
  }
`;

const ViewerBox = styled.div`
  position: absolute;
  top: 64px;
  left: 11px;
  z-index: 1;
`;

const DificultyViewerBox = styled.div`
  position: absolute;
  top: 13px;
  left: 10px;
  padding: 5px;
  border-radius: 10px;
  color: white;
  background-color: rgb(229, 109, 82);
  font-size: 13px;
  font-weight: 700;
  z-index: 4;
`;

const ClassNameViewerBox = styled.div`
  position: absolute;
  display: flex;
  align-items: flex-end;
  top: 220px;
  right: 20px;
  width: 250px;
  height: 200px;
  color: ${(props) => (props.coverImage ? 'white' : 'gray')};
  font-size: 40px;
  font-weight: 800;
  text-align: right;
  z-index: 4;
`;

const FlexPriceBox = styled.div`
  position: absolute;
  top: 420px;
  right: 20px;
  display: flex;
`;
const DiscountViewerBox = styled.div`
  padding: 5px 10px;
  color: rgb(246, 82, 82);
  font-size: 22px;
  font-weight: 900;
  z-index: 4;
`;

const PriceViewerBox = styled.div`
  padding: 5px 10px;
  color: white;
  background-color: black;
  font-size: 22px;
  font-weight: 700;
  text-align: right;
  z-index: 4;
`;

const FlexCategoryBox = styled.div`
  position: absolute;
  top: 465px;
  right: 20px;
  display: flex;
`;

const CategoryViewerBox = styled.div`
  margin-left: 5px;
  color: #e56d52;
  font-size: 15px;
  font-weight: 800;
  text-align: right;
  z-index: 4;
`;

const SubCategoryViewerBox = styled.div`
  color: #e56d52;
  font-size: 15px;
  font-weight: 800;
  text-align: right;
  z-index: 4;
`;

const GradationContainer = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  width: 296px;
  height: 503px;
  overflow: hidden;
  z-index: 3;

  img {
    height: 100%;
  }
`;

const BackgroundContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: flex-start;
  width: 294px;
  height: 501px;
  overflow: hidden;
  z-index: 2;

  img {
    height: 100%;
    width: 200%;
  }
`;

const ChapterViewer = styled.div`
  display: ${(props) => (props.hiddneViewer === 2 ? 'block' : 'none')};
  position: relative;
  top: 0;
  right: 0;
  width: 30%;
  height: 100%;
  margin: 40px 50px 0 0;
`;

const ChapterBox = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 20px;
  margin-top: 120px;
  border-left: 3px solid rgb(200, 200, 200);
`;

const ChapterTitle = styled.div`
  height: 30px;
  font-family: ${DefaultFont};
  font-size: 17px;
  font-weight: 700;
`;

const LectureTitle = styled.div`
  font-family: ${DefaultFont};
  font-size: 14px;
  margin: 0 0 7px 5px;
  color: rgb(100, 100, 100);
`;

const Footer = styled.div`
  position: fixed;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  bottom: 0;
  right: 0;
  width: calc(100vw - 281px);
  height: 75px;
  background-color: white;
  border-top: 1px solid #edeff0;
`;

const ButtonBox = styled.div`
  display: flex;
  margin: 30px;
`;

const NextButton = styled.button`
  ${FlexCenter};
  width: 55px;
  height: 42px;
  margin-right: 10px;
  color: white;
  background-color: #fd7e14;
  border-radius: 4px;
  font-size: 13px;
  outline: none;
  cursor: pointer;
`;

const TempButton = styled(NextButton.withComponent('button'))`
  color: ${(props) =>
    props.changeColor === 1 ? 'white' : 'rgb(200, 200, 200)'};
  background-color: ${(props) =>
    props.changeColor === 1 ? '#fd4e49' : 'rgb(230, 230, 230)'};
`;

const MakeButton = styled(NextButton.withComponent('button'))`
  color: ${(props) =>
    props.changeColor === 4 ? 'white' : 'rgb(200, 200, 200)'};
  background-color: ${(props) =>
    props.changeColor === 4 ? '#fd4e49' : 'rgb(230, 230, 230)'};
`;

const PrevButton = styled(NextButton.withComponent('button'))`
  color: white;
  background-color: #fd7e14;
`;

const MENU = [
  { id: 0, menu: '클래스 정보' },
  { id: 1, menu: '강의 소개' },
  { id: 2, menu: '강의 만들기' },
  { id: 3, menu: '키트 정보' },
  { id: 4, menu: '확인사항' },
];

export default Creator;
