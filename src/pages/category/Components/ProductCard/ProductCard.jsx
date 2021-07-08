import React, { Component } from 'react';
import './ProductCard.scss';

class ProductCard extends Component {
  render() {
    const { img, series, title, mood, volume, price } = this.props;
    return (
      <section className="productCard">
        <a href="/product" classname="clickBox">
          <img src={img} alt="productImg" classname="productCard" />
          <p classname="productTitle">
            {series}
            {title}
          </p>
          <p classname="productMood">{mood}</p>
          <div classname="amount">
            {volume}
            <span classname="divider">/</span>
            {price}
          </div>
        </a>
      </section>
    );
  }
}

export default ProductCard;
