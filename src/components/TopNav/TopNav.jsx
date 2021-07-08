import React, { Component } from 'react';
import './TopNav.scss';
import { BsPerson } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { ReactComponent as MainLogo } from '../../assets/logo-BASENOTE_icon.svg';
// import member from '../../pages/member/Member';

class TopNav extends Component {
  render() {
    return (
      <div className="TopNav">
        <ul className="navCategory">
          <a
            href="https://paffem.me/perfume_teller.html"
            className="navCategoryLink"
          >
            Perfume Teller
          </a>
          <Link to="/" className="navCategoryLink">
            SHOP
          </Link>
          <Link to="/" className="navCategoryLink">
            ABOUT
          </Link>
          <Link to="/" className="navCategoryLink">
            EVENT
          </Link>
        </ul>
        <Link to="메인컴포넌트" className="NavTitle">
          <MainLogo />
        </Link>
        <div className="NavIcons">
          <Link to="/member">
            <BsPerson className="LoginIcon" />
          </Link>
        </div>
      </div>
    );
  }
}
export default TopNav;

//나중에 컴포넌트 완성시 링크 수정할것//
