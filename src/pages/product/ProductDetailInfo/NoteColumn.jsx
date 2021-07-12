import React, { Component } from 'react';
import './NoteColumn.scss';

class NoteColumn extends Component {
  render() {
    const { type, note } = this.props;

    return (
      <div className="noteColumn">
        <div className="cell head">{type}</div>
        {note.map(note => (
          <div key={note} className="cell">
            {note}
          </div>
        ))}
      </div>
    );
  }
}

export default NoteColumn;
