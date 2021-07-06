import { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import './Styles/ContentsTab.scss';

class ContentsTab extends Component {
  render() {
    const { area } = this.props;
    const { pathname } = this.props.location;
    return (
      <ul className="contentsTab">
        <li className={area === 'detail' ? 'tabItem active' : 'tabItem'}>
          <Link className="tabLink" to={{ pathname, hash: `#${area}` }}>
            상세정보
          </Link>
        </li>
        <li className={area === 'review' ? 'tabItem active' : 'tabItem'}>
          <Link className="tabLink" to={{ pathname, hash: `#${area}` }}>
            리뷰
          </Link>
        </li>
      </ul>
    );
  }
}
export default withRouter(ContentsTab);
