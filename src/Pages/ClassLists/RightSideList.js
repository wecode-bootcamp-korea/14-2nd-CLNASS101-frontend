import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { CgPlayButtonO } from 'react-icons/cg';

class RightSideList extends Component {
  goToDetail = (id) => {
    this.props.history.push(`/ClassDetail/${this.props.curriculum.id}`);
  };

  render() {
    console.log(this.props.curriculum.lectures[0].lecture_title);
    const { curriculum } = this.props;
    // console.log('isplayed:', curriculum.isplayed);
    return (
      <div className='chapterContainer'>
        <div className='chapter'>
          <div className='chapterID'>{curriculum.chapter_number}</div>
          <div className='chapterTitle'>{curriculum.chapter_title}</div>
        </div>
        <div className='videoDetail'>
          <div
            className='detail'
            onClick={() => this.goToDetail(curriculum.id)}>
            {curriculum.lectures[0].lecture_title}
          </div>
          <div className='detailBox'>
            <div className='time'>
              <span className='iconTime'>
                <CgPlayButtonO size='10' color='#a8aeb3' />
              </span>
              <span>3.53</span>
            </div>
            <div className='talk'>
              <span className='iconTalk'>
                <CgPlayButtonO size='10' color='#a8aeb3' />
              </span>
              <span>134</span>
            </div>
            <div className='mission'>
              <span className='iconMission'>
                <CgPlayButtonO size='10' color='#a8aeb3' />
              </span>
              <span>미션</span>
            </div>
            <div
              className={
                curriculum.isplayed ? 'imageButtonClick' : 'imageButton'
              }
              onClick={() => {
                this.props.getEvent(curriculum.id);
              }}>
              <img src='/images/HS/playbutton.png' alt='playbutton' />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(RightSideList);
