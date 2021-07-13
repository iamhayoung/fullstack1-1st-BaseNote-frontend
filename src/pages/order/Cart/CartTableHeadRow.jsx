import React, { Component } from 'react';
import './CartTableHeadRow.scss';

class CartTableHeadRow extends Component {
  render() {
    return (
      <tr className="cartTableHeadRow">
        <th className="cell selectHead">
          <input className="cartItemCheckBox" type="checkbox" />
          <div className="selectOption">전체 선택</div>
          <div className="divider"></div>
          <div className="selectOption isRemove">선택 삭제</div>
        </th>
        <th className="cell">제품 정보</th>
        <th className="cell">수량</th>
        <th className="cell">배송비</th>
        <th className="cell">금액</th>
      </tr>
    );
  }
}
export default CartTableHeadRow;
