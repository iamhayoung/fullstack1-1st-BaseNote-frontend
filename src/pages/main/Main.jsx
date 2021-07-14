import React, { Component } from 'react';
import TopNav from '../../components/TopNav/TopNav';
import './Main.scss';
// import Cup from './Videos/Cup.mp4';
// import Ocean from './Videos/Ocean.mp4';
// import penguin from './Videos/penguin.mp4';
// import PeopleWalking from './Videos/PeopleWalking.mp4';
// import Road from './Videos/Road.mp4';
import SwimmingPool from './Videos/SwimmingPool.mp4';
class Main extends Component {
  render() {
    return (
      <>
        <TopNav />
        <video
          autoPlay
          muted
          loop
          src={SwimmingPool}
          type="video/mp4"
          className="mainVideo"
        ></video>
        <p className="mainVideoTitle">가나다라마바사</p>{' '}
      </>
    );
  }
}

export default Main;
