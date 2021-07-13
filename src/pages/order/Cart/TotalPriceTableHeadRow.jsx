import React, { Component } from 'react';
import './TotalPriceTableHeadRow.scss';

class TotalPriceTableHeadRow extends Component {
  render() {
    return (
      <div className="totalPriceTableHeadRow">
        <div className="cell">총 상품가격</div>
        <div className="cell"></div>
        <div className="cell">추가 금액</div>
        <div className="cell"></div>
        <div className="cell">배송비</div>
        <div className="cell"></div>
        <div className="cell">총 결제금액</div>
      </div>
    );
  }
}
export default TotalPriceTableHeadRow;
