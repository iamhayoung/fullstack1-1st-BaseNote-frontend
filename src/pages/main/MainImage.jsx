import React, { Component } from 'react';
import './MainImage.scss';

class MainImage extends Component {
  render() {
    const { src } = this.props;
    return <img src={src} alt="메인이미지" className="mainImage" />;
  }
}

export default MainImage;
