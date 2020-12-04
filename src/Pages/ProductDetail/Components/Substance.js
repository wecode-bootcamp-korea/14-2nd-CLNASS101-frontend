import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { API_DETAILPAGE } from "../../../config";

const Substance = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(API_DETAILPAGE)
      .then((res) => res.json())
      .then((res) => setData(res.CLASS.curriculum));
  }, []);

  return (
    <WrapSubstance>
      {data.map((data) => {
        return (
          <>
            <div key={data.order} className="wrapper">
              <div className="substanceImage">
                <img src={data.thumbnailImage} alt="curriculumImage" />
              </div>
              <div className="text">
                <h3>{data.chapterName}</h3>
                <Explain>
                  {data.chapterDetail.map((el) => {
                    return (
                      <WrapExplain>
                        <Number>{el.lectureNum}</Number>
                        <Content>{el.lectureTitle}</Content>
                      </WrapExplain>
                    );
                  })}
                </Explain>
              </div>
            </div>
          </>
        );
      })}
    </WrapSubstance>
  );
};

export default Substance;

const WrapSubstance = styled.div`
  .wrapper {
    display: flex;
    margin-top: 24px;
    padding-top: 24px;
    .substanceImage {
      margin-right: 25px;
      img {
        width: 220px;
        height: 123.75px;
      }
    }

    .text {
      h3 {
        font-size: 20px;
        line-height: 28px;
        color: rgb(133, 138, 141);
        font-weight: normal;
      }
    }
  }
`;

const Explain = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 12px;
`;

const WrapExplain = styled.div`
  display: flex;
`;

const Number = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 12px;
  margin-bottom: 10px;
  width: 20px;
  height: 20px;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 100%;
  font-size: 11px;
`;

const Content = styled.div`
  font-size: 14px;
  font-weight: normal;
  line-height: 20px;
  letter-spacing: -0.15px;
`;
