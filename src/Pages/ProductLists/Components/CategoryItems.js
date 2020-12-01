import React, { Component } from "react";
import { API_YJ } from "../../../config";
import styled from "styled-components";

class CategoryItems extends Component {
  constructor() {
    super();
    this.state = {
      categoryItems: [],
    };
  }

  componentDidMount() {
    fetch(API_YJ)
      .then((res) => res.json())
      .then((res) => this.setState({ categoryItems: res.CategoryItems }));
  }

  render() {
    const { categoryItems } = this.state;
    return (
      <WrapCategory>
        {categoryItems.length > 0 &&
          categoryItems.map((item) => {
            return (
              <div key={item.id} className="categoryItems">
                {item.CategoryItem}
              </div>
            );
          })}
      </WrapCategory>
    );
  }
}

export default CategoryItems;

const WrapCategory = styled.section`
  display: flex;
  padding-top: 36px;

  .categoryItems {
    width: 166.5px;
    margin-right: 24px;
    padding: 14px 16px;
    border-radius: 5px;
    background-color: rgb(248, 248, 249);
    font-size: 14px;
    font-weight: bold;
    line-height: 20px;
    text-align: center;
    letter-spacing: -0.15px;

    &:hover {
      cursor: pointer;
      transform: scale(1.1);
      transition: 0.1s;
    }
  }
`;
