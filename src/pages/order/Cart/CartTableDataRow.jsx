import React, { Component } from 'react';
import './CartTableDataRow.scss';

class CartTableDataRow extends Component {
  render() {
    const { series, seriesNumber, name } = this.props;

    return (
      <tr className="cartTableDataRow">
        <td className="cell selectHead">
          <input className="cartItemCheckBox" type="checkbox" />
          <img src="https://placehold.jp/125x160.png" alt="Product thumbnail" />
        </td>
        <td className="cell">
          <p className="productName">{`${series} ${seriesNumber}. ${name}`}</p>
          <p className="volume">40ML only</p>
        </td>
        <td className="cell">
          <div className="quantityBox">
            <div className="item btnQuantity decrease"></div>
            <div className="item value">1개</div>
            <div className="item btnQuantity increase"></div>
          </div>
        </td>
        <td className="cell price">무료</td>
        <td className="cell price">48000</td>
      </tr>
    );
  }
}
export default CartTableDataRow;
