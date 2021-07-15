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
        <div className="totalReviewWrapper">
          <div className="reviewWrapper">
            <a href="/product/40ml/1">
              <div className="review">
                <div className="reviewTitle">melt 01. 어른의 솜사탕</div>
                <div className="reviewText">
                  달달~한 향이나는게 이거 뭐 천국의 향이있다면 이걸까요
                </div>
                <div className="reviewDate">2021.07.14 신수호</div>
                <img
                  src="https://images.unsplash.com/photo-1526505262320-81542978f63b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                  alt="리뷰이미지"
                  className="reviewImage"
                />
              </div>
            </a>
          </div>
          <div className="reviewWrapper">
            <a href="/product/40ml/2" className="reviewWrapper">
              <div className="review">
                <div className="reviewTitle">wind 02. 백색 향</div>
                <div className="reviewText">
                  깔끔하면서 상쾌한 향입니다. 일요일 아침에 뿌리고 나가면
                  하루종일 기분이 좋아요. 코드리뷰할때 더 잘 보이는거같아요.
                </div>
                <div className="reviewDate">2021.01.21 이장현</div>
                <img
                  src="https://images.unsplash.com/photo-1602473395999-7e8b95d173e4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2734&q=80"
                  alt="리뷰이미지"
                  className="reviewImage"
                />
              </div>
            </a>
          </div>
          <div className="reviewWrapper">
            <a href="/product/40ml/3" className="reviewWrapper">
              <div className="review">
                <div className="reviewTitle">path 01. 물기 머금은 장미</div>
                <div className="reviewText">
                  여름이 떠오르는 싱그러운 향이에요. 재구매의사 100%입니다.
                  머리가 맑아지고 코딩이 잘됩니다.
                </div>
                <div className="reviewDate">2021.02.11 이소헌</div>
                <img
                  src="https://images.unsplash.com/photo-1602078794418-dba87dccba4d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=788&q=80"
                  alt="리뷰이미지"
                  className="reviewImage"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
