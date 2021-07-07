import { Component } from 'react';
import './TopNav.scss';
import { BsPerson } from 'react-icons/bs';

class TopNav extends Component {
  render() {
    return (
      <div className="NavWrapper">
        <ul className="navCategory">
          <a href="https://paffem.me/perfume_teller.html"> Perfume Teller </a>
          <a href="/"> SHOP </a>
          <a href="/"> ABOUT </a>
          <a href=" / "> EVENT </a>
        </ul>
        <p className="NavTitle"> PAFFEM </p>
        <div className="NavIcons">
          <BsPerson />
        </div>
      </div>
    );
  }
}
export default TopNav;
