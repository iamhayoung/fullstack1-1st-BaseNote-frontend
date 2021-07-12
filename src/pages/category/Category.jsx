import React, { Component } from 'react';
import Container from '../../components/Container/Container';
import ProductCard from './Components/ProductCard/ProductCard';
import './Category.scss';

class Category extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }
  componentDidMount() {
    fetch('http://localhost:3000/data/mockdata.json')
      .then(res => res.json())
      .then(data => {
        this.setState({ product: data.data });
      });
  }

  render() {
    return (
      <section className="category">
        <Container option="wide listGrid">
          {this.state.products.map(products => {
            return <ProductCard key={products.id} {...products} />;
          })}
        </Container>
      </section>
    );
  }
}
export default Category;
