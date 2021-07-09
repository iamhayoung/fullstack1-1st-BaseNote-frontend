import React, { Component } from 'react';
import './ContentsTab.scss';

class ContentsTab extends Component {
  moveToAnchor = event => {
    const area = event.target.getAttribute('href');
    const destination = document.getElementById(area);
    destination.scrollIntoView({ behavior: 'smooth' });
  };

  isTabItemActive = value => {
    const { area } = this.props;
    return `tabItem ${area === value ? 'active' : ''}`;
  };

  render() {
    return (
      <ul className="contentsTab">
        <li
          className={this.isTabItemActive('detail')}
          onClick={this.moveToAnchor}
        >
          <span className="tabLink" href="detail">
            상세정보
          </span>
        </li>
        <li
          className={this.isTabItemActive('review')}
          onClick={this.moveToAnchor}
        >
          <span className="tabLink" href="review">
            리뷰
          </span>
        </li>
      </ul>
    );
  }
}
export default ContentsTab;
