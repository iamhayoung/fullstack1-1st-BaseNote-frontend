import React, { Component } from 'react';
import ContentsTab from './Components/ContentsTab';
import './Product.scss';

class Product extends Component {
  render() {
    return (
      <>
        <section className="detailArea">
          <ContentsTab area="detail" />
        </section>

        <section className="reviewArea">
          <ContentsTab area="review" />
        </section>
      </>
    );
  }
}
export default Product;
