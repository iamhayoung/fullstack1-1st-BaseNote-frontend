import React, { Component } from 'react';
import './ContentsTab.scss';

class ContentsTab extends Component {
  constructor() {
    super();
    this.state = {
      productData: {},
    };
  }

  moveToAnchor = area => {
    const { current } = this.props.forwardRef;
    console.log(current.className);

    if (area === 'detail') {
      current.scrollIntoView({ behavior: 'smooth' });
    } else if (area === 'review') {
      console.log('f');
    }
  };

  // moveToAnchor = event => {
  //   const area = event.target.getAttribute('href');
  //   const destination = document.getElementById(area);
  //   destination.scrollIntoView({ behavior: 'smooth' });
  // };

  isTabItemActive = value => {
    const { area } = this.props;
    return `tabItem ${area === value ? 'active' : ''}`;
  };

  render() {
    console.log('contentsTabs props', this.props);
    // forwardRef를 두개로 나눠야함. 겹쳐져서 우와가키
    return (
      <ul className="contentsTab">
        <li
          className={this.isTabItemActive('detail')}
          onClick={() => this.moveToAnchor('detail')}
          // onClick={this.moveToAnchor}
        >
          <span className="tabLink" href="detail">
            상세정보
          </span>
        </li>
        <li
          className={this.isTabItemActive('review')}
          onClick={() => this.moveToAnchor('review')}
          // onClick={this.moveToAnchor}
        >
          <span className="tabLink" href="review">
            리뷰
          </span>
        </li>
      </ul>
    );
  }
}

export default React.forwardRef((props, ref) => (
  <ContentsTab {...props} forwardRef={ref} />
));

// export default ContentsTab;
