import React, { Component } from 'react';
import Hashtags from './Hashtags';
import NoteTable from './NoteTable';
import './NoteInfo.scss';

class NoteInfo extends Component {
  render() {
    const { description, keywords, top_note, middle_note, base_note } =
      this.props;
    return (
      <div className="noteInfo">
        <h3 className="title">note</h3>
        <p className="noteDesc">{description}</p>
        <Hashtags {...keywords} />
        <NoteTable
          topNote={top_note}
          middleNote={middle_note}
          baseNote={base_note}
        />
      </div>
    );
  }
}

export default NoteInfo;
