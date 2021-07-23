import React, { Component } from 'react';
import Loader from '../../components/Loader/Loader';
import Container from '../../components/Container/Container';
import ProductDetailBigVolumeHead from './ProductDetailHead/ProductDetailBigVolumeHead';
import ProductDetailSmallVolumeHead from './ProductDetailHead/ProductDetailSmallVolumeHead';
import ProductDetailInfo from './ProductDetailInfo/ProductDetailInfo';
import './Product.scss';

class Product extends Component {
  constructor() {
    super();
    this.state = {
      productData: {},
      isLoading: true,
    };
  }

  getProductData = async () => {
    const { volume, id } = this.props.match.params;

    try {
      if (!['2.5ml', '40ml'].includes(volume)) {
        this.props.history.push('');
      } else {
        const response = await fetch('/data/detailData.json');

        if (!response.ok)
          throw new Error(`HTTP Status code: ${response.status}`);

        const result = await response.json();
        const productData = result.products.filter(
          data => data.id === parseInt(id)
        );

        productData[0].price = productData[0].price[volume];

        return this.setState({ productData: productData[0], isLoading: false });
      }
    } catch (error) {
      console.error(error);
    }
  };

  componentDidMount() {
    this.getProductData();
  }

  render() {
    const { isLoading, productData } = this.state;
    const { volume } = this.props.match.params;

    return isLoading ? (
      <Loader />
    ) : (
      <Container>
        {volume === '40ml' ? (
          <ProductDetailBigVolumeHead productData={productData} />
        ) : (
          <ProductDetailSmallVolumeHead productData={productData} />
        )}
        <ProductDetailInfo productData={productData} />
      </Container>
    );
  }
}

export default Product;
