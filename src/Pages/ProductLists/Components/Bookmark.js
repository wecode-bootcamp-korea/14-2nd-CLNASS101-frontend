/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import styled from "styled-components";

class Bookmark extends Component {
  constructor() {
    super();
    this.state = {
      likes: false,
    };
  }

  handleChangeHeart = () => {
    const { likes } = this.state;
    this.setState({ likes: !likes });
    // fetch("http://localhost:3000/data/YJ/data.json", {
    //   method: "GET",
    // })
    //   .then((res) => res.json())
    //   .then((res) => {
    //     console.log("fetch", res);
    //     this.setState({
    //       mypage: res.mypage,
    //     });
    //   });
    // 기억해두려고 쓴 주석입니다!
  };

  render() {
    const { likes } = this.state;

    return (
      <div>
        <Image changeLikes={!likes}>
          <i className="fa fa-heart" onClick={this.handleChangeHeart} />
        </Image>
      </div>
    );
  }
}

export default Bookmark;

const Image = styled.div`
  i {
    color: ${(props) => (props.changeLikes ? "rgba(240 , 240 ,240 , 0.7)" : "red")};
    font-size: 24px;

    &:hover {
      cursor: pointer;
    }
  }
`;
