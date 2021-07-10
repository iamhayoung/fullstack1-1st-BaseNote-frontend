import React, { Component } from 'react';
import './ProductCard.scss';

class ProductCard extends Component {
  render() {
    const { img, series, title, mood, volume, price } = this.props;
    return (
      <section className="productCard">
        <a href="/product" classname="clickBox">
          <div className="productImg">
            <img src={img} alt="productImg" />
          </div>
          <p className="productTitle">
            {series}
            &nbsp;
            {title}
          </p>
          <p className="productMood">{mood}</p>
          <div className="amount">
            {volume}
            <span className="divider">/</span>
            {price}
          </div>
        </a>
      </section>
    );
  }
}

export default ProductCard;
