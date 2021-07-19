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
    const { title, title2, buttonTitle } = this.props;
    console.log('props:', this.props);
    return (
      <div className="ImageTitleWrapper">
        <div className="mainVideoTitle">"{title}"</div>
        <div className="mainVideoTitle2">{title2}</div>
        <button
          className={index === { index } ? 'changedColor' : 'findDetails'}
          onMouseOver={() => this.mouseEnter(0)}
          onMouseLeave={this.mouseLeave}
        >
          {buttonTitle}
        </button>
      </div>
    );
  }
}

export default MainImageTitle;
