import React, { Component } from 'react';
import './NoteTable.scss';

class NoteTable extends Component {
  render() {
    const { topNote, middleNote, baseNote } = this.props;

    return (
      <>
        <div className="noteTable">
          {topNote && (
            <div className="noteColumn">
              <div className="cell head">top</div>
              {topNote.map(note => (
                <div key={note} className="cell">
                  {note}
                </div>
              ))}
            </div>
          )}
          {middleNote && (
            <div className="noteColumn">
              <div className="cell head">middle</div>
              {middleNote.map(note => (
                <div key={note} className="cell">
                  {note}
                </div>
              ))}
            </div>
          )}
          {baseNote && (
            <div className="noteColumn">
              <div className="cell head">base</div>
              {baseNote.map(note => (
                <div key={note} className="cell">
                  {note}
                </div>
              ))}
            </div>
          )}
        </div>
      </>
    );
  }
}
export default NoteTable;
