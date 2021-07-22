import React, { Component } from 'react';
import './TopNavTeller.scss';
import { Link } from 'react-router-dom';

class TopNavTeller extends Component {
  render() {
    const { title } = this.props;

    return (
      <Link to="/" className="TopNavTeller">
        {title}
      </Link>
    );
  }
}
export default TopNavTeller;
