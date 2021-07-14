import React, { Component } from 'react';
import TotalPriceTableHeadRow from './TotalPriceTableHeadRow';
import TotalPriceTableDataRow from './TotalPriceTableDataRow';
import './TotalPriceTable.scss';

class TotalPriceTable extends Component {
  render() {
    return (
      <table className="totalPriceTable">
        <thead>
          <TotalPriceTableHeadRow />
        </thead>
        <tbody>
          <TotalPriceTableDataRow />
        </tbody>
      </table>
    );
  }
}
export default TotalPriceTable;
