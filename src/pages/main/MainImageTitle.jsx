import React, { Component } from 'react';
import './MainImageTitle.scss';

class MainImageTitle extends Component {
  constructor() {
    super();
    this.state = {
      index: -1,
    };
  }

  mouseEnter = index => {
    this.setState({
      index,
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
      <div className="ImageTitleWrapper">
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
    );
  }
}

export default MainImageTitle;
