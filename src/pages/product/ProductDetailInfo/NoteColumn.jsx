import React, { Component } from 'react';
import './NoteColumn.scss';

class NoteColumn extends Component {
  render() {
    const { type, topNote, middleNote, baseNote } = this.props;

    return (
      <div className="noteColumn">
        <div className="cell head">{type}</div>
        {topNote?.map(note => (
          <div key={note} className="cell">
            {note}
          </div>
        ))}
        {middleNote?.map(note => (
          <div key={note} className="cell">
            {note}
          </div>
        ))}
        {baseNote?.map(note => (
          <div key={note} className="cell">
            {note}
          </div>
        ))}
      </div>
    );
  }
}

export default NoteColumn;
