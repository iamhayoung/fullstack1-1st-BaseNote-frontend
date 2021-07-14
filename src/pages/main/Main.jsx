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
  constructor() {
    super();
    this.state = {
      index: -1,
    };
  }
  mouseEnter = index => {
    this.setState({
      index: index,
    });
  };
  mouseLeave = () => {
    this.setState({
      index: -1,
    });
  };
  render() {
    const { index } = this.state;
    return (
      <div className="main">
        <TopNav />
        <video
          autoPlay
          muted
          loop
          src={SwimmingPool}
          type="video/mp4"
          className="mainVideo"
        ></video>
        <div className="topImageTitleWrapper">
          <div className="mainVideoTitle">"그 시절 여름의 향기"</div>
          <div className="mainVideoTitle2">SUMMER EDITION'3</div>
          <button
            className={index === 0 ? 'changedColor' : 'findDetails'}
            onMouseOver={() => this.mouseEnter(0)}
            onMouseLeave={this.mouseLeave}
          >
            자세히보기
          </button>
        </div>
        <img
          src="https://cdn.pixabay.com/photo/2015/04/20/13/38/furniture-731449_1280.jpg"
          alt="들판이미지"
          className="mainImage"
        />
        <div className="secondImageTitleWrapper">
          <div className="mainPictureTitle">Change For Signiture</div>
          <div className="mainPictureTitle2">
            시그니처 향수를 찾기위한 교환 서비스
          </div>
          <button
            className={index === 1 ? 'changedColor' : 'changeService'}
            onMouseOver={() => this.mouseEnter(1)}
            onMouseLeave={this.mouseLeave}
          >
             교환서비스
          </button>
        </div>
        <a href="/product/40ml/1" className="reviewWrapper1">
          <div className="firstReview">
            <div className="reviewTitle">melt 01. 어른의 솜사탕</div>
            <div className="reviewText">
              달달~한 향이나는게 이거 뭐 천국의 향이있다면 이걸까요
            </div>
            <div className="reviewDate">2021.07.14 신수호</div>
          </div>
        </a>
      </div>
    );
  }
}

export default Main;
