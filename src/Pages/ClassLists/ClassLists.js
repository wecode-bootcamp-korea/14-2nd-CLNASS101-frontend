import React, { Component } from 'react';
import styled from 'styled-components';

class ClassLists extends Component {
  render() {
    return (
      <>
        <NavContainer>
          <div className='nav'>ddd</div>
        </NavContainer>
        <NavContainer></NavContainer>

        <Listpage>
          <div className='stickyBox'>
            <div className='dd'>
              <div className='qq'>zz</div>
              <div className='qq'>zz</div>
              <div className='qq'>zz</div>
              <div className='qq'>zz</div>
              <div className='qq'>zz</div>
            </div>
          </div>
          <div className='stickyBox2'>
            <div className='ss'>
              <div className='ww'>aa</div>
              <div className='ww'>aa</div>
              <div className='ww'>aa</div>
              <div className='ww'>aa</div>
              <div className='ww'>aa</div>
            </div>
          </div>
        </Listpage>
      </>
    );
  }
}

export default ClassLists;

const NavContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .nav {
    width: 1176px;
    height: 40px;
    padding: 14px 24px;
  }
`;

const Listpage = styled.div`
  display: flex;
  width: 100%;
  .stickyBox {
    width: 50%;
    height: 100vh;
    overflow-x: hidden;
    .dd {
      display: flex;
      flex-direction: column;
      border: 1px solid black;
      overflow-y: scroll;
      .qq {
        width: 200px;
        height: 200px;
        border: 1px solid red;
      }
    }
  }

  .stickyBox2 {
    width: 50%;
    height: 100vh;
    overflow-x: hidden;
    .ss {
      display: flex;
      flex-direction: column;
      border: 1px solid black;
      overflow-y: scroll;
      .ww {
        width: 200px;
        height: 200px;
        border: 1px solid red;
      }
    }
  }
`;
