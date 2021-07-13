import React, { Component } from 'react';
import TotalPriceTableHeadRow from './TotalPriceTableHeadRow';
import TotalPriceTableDataRow from './TotalPriceTableDataRow';
import './TotalPriceTable.scss';

class TotalPriceTable extends Component {
  render() {
    return (
      <table className="totalPriceTable">
        <TotalPriceTableHeadRow />
        <TotalPriceTableDataRow />
      </table>
    );
  }
}
export default TotalPriceTable;
