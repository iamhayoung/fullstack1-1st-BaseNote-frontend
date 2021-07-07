import React, { Component } from 'react';
import './Styles/productCard.scss';

class productCard extends Component {
  render() {
    return (
      <div className="">
        <a href="/" className="productImg">
          <img src={this.props.img} alt="productImg" className="productCard" />
        </a>
        <p className="productTitle">
          {this.props.series} {this.props.name}
        </p>
      </div>
    );
  }
}

export default productCard;
