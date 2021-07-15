import React, { Component } from 'react';
import './TotalPriceTableHeadRow.scss';

class TotalPriceTableHeadRow extends Component {
  render() {
    return (
      <tr className="totalPriceTableHeadRow">
        <th className="contentsColumn">총 상품가격</th>
        <th className="dividerColumn"></th>
        <th className="contentsColumn">추가 금액</th>
        <th className="dividerColumn"></th>
        <th className="contentsColumn">배송비</th>
        <th className="dividerColumn"></th>
        <th className="contentsColumn">총 결제금액</th>
      </tr>
    );
  }
}
export default TotalPriceTableHeadRow;
