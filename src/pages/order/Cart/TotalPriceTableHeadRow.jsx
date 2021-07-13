import React, { Component } from 'react';
import './TotalPriceTableHeadRow.scss';

class TotalPriceTableHeadRow extends Component {
  render() {
    return (
      <tr className="totalPriceTableHeadRow">
        <th className="cell">총 상품가격</th>
        <th className="cell"></th>
        <th className="cell">추가 금액</th>
        <th className="cell"></th>
        <th className="cell">배송비</th>
        <th className="cell"></th>
        <th className="cell">총 결제금액</th>
      </tr>
    );
  }
}
export default TotalPriceTableHeadRow;
