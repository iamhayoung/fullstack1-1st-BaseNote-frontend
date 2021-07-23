import React, { Component } from 'react';
import CartTableHeadRow from './CartTableHeadRow';
import CartTableDataRow from './CartTableDataRow';
import './CartTable.scss';

class CartTable extends Component {
  render() {
    const { cartItems } = this.props;

    return (
      <table className="cartTable">
        <thead>
          <CartTableHeadRow />
        </thead>
        <tbody>
          {cartItems.length === 0 ? (
            <tr className="cartTableDataRow isEmpty">
              <td colSpan="5" className="emptyCartColumn">
                🛒&nbsp;&nbsp;장바구니에 담은 상품이 없습니다.
              </td>
            </tr>
          ) : (
            cartItems.map(item => (
              <CartTableDataRow key={item.cartItemId} {...item} />
            ))
          )}
        </tbody>
      </table>
    );
  }
}

export default CartTable;
