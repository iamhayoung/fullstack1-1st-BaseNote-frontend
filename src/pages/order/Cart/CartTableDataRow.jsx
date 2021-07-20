import React, { Component } from 'react';
import './CartTableDataRow.scss';

class CartTableDataRow extends Component {
  render() {
    const { imageUrl, name, series, seriesNumber, volume, quantity, price } =
      this.props;

    return (
      <tr className="cartTableDataRow">
        <td className="selectColumn">
          <input className="cartItemCheckBox" type="checkbox" />
          <img className="cartItemImage" src={imageUrl} alt={name} />
        </td>
        <td className="productColumn">
          <p className="productName">{`${series} ${seriesNumber}. ${name}`}</p>
          {volume === 40 && <p className="volume">40ML only</p>}
        </td>
        <td>
          <div className="quantityBox">
            <div className="item btnQuantity decrease"></div>
            <div className="item value">{quantity}개</div>
            <div className="item btnQuantity increase"></div>
          </div>
        </td>
        <td>
          <p className="price">무료</p>
        </td>
        <td>
          <p className="price">{price}</p>
        </td>
      </tr>
    );
  }
}

export default CartTableDataRow;
