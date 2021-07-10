import React, { Component } from 'react';
import { ReactComponent as Logo } from '../../../assets/logo-BASENOTE_slogan.svg';
import './ProductIntro.scss';

class ProductIntro extends Component {
  render() {
    const { name, image_url, series, series_number } = this.props;

    return (
      <div className="productIntro">
        <Logo />
        <p className="sentence">
          향기에는 가장 섬세하고 다양한 취향이 담겨있습니다.
          <br />
          그렇지만 어디 내가 좋아하는 향수 찾기가 쉬웠나요.
          <br />
          좋은 원료로 만든 다양한 향수를, 더 쉽게 경험할 수 있도록.
          <br />
          가장 '나다운 향'을 찾기 위한 여정을 함께 합니다.
        </p>
        <div className="productIntroductionBox">
          <img className="img-product" src={image_url} alt={name} />
          <div className="productIntroduction">
            <p className="productSeries">
              {series}
              <span className="productSeriesNumber">{series_number}</span>
            </p>
            <p className="productName">{name}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductIntro;
