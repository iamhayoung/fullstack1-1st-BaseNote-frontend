import React, { Component } from 'react';
import TotalPriceTableHeadRow from './TotalPriceTableHeadRow';
import TotalPriceTableDataRow from './TotalPriceTableDataRow';
import './TotalPriceTable.scss';

class TotalPriceTable extends Component {
  render() {
    return (
      <div className="totalPriceTable">
        <TotalPriceTableHeadRow />
        <TotalPriceTableDataRow />
      </div>
    );
  }
}
export default TotalPriceTable;
