import React, { Component } from 'react';
import './TotalPriceTableDataRow.scss';

class TotalPriceTableDataRow extends Component {
  render() {
    return (
      <tr className="totalPriceTableDataRow">
        <td>
          <span className="price">48000</span>
          <span className="unit">원</span>
        </td>
        <td>
          <div className="circle minus"></div>
        </td>
        <td>
          <span className="price">0</span>
          <span className="unit">원</span>
        </td>
        <td>
          <div className="circle plus"></div>
        </td>
        <td>
          <span className="price">0</span>
          <span className="unit">원</span>
        </td>
        <td>
          <div className="circle result"></div>
        </td>
        <td>
          <span className="price">48000</span>
          <span className="unit">원</span>
        </td>
      </tr>
    );
  }
}
export default TotalPriceTableDataRow;
