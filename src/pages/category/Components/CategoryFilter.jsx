import React, { Component } from 'react';

class CategoryFilter extends Component {
  render() {
    return (
      <div className="CategoryFilter">
        <div className="CategoryContainer">
          <div className="CategoryContents">
            <div className="CatergoryText">All</div>
            <div className="CatergoryText">시트러스</div>
            <div className="CatergoryText">아쿠아</div>
            <div className="CatergoryText">머스크</div>
          </div>
        </div>
      </div>
    );
  }
}

export default CategoryFilter;
