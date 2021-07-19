import React, { Component } from 'react';
import SwimmingPool from './Videos/SwimmingPool.mp4';
import Cocktail from './Videos/Cocktail.mp4';
import MainVideo from './MainVideo';
import MainImageTitle from './MainImageTitle';
import MainImage from './MainImage';
import MainReviewTotal from './MainReviewTotal';

import './Main.scss';

class Main extends Component {
  render() {
    return (
      <>
        <MainVideo src={SwimmingPool} />
        <MainImageTitle
          index="0"
          title="그 시절 여름의 향기"
          title2="SUMMER EDITION'3"
          buttonTitle="자세히보기"
        />
        <MainImage src="https://cdn.pixabay.com/photo/2015/04/20/13/38/furniture-731449_1280.jpg" />
        <MainImageTitle
          index="1"
          title="시그니처 향수를 찾기위한 교환 서비스"
          buttonTitle="교환서비스"
        />
        <MainReviewTotal />
        <MainVideo src={Cocktail} />
      </>
    );
  }
}

export default Main;
