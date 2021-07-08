import React, { Component } from 'react';
import ContentsTab from '../Components/ContentsTab';
import './ProductReview.scss';

class ProductReview extends Component {
  render() {
    return (
      <section className="reviewArea" id="review">
        <ContentsTab area="review" />
        <p>ProductReview 영역</p>
      </section>
    );
  }
}
export default ProductReview;
