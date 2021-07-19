import React, { Component } from 'react';
import './MainVideo.scss';

class MainVideo extends Component {
  render() {
    const { videoSrc } = this.props.src;
    console.log('video:', videoSrc);
    return (
      <video
        autoPlay
        muted
        loop
        src={videoSrc}
        type="video/mp4"
        className="mainVideo"
      ></video>
    );
  }
}

export default MainVideo;
