import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './ProductCard.scss';

class ProductCard extends Component {
  goToDetail = () => {
    this.props.history.push(
      `/product/${this.props.volume}'/'${this.props.id}'`
    );
  };

  render() {
    const { image_url, series, series_number, name, keywords, price } =
      this.props;

    return (
      <section className="productCard" onClick={this.goToDetail}>
        <div className="clickBox">
          <div className="productImg">
            <img src={image_url} alt="productImg" />
          </div>
          <p className="productTitle">
            {series}
            &nbsp;
            {series_number}
            <span>.{name}</span>
          </p>
          <div className="productMood">
            {keywords.first_moods.map(keyword => (
              <span key={keyword.id} className="hashtag">
                #{keyword.mood}
              </span>
            ))}
          </div>
          <div className="amount">
            {this.props.volume}
            <span className="divider">/</span>
            {price[this.props.volume]}
          </div>
        </div>
      </section>
    );
  }
}

export default withRouter(ProductCard);
