import React, { Component } from 'react';
import TopNav from '../../components/TopNav/TopNav';
import './Main.scss';

class Main extends Component {
  render() {
    return (
      <div className="main">
        <TopNav />
        <p className="">메인은 메인 브랜치에서 푸쉬하겠습니다.</p>
      </div>
    );
  }
}

export default Main;
