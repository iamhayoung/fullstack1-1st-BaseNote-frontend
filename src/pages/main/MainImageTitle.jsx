import React, { Component } from 'react';
import './MainImageTitle.scss';

class MainImageTitle extends Component {
  constructor() {
    super();
    this.state = {
      index: -1,
    };
  }

  hiddenMenuAppear = index => {
    this.setState({
      index,
    });
  };

  hiddenMenuDisappear = () => {
    this.setState({
      index: -1,
    });
  };

  render() {
    const { index } = this.state;
    const {
      title,
      subTitle,
      buttonTitle,
      titleNum,
      wrapperClassName,
      videoTitleClassName,
      videoTitle2ClassName,
    } = this.props;
    return (
      <div className={wrapperClassName}>
        <div className={videoTitleClassName}>"{title}"</div>
        <div className={videoTitle2ClassName}>{subTitle}</div>
        <button
          className={index === titleNum ? 'changedColor' : 'findDetails'}
          onMouseOver={() => this.hiddenMenuAppear(titleNum)}
          onMouseLeave={this.hiddenMenuDisappear}
        >
          {buttonTitle}
        </button>
      </div>
    );
  }
}

export default MainImageTitle;
