import React, { Component } from 'react';
import Loader from '../../components/Loader/Loader';
import Container from '../../components/Container/Container';
import ProductCard from './Components/ProductCard/ProductCard';
import { PRODUCTS_LIST_API } from '../../config';
import './Category.scss';

class Category extends Component {
  constructor() {
    super();
    this.state = {
      productData: [],
      isLoading: true,
    };
  }

  getProductData = async () => {
    const { volume } = this.props.match.params;
    try {
      if (!['2.5ml', '40ml'].includes(volume)) {
        this.props.history.push('');
      } else {
        const response = await fetch(`${PRODUCTS_LIST_API}${volume}`);
        if (!response.ok)
          throw new Error(`HTTP Status code: ${response.status}`);
        const result = await response.json();

        const productData = result.products;

        productData.sort((a, b) => parseInt(a.id) - parseInt(b.id));

        this.setState({ productData, isLoading: false });
      }
    } catch (error) {
      console.error(error);
    }
  };
  componentDidMount() {
    this.getProductData();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.volume !== this.props.match.params.volume) {
      this.getProductData();
    }
  }

  render() {
    const { isLoading, productData } = this.state;

    return isLoading ? (
      <Loader />
    ) : (
      <div className="category">
        <Container option="wide listGrid">
          {productData.map(products => {
            return (
              <ProductCard
                key={products.id}
                {...products}
                volume={this.props.match.params.volume}
              />
            );
          })}
        </Container>
      </div>
    );
  }
}

export default Category;
