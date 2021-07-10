import React, { Component } from 'react';
import Container from '../../components/Container/Container';
import ProductCard from './Components/ProductCard/ProductCard';
import './Category.scss';

class Category extends Component {
  constructor() {
    super();
    this.state = {
      product: [],
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
          {this.state.product.map(product => {
            return <ProductCard key={product.id} {...product} />;
          })}
        </Container>
      </section>
    );
  }
}
export default Category;
