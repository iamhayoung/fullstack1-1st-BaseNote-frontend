import React, { Component } from 'react';
import { formatMoney } from '../../../utils';
import { FaRegHeart } from 'react-icons/fa';
import './ProductDetailSmallVolumeHead.scss';

class ProductDetailSmallVolumeHead extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 1,
      show: true,
    };
  }

  incrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  };

  decreaseItem = () => {
    if (this.state.clicks > 1) {
      this.setState({ clicks: this.state.clicks - 1 });
    }
  };

  render() {
    const { clicks } = this.state;
    const { name, image_url, price, series_number, series } =
      this.props.productData;

    return (
      <div className="ProductDetailSmallVolumeHead">
        <div className="producttDetailLeftSection">
          <img
            src={image_url}
            alt="제품이미지"
            className="productDetailImage"
          />
        </div>
        <section className="productDetailRightSection">
          <div className="productDetailTitle">
            {series} {series_number}. {name}
          </div>
          <div className="productDetailPrice">{formatMoney(price)}원</div>
          <div className="option_40ml_HiddenBox">
            <p className="only_40ml_HiddenTitle">
              {series} {series_number}. {name}
            </p>
            <div className="hiddenCountBox">
              <button
                type="button"
                className="only_40ml_MinusButton"
                onClick={this.decreaseItem}
              >
                -
              </button>
              <div className="hiddenQuantity">
                {this.state.show ? <h2>{this.state.clicks}</h2> : ''}
              </div>
              <button
                type="button"
                className="only_40ml_PlusButton"
                onClick={this.incrementItem}
              >
                +
              </button>
            </div>
            <span className="productDetailOptionPrice">
              {formatMoney(price * clicks)}원
            </span>
          </div>
          <div className="productTotalPrice">
            <p className="totalPriceTitle">총 상품금액</p>
            <p className="totalPrice">{formatMoney(price * clicks)}원</p>
          </div>
          <div className="productDetailButtons">
            <button className="productPurchaseButton buttonCommon">
              단품장바구니
            </button>
            <div className="cardButton_Heart">
              <button className="productCartButton buttonCommon">
                데일리키트담기
              </button>
              <FaRegHeart className="productHeartIcon" />
            </div>
          </div>
          <p className="productUserLetter">
            회원 가입 시 할인, 포인트 적립 등 다양한 혜택을 받을 수 있습니다.
          </p>
        </section>
      </div>
    );
  }
}

export default ProductDetailSmallVolumeHead;
