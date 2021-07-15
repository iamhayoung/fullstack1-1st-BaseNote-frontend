import React, { Component } from 'react';
import { ReactComponent as Logo } from '../../../assets/logo-NAVER.svg';
import './BuyButtons.scss';

class BuyButtons extends Component {
  render() {
    return (
      <div className="buyButtons">
        <div className="btnBuy">주문하기</div>
        <div className="btnBuy isNaver">
          <Logo />
          네이버로 구매하기
        </div>
      </div>
    );
  }
}
export default BuyButtons;
