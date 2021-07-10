import React, { Component } from 'react';
import './Main.scss';
import TopNav from '../../components/TopNav/TopNav';

class Main extends Component {
  render() {
    return (
      <>
        <TopNav />
        <img
          className="MainImage"
          src="https://images.unsplash.com/photo-1582616698198-f978da534162?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHBlcmZ1bWV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
          alt="메인 테스트 이미지"
        />
      </>
    );
  }
}
export default Main;
