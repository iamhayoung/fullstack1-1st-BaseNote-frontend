import React, { Component } from 'react';
import CartTableHeadRow from './CartTableHeadRow';
import CartTableDataRow from './CartTableDataRow';
import './CartTable.scss';

class CartTable extends Component {
  render() {
    return (
      <table className="cartTable">
        <thead>
          <CartTableHeadRow />
        </thead>
        <tbody>
          <CartTableDataRow
            series="wind"
            seriesNumber="03"
            name="오후의 디저트"
          />
          <CartTableDataRow
            series="time"
            seriesNumber="02"
            name="포근한 겨울밤"
          />
        </tbody>
      </table>
    );
  }
}
export default CartTable;
