import React, { Component } from 'react';
import './TopNavThumbnail.scss';
import { Link } from 'react-router-dom';

class TopNavThumbnail extends Component {
  constructor() {
    super();
    this.state = {
      index: -1,
    };
  }

  showThumbail = index => {
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
    const { index } = this.state;
    const { indexNum, title } = this.props;

    return (
      <Link
        to="/category/2.5ml"
        className="hiddenMenuTitle"
        onMouseOver={() => this.showThumbail(indexNum)}
        onMouseLeave={this.hideThumbnail}
      >
        <p
          className={
            index === indexNum
              ? 'hiddenMenuTitleAfter'
              : 'hiddenMenuTitleBefore'
          }
        >
          {title}
        </p>
      </Link>
    );
  }
}
export default TopNavThumbnail;
