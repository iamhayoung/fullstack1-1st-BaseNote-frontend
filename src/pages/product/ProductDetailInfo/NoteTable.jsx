import React, { Component } from 'react';
import NoteColumn from './NoteColumn';
import './NoteTable.scss';

class NoteTable extends Component {
  render() {
    const { topNote, middleNote, baseNote } = this.props;

    return (
      <div className="noteTable">
        {topNote && <NoteColumn type="top" topNote={topNote} />}
        {middleNote && <NoteColumn type="middle" middleNote={middleNote} />}
        {baseNote && <NoteColumn type="base" baseNote={baseNote} />}
      </div>
    );
  }
}

export default NoteTable;
