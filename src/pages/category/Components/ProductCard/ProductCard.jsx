import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './ProductCard.scss';

class ProductCard extends Component {
  goToDetail = () => {
    this.props.history.push(`/product/${this.props.volume}/${this.props.id}`);
  };

  render() {
    const { imageURL, series, seriesNumber, name, volume, price } = this.props;

    return (
      <div className="productCard" onClick={this.goToDetail}>
        <div className="clickBox">
          <div className="productImg">
            <img src={imageURL} alt="productImg" />
          </div>
          <p className="productTitle">
            {series}
            &nbsp;
            {seriesNumber}
            <span>.{name}</span>
          </p>
          <div className="amount">
            {volume}
            <span className="divider">/</span>
            {price}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ProductCard);
