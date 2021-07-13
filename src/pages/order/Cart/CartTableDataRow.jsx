import React, { Component } from 'react';
import './CartTableDataRow.scss';

class CartTableDataRow extends Component {
  render() {
    const { series, seriesNumber, name } = this.props;

    return (
      <div className="cartTableDataRow">
        <div className="cell selectHead">
          <input className="cartItemCheckBox" type="checkbox" />
          <img src="https://placehold.jp/125x160.png" alt="Product thumbnail" />
        </div>
        <div className="cell">
          <p className="productName">{`${series} ${seriesNumber}. ${name}`}</p>
          <p className="volume">40ML only</p>
        </div>
        <div className="cell">
          <div className="quantityBox">
            <div className="item btnQuantity decrease"></div>
            <div className="item value">1개</div>
            <div className="item btnQuantity increase"></div>
          </div>
        </div>
        <div className="cell price">무료</div>
        <div className="cell price">48000</div>
      </div>
    );
  }
}
export default CartTableDataRow;
