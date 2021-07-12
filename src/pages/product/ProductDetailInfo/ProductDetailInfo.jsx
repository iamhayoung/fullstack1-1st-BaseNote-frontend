import React, { Component } from 'react';
import ProductIntro from './ProductIntro';
import NoteInfo from './NoteInfo';
import Keyword from './Keyword';
import ConceptImage from './ConceptImage';
import './ProductDetailInfo.scss';

class ProductDetailInfo extends Component {
  render() {
    const { productData } = this.props;
    const { keywords } = productData;

    return (
      <section className="ProductDetailInfo">
        <ProductIntro {...productData} />
        <NoteInfo {...productData} />
        {keywords && <Keyword {...productData} />}
        <ConceptImage />
      </section>
    );
  }
}

export default ProductDetailInfo;
