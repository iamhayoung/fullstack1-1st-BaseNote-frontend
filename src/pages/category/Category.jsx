import React, { Component } from 'react';
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
      <div clsaaName="productContainer">
        {this.state.product.map(product => {
          return (
            <ProductCard
              key={product.id}
              img={product.img}
              series={product.series}
              title={product.title}
              mood={product.mood}
              volume={product.volume}
              price={product.price}
            />
          );
        })}
      </div>
    );
  }
}
export default Category;
