import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './MainReview.scss';

class MainReview extends Component {
  render() {
    const { reviewTitle, reviewText, reviewDate, src } = this.props;
    return (
      <div className="reviewWrapper">
        <Link to="/product/40ml/1">
          <div className="review">
            <div className="reviewTitle">{reviewTitle}</div>
            <div className="reviewText">{reviewText}</div>
            <div className="reviewDate">{reviewDate}</div>
            <img src={src} alt="리뷰이미지" className="reviewImage" />
          </div>
        </Link>
      </div>
    );
  }
}

export default MainReview;
