import React, { Component } from 'react';
import './TopNav.scss';
import { BsPerson } from 'react-icons/bs';
import { Link } from 'react-router-dom';

class TopNav extends Component {
  render() {
    return (
      <div className="NavWrapper">
        <ul className="navCategory">
          <Link to="https://paffem.me/perfume_teller.html">Perfume Teller</Link>
          <Link to="/"> SHOP </Link>
          <Link to="https://paffem.me/about.html"> ABOUT </Link>
          <Link to="https://paffem.me/event.html"> EVENT </Link>
        </ul>
        <Link to="메인컴포넌트" className="NavTitle">
          PAFFEM
        </Link>
        <div className="NavIcons">
          <BsPerson className="LoginIcon" />
        </div>
      </div>
    );
  }
}
export default TopNav;

//나중에 컴포넌트 완성시 링크 수정할것//
