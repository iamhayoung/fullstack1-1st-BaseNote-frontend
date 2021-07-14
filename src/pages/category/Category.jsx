import React, { Component } from 'react';
import Container from '../../components/Container/Container';
import ProductCard from './Components/ProductCard/ProductCard';
import './Category.scss';

class Category extends Component {
  constructor() {
    super();
    this.state = {
      productData: [],
    };
  }

  getProductData = async () => {
    const { volume } = this.props.match.params;
    try {
      if (!['2.5ml', '40ml'].includes(volume)) {
        this.props.history.push('');
      } else {
        const response = await fetch('/data/mockData.json');
        if (!response.ok)
          throw new Error(`HTTP Status code: ${response.status}`);
        const result = await response.json();

        const productData = result.products;

        productData[0].price = productData[0].price[volume];
        console.log(productData[0].price[volume]);
        this.setState({ productData: productData });
      }
    } catch (error) {
      console.error(error);
    }
  };
  componentDidMount() {
    this.getProductData();
  }

  render() {
    return (
<<<<<<< HEAD
      <Container>
        <p>카테고리 페이지</p>
      </Container>
=======
      <section className="category">
        <Container option="wide listGrid">
          {this.state.productData.map(products => {
            return <ProductCard key={products.id} {...products} />;
          })}
        </Container>
      </section>
>>>>>>> main
    );
  }
}
export default Category;
