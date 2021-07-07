import React, { Component } from 'react';
import './NoteTable.scss';

class NoteTable extends Component {
  render() {
    return (
      <>
        <div className="noteTable">
          <div className="noteColumn">
            <div className="cell head">top</div>
            <div className="cell">Cardamom</div>
            <div className="cell">Petitgrain</div>
            <div className="cell">Blood orange</div>
          </div>
          <div className="noteColumn">
            <div className="cell head">middle</div>
            <div className="cell">Snow</div>
            <div className="cell">Orange blossom</div>
          </div>
          <div className="noteColumn">
            <div className="cell head">base</div>
            <div className="cell">Moss</div>
            <div className="cell">Tonka bean</div>
            <div className="cell">Amber</div>
          </div>
        </div>
      </>
    );
  }
}
export default NoteTable;
