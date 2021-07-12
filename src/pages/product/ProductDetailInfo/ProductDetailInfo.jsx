import React, { Component } from 'react';
import ContentsTab from '../Components/ContentsTab';
import ProductIntro from './ProductIntro';
import NoteInfo from './NoteInfo';
import Keyword from './Keyword';
import ConceptImage from './ConceptImage';
import './ProductDetailInfo.scss';

class ProductDetailInfo extends Component {
  constructor() {
    super();
    this.detailInfoRef = React.createRef();
  }

  render() {
    const { productData } = this.props;
    const { keywords } = productData;
    console.log(productData);
    console.log('this.detailInfoRef', this.detailInfoRef);

    return (
      <section className="ProductDetailInfo" ref={this.detailInfoRef}>
        <ContentsTab ref={this.detailInfoRef} area="detail" />
        <ProductIntro {...productData} />
        <NoteInfo {...productData} />
        {keywords && <Keyword {...productData} />}
        <ConceptImage />
      </section>
    );
  }
}

export default ProductDetailInfo;
