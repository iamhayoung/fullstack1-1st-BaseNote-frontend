import React, { Component } from 'react';
import './ProductCard.scss';

class ProductCard extends Component {
  render() {
    const { img, series, title, mood, volume, price } = this.props;
    return (
      <>
        <a href="/product" classname="clickBox">
          <img src={img} alt="productImg" classname="productCard" />
          <p classname="productTitle">
            {series} (이거 시리즈)
            {title} (이거 이름)
          </p>
          <p classname="productMood">{mood}</p>
          <div classname="amount">
            {volume} (이거용량)
            <span classname="divider">/</span>
            {price} (이거 값)
          </div>
        </a>
      </>
    );
  }
}

export default ProductCard;
