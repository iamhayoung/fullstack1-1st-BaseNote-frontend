import React, { Component } from 'react';
import './ProductCard.scss';

class ProductCard extends Component {
  render() {
    const { image_url, series, series_number, name, keywords, price } =
      this.props;
    return (
      <section className="productCard">
        <a href="/product" classname="clickBox">
          <div className="productImg">
            <img src={image_url} alt="productImg" />
          </div>
          <p className="productTitle">
            {series}
            {series_number}
            {name}
          </p>
          <p className="productMood">{keywords.first_mood}</p>
          <div className="amount">
            {price}
            <span className="divider">/</span>
            {price}
          </div>
        </a>
      </section>
    );
  }
}

export default ProductCard;
