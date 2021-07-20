import React, { Component } from 'react';
import './TopNavTeller.scss';
import { Link } from 'react-router-dom';

class TopNavTeller extends Component {
  render() {
    return (
      <Link to="/" className="navCategoryLink">
        Perfume Teller
      </Link>
    );
  }
}
export default TopNavTeller;
