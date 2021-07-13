import React, { Component } from 'react';
import './BuyButtons.scss';

class BuyButtons extends Component {
  render() {
    return (
      <div className="buyButtons">
        <button className="btnBuy">주문하기</button>
        <button className="btnBuy isNaver">네이버로 구매하기</button>
      </div>
    );
  }
}
export default BuyButtons;
