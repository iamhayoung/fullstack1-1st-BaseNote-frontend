import React, { Component } from 'react';
import './TopNavHiddenMenu.scss';
import { Link } from 'react-router-dom';

class TopNavHiddenMenu extends Component {
  constructor() {
    super();
    this.state = {
      index: -1,
    };
  }

  showThumbnail = index => {
    this.setState({
      index,
    });
  };

  hideThumbnail = () => {
    this.setState({
      index: -1,
    });
  };

  render() {
    const { hiddenMenuNum, title } = this.props;
    const { hiddenCard, index } = this.state;
    const sideMenuImageTitles = {
      Images: [
        'https://images.unsplash.com/photo-1582616698198-f978da534162?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHBlcmZ1bWV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1612871178341-33f941a841e3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTg2fHxwZXJmdW1lfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1588159509476-9a71061bd9e2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDIxfHxwZXJmdW1lfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1612871178341-33f941a841e3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTg2fHxwZXJmdW1lfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      ],
      Titles: ['데일리키트', '40ml', 'SET', 'GOODS'],
    };
    return (
      <>
        <Link
          to="/category/2.5ml"
          className="hiddenMenuTitle"
          onMouseOver={() => this.showThumbnail(hiddenMenuNum)}
          onMouseLeave={this.hideThumbnail}
        >
          <p
            className={
              index === hiddenMenuNum
                ? 'hiddenMenuTitleAfter'
                : 'hiddenMenuTitleBefore'
            }
          >
            {title}
          </p>
        </Link>
        <div className={hiddenCard ? 'hiddenCard cardInactive' : 'hiddenCard'}>
          {index >= 0 && (
            <>
              <img
                className="hiddenCardImage"
                src={sideMenuImageTitles.Images[index]}
                alt="참고사진"
              />
              <span className="hiddenCardDescription">
                {sideMenuImageTitles.Titles[index]}
              </span>
            </>
          )}
        </div>
      </>
    );
  }
}
export default TopNavHiddenMenu;
