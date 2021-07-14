import React, { Component } from 'react';
import TopNav from '../../components/TopNav/TopNav';
import './Main.scss';
// import cup from './Videos/cup.mp4';
// import ocean from './Videos/ocean.mp4';
// import penguin from './Videos/penguin.mp4';
// import peopleWalking from './Videos/peopleWalking.mp4';
// import road from './Videos/road.mp4';
import swimmingPool from './Videos/swimmingPool.mp4';

class Main extends Component {
  render() {
    return (
      <>
        <TopNav />
        <video
          autoPlay
          muted
          loop
          src={swimmingPool}
          type="video/mp4"
          className="mainVideo"
        ></video>
        <p className="mainVideoTitle">가나다라마바사</p>
      </>
    );
  }
}
export default Main;
