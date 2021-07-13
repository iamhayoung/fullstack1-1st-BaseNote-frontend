import React, { Component } from 'react';
import './CartTableHeadRow.scss';

class CartTableHeadRow extends Component {
  render() {
    return (
      <div className="cartTableHeadRow">
        <div className="cell selectHead">
          <input className="cartItemCheckBox" type="checkbox" />
          <div className="selectOption">전체 선택</div>
          <div className="divider"></div>
          <div className="selectOption isRemove">선택 삭제</div>
        </div>
        <div className="cell">제품 정보</div>
        <div className="cell">수량</div>
        <div className="cell">배송비</div>
        <div className="cell">금액</div>
      </div>
    );
  }
}
export default CartTableHeadRow;
