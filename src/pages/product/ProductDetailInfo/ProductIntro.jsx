import React, { Component } from 'react';
import { ReactComponent as Logo } from '../../../assets/logo-BASENOTE_slogan.svg';
import PerfumeConceptImage from '../../../assets/perfumeConceptImage.png';
import './ProductIntro.scss';

class ProductIntro extends Component {
  render() {
    const { name, series, series_number, concept } = this.props;
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
        <div className="productConceptBox">
          <img className="img-product" src={PerfumeConceptImage} alt={name} />
          <div className="conceptIntroduction">
            <p className="productSeries">
              {series}
              <span className="productSeriesNumber">{series_number}</span>
            </p>
            <p className="conceptDesc">{concept}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductIntro;
