import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { RiSendPlane2Line } from 'react-icons/ri';
import { GiHearts } from 'react-icons/gi';
import { BsCardText } from 'react-icons/bs';

const CommentInput = () => {
  const [comment, setComment] = useState('');
  const [addContent, setAddContent] = useState([]);

  // useEffect = () => {
  //   fetch(
  //     `api`,
  //     {
  //       method: 'GET',
  //     }
  //   )
  //     .then((res) => res.json())
  //     .then((res) => {
  //       // console.log(res.class_detail);
  //       this.setState({
  //         detaildata: res.class_detail,
  //       });
  //     });
  // , []};

  const getTextValue = (e) => {
    setComment(e.target.value);
  };
  const handleSubmit = (e) => {
    // console.log('submit연결');
    e.preventDefault();
    addContent.push({ comment, idx: Date.now() });
    setAddContent(addContent);
    setComment('');
  };

  return (
    <>
      <CommentContainer onSubmit={handleSubmit}>
        <div className='leftInput'>
          <span>
            <BsFillPlusCircleFill color='#e2e0e0' />
          </span>
        </div>
        <input
          type='text'
          value={comment}
          placeholder='댓글을 입력해주세요.'
          onChange={getTextValue}
        />
        <div className='rightInput' type='submit'>
          <button>
            <RiSendPlane2Line size='22' color='#e2e0e0' />
          </button>
        </div>
      </CommentContainer>
      {addContent.map((el, idx) => {
        return (
          <Comment key={idx}>
            <CommentList>
              <div className='imgProfile'>
                <img src='/images/HS/img_profile.png' alt='profile' />
              </div>
              <div className='commentContainer'>
                <div className='userName'>해수</div>
                <div className='date'>2020.12.05</div>
                <div className='commentText'>{el.comment}</div>
                <div className='icons'>
                  <span className='like'>
                    <span>
                      <GiHearts size='10' />
                    </span>
                    <span>1</span>
                  </span>
                  <span className='comment'>
                    <span>
                      <BsCardText size='10' />
                    </span>
                    <span>0</span>
                  </span>
                </div>
              </div>
            </CommentList>
          </Comment>
        );
      })}
    </>
  );
};

export default CommentInput;

const CommentContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  margin-top: 20px;

  .leftInput {
    position: relative;
    width: 30px;
    height: 49px;
    border: 1px solid #e2e0e0;
    border-radius: 100px 0px 0px 100px;
    border-right: none;

    span {
      position: absolute;
      top: 15px;
      left: 15px;
    }
  }
  input {
    width: 85%;
    height: 51px;
    padding: 0 20px;
    border-left: none;
    border-right: none;
    border-top: 1px solid #e2e0e0;
    border-bottom: 1px solid #e2e0e0;
    outline: none;
    box-sizing: border-box;
  }
  .rightInput {
    position: relative;
    width: 30px;
    height: 49px;
    border: 1px solid #e2e0e0;
    border-radius: 0px 100px 100px 0px;
    border-left: none;
    button {
      position: absolute;
      top: 12px;
      right: 15px;
      cursor: pointer;
      background-color: white;
    }
  }
`;

const Comment = styled.div`
  width: 850px;
  padding: 0 12px;
  margin-top: 30px;
  box-sizing: border-box;
`;

const CommentList = styled.div`
  display: flex;
  width: 100%;
  margin: 20px 0px;
  padding-bottom: 20px;
  border-bottom: 1px solid rgb(235, 235, 235);
  .imgProfile {
    border-radius: 100%;
    img {
      width: 50px;
      height: 50px;
      margin-right: 20px;
      border-radius: 100%;
    }
  }
  .commentContainer {
    .userName {
      font-size: 11px;
      font-weight: 600;
      line-height: 16px;
      color: #1b1c1d;
    }
    .date {
      font-size: 10px;
      line-height: 12px;
      color: #a8aeb3;
    }
    .commentText {
      margin: 8px 0;
      font-size: 14px;
      letter-spacing: -0.15px;
      line-height: 20px;
      color: #1b1c1d;
    }
    .icons {
      font-size: 14px;
      letter-spacing: -1.15px;
      line-height: 20px;
      color: #a8aeb3;
      .like {
        margin-right: 7px;
        span {
          margin-right: 5px;
        }
      }
      .comment {
        margin-right: 7px;
        span {
          margin-right: 5px;
        }
      }
    }
  }
`;
