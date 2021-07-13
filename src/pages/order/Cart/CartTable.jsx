import React, { Component } from 'react';
import HeadRow from './HeadRow';
import DataRow from './DataRow';
import './CartTable.scss';

class CartTable extends Component {
  render() {
    return (
      <div className="cartTable">
        <HeadRow />
        <DataRow series="wind" seriesNumber="03" name="오후의 디저트" />
        <DataRow series="time" seriesNumber="02" name="포근한 겨울밤" />
      </div>
    );
  }
}
export default CartTable;
