import React, { Component } from 'react';
import NoteColumn from './NoteColumn';
import './NoteTable.scss';

class NoteTable extends Component {
  render() {
    const { top_note, middle_note, base_note } = this.props;

    return (
      <div className="noteTable">
        {top_note && <NoteColumn type="top" note={top_note} />}
        {middle_note && <NoteColumn type="middle" note={middle_note} />}
        {base_note && <NoteColumn type="base" note={base_note} />}
      </div>
    );
  }
}

export default NoteTable;
