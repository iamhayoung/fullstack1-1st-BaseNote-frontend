import React, { Component } from 'react';
import Hashtags from './Hashtags';
import NoteTable from './NoteTable';
import './NoteInfo.scss';

class NoteInfo extends Component {
  render() {
    const { description, keywords, notes } = this.props;

    return (
      <div className="noteInfo">
        <h3 className="title">note</h3>
        <p className="noteDesc">{description}</p>
        {keywords && <Hashtags keywords={keywords} />}
        <NoteTable {...notes} />
      </div>
    );
  }
}

export default NoteInfo;
