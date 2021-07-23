import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { sideMenuImageTitles } from './data';
import './TopNavHiddenMenu.scss';

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

    return (
      <>
        <Link
          to="/category/2.5ml"
          className="TopNavHiddenMenu"
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
                src={sideMenuImageTitles.images[index]}
                alt="참고사진"
              />
              <span className="hiddenCardDescription">
                {sideMenuImageTitles.titles[index]}
              </span>
            </>
          )}
        </div>
      </>
    );
  }
}
export default TopNavHiddenMenu;
