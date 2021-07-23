import React, { Component } from 'react';
import './MainVideo.scss';

class MainVideo extends Component {
  render() {
    const { src } = this.props;
    return (
      <video
        autoPlay
        muted
        loop
        src={src}
        type="video/mp4"
        className="mainVideo"
      />
    );
  }
}

export default MainVideo;
