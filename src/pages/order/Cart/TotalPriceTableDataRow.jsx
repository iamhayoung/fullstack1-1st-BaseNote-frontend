import React, { Component } from 'react';
import './TotalPriceTableDataRow.scss';

class TotalPriceTableDataRow extends Component {
  render() {
    return (
      <div className="totalPriceTableDataRow">
        <div className="cell">
          <span className="price">48000</span>
          <span className="unit">원</span>
        </div>
        <div className="cell">
          <div className="circle minus"></div>
        </div>
        <div className="cell">
          <span className="price">0</span>
          <span className="unit">원</span>
        </div>
        <div className="cell">
          <div className="circle plus"></div>
        </div>
        <div className="cell">
          <span className="price">0</span>
          <span className="unit">원</span>
        </div>
        <div className="cell">
          <div className="circle result"></div>
        </div>
        <div className="cell">
          <span className="price">48000</span>
          <span className="unit">원</span>
        </div>
      </div>
    );
  }
}
export default TotalPriceTableDataRow;
