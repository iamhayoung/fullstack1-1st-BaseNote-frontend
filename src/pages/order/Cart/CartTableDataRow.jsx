import React, { Component } from 'react';
import './CartTableDataRow.scss';

class CartTableDataRow extends Component {
  render() {
    const { series, seriesNumber, name } = this.props;

    return (
      <tr className="cartTableDataRow">
        <td className="selectCell">
          <input className="cartItemCheckBox" type="checkbox" />
          <img src="https://placehold.jp/125x160.png" alt="Product thumbnail" />
        </td>
        <td className="productCell">
          <p className="productName">{`${series} ${seriesNumber}. ${name}`}</p>
          <p className="volume">40ML only</p>
        </td>
        <td class="priceCell">
          <div className="quantityBox">
            <div className="item btnQuantity decrease"></div>
            <div className="item value">1개</div>
            <div className="item btnQuantity increase"></div>
          </div>
        </td>
        <td className="priceCell">무료</td>
        <td className="priceCell">48000</td>
      </tr>
    );
  }
}
export default CartTableDataRow;
