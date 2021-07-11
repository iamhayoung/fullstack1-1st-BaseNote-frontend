import React, { Component } from 'react';
import ContentsTab from '../Components/ContentsTab';
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
      <section className="ProductDetailInfo" id="detail">
        <ContentsTab area="detail" />
        <ProductIntro {...productData} />
        <NoteInfo {...productData} />
        {keywords && <Keyword {...productData} />}
        <ConceptImage />
      </section>
    );
  }
}

export default ProductDetailInfo;
