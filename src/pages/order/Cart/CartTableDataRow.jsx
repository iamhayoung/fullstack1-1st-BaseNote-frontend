import React, { Component } from 'react';
import { formatMoney } from '../../../utils';
import './CartTableDataRow.scss';

class CartTableDataRow extends Component {
  render() {
    const { series, seriesNumber, name } = this.props;

    return (
      <tr className="cartTableDataRow">
        <td className="selectColumn">
          <input className="cartItemCheckBox" type="checkbox" />
          <img src="https://placehold.jp/125x160.png" alt="Product thumbnail" />
        </td>
        <td className="productColumn">
          <p className="productName">{`${series} ${seriesNumber}. ${name}`}</p>
          <p className="volume">40ML only</p>
        </td>
        <td>
          <div className="quantityBox">
            <div className="item btnQuantity decrease"></div>
            <div className="item value">1개</div>
            <div className="item btnQuantity increase"></div>
          </div>
        </td>
        <td>
          <p className="price">무료</p>
        </td>
        <td>
          <p className="price">{formatMoney(48000)}</p>
        </td>
      </tr>
    );
  }
}

export default CartTableDataRow;
