import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './ContentsTab.scss';

class ContentsTab extends Component {
  moveToAnchor = (event, pathname) => {
    event.preventDefault();
    const area = event.target.getAttribute('href');
    window.location.href = `${pathname}#${area}`;
  };

  render() {
    const { area } = this.props;
    const { pathname } = this.props.location;
    return (
      <ul className="contentsTab">
        <li
          className={area === 'detail' ? 'tabItem active' : 'tabItem'}
          onClick={event => this.moveToAnchor(event, pathname)}
        >
          <span className="tabLink" href="detail">
            상세정보
          </span>
        </li>
        <li
          className={area === 'review' ? 'tabItem active' : 'tabItem'}
          onClick={event => this.moveToAnchor(event, pathname)}
        >
          <span className="tabLink" href="review">
            리뷰
          </span>
        </li>
      </ul>
    );
  }
}
export default withRouter(ContentsTab);
