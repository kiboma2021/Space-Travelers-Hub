import React from "react";
import { NavLink } from 'react-router-dom';
import '../Styles/Header.css'

const Header = () => {
  return (
    <nav>
     <div className="header-section">
        <div className="logo">
          <img src="" alt="logo"></img>
          <h1>Space Travelers' Hub</h1>
        </div>
        <ul className="myLinks">
          <li>
            <NavLink to="/">Rockets</NavLink>
          </li>
          <li>
            <NavLink to="/mission">Missions</NavLink>
          </li>
          <li>
            <NavLink to="/profile">My Profile</NavLink>
          </li>          
        </ul>
      </div>
    </nav>
  )
}

export default Header;