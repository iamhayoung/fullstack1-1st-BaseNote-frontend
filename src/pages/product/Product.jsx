import { Component } from 'react';
import Container from '../../components/Container/Container';
import ProductDetailHead from './ProductDetailHead/ProductDetailHead';
import ProductDetailInfo from './ProductDetailInfo/ProductDetailInfo';
import ProductReview from './ProductReview/ProductReview';
import './Product.scss';

class Product extends Component {
  render() {
    return (
      <Container>
        <ProductDetailHead />
        <ProductDetailInfo />
        <ProductReview />
      </Container>
    );
  }
}
export default Product;
