import React, { Component } from 'react';
import ContentsTab from '../Components/ContentsTab';
import './ProductReview.scss';

class ProductReview extends Component {
  constructor() {
    super();
    this.reviewRef = React.createRef();
  }

  render() {
    console.log('this.reviewRef', this.reviewRef);
    return (
      <section className="ProductReview" ref={this.reviewRef}>
        <ContentsTab ref={this.reviewRef} area="review" />
        <p>ProductReview 영역</p>
      </section>
    );
  }
}
export default ProductReview;
