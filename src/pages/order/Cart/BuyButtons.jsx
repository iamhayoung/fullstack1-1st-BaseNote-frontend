import React, { Component } from 'react';
import { ReactComponent as Logo } from '../../../assets/logo-NAVER.svg';
import { onClickAlert } from '../../../utils';
import { PURCHASE_MESSAGES } from '../../../config';
import './BuyButtons.scss';

class BuyButtons extends Component {
  render() {
    return (
      <div className="buyButtons">
        <div
          className="btnBuy"
          onClick={() => onClickAlert(PURCHASE_MESSAGES.complete)}
        >
          주문하기
        </div>
        <div
          className="btnBuy isNaver"
          onClick={() => onClickAlert(PURCHASE_MESSAGES.naverPayComplete)}
        >
          <Logo />
          네이버로 구매하기
        </div>
      </div>
    );
  }
}
export default BuyButtons;
