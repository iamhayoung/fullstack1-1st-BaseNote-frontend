import React, { Component } from 'react';
import './ProductCard.scss';


class ProductCard extends Component {
  goToDetail = () => {
    console.log('click');
    this.props.history.push('/product/${this.props.volume}/${this.props.id}`);
  };

  render() {
    const { image_url, series, series_number, name, keywords, price } =
      this.props;
    return (
      <section className="productCard" onClick={this.goToDetail}>
        <div classname="clickBox">
          <div className="productImg">
            <img src={image_url} alt="productImg" />
          </div>
          <p className="productTitle">
            {series}
            {series_number}
            <span>.{name}</span>
          </p>
          <p className="productMood">{keywords.first_mood}</p>
          <div className="amount">
            {price[this.props.volume]}
            <span className="divider">/</span>
            {price[this.props.volume]}
          </div>
        </div>
      </section>
    );
  }
}

export default ProductCard;
