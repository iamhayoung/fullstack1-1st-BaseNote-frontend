import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './TopNavTeller.scss';

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
