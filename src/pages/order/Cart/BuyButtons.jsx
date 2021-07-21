import React, { Component } from 'react';
import { ReactComponent as Logo } from '../../../assets/logo-NAVER.svg';
import './BuyButtons.scss';

class BuyButtons extends Component {
  handleBtnBuy = () => {
    alert('주문이 완료되었습니다 🥳');
  };

  render() {
    return (
      <div className="buyButtons">
        <div className="btnBuy" onClick={this.handleBtnBuy}>
          주문하기
        </div>
        <div className="btnBuy isNaver" onClick={this.handleBtnBuy}>
          <Logo />
          네이버로 구매하기
        </div>
      </div>
    );
  }
}
export default BuyButtons;
