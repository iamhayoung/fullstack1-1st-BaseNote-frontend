import React, { Component } from 'react';
import './MainImageTitle.scss';

class MainImageTitle extends Component {
  constructor() {
    super();
    this.state = {
      index: -1,
    };
  }

  HiddenMenuAppear = index => {
    this.setState({
      index,
    });
  };

  HiddenMenuDisappear = () => {
    this.setState({
      index: -1,
    });
  };

  render() {
    const { index } = this.state;
    const {
      title,
      title2,
      buttonTitle,
      indexNum,
      wrapperClassName,
      videoTitleClassName,
      videoTitle2ClassName,
    } = this.props;
    return (
      <div className={wrapperClassName}>
        <div className={videoTitleClassName}>"{title}"</div>
        <div className={videoTitle2ClassName}>{title2}</div>
        <button
          className={index === indexNum ? 'changedColor' : 'findDetails'}
          onMouseOver={() => this.HiddenMenuAppear(indexNum)}
          onMouseLeave={this.HiddenMenuDisappear}
        >
          {buttonTitle}
        </button>
      </div>
    );
  }
}

export default MainImageTitle;
