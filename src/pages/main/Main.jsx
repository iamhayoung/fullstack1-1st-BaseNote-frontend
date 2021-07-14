import React, { Component } from 'react';
import TopNav from '../../components/TopNav/TopNav';
import './Main.scss';

class Main extends Component {
  render() {
    return (
      <>
        <TopNav />
        <img
          className="MainImage"
          src="https://image.shutterstock.com/image-photo/grasse-france-21-apr-2018-600w-1085613191.jpg"
          alt="메인 테스트 이미지"
        />
      </>
    );
  }
}
export default Main;
