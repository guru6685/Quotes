import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>Quote Database</h1>
      </div>
      <div className="navbar-right">
        <NavLink to="/" className={({ isActive }) => isActive ? 'quote-caption active' : 'quote-caption'}>
          Home
        </NavLink>
        <NavLink to="/quotes" className={({ isActive }) => isActive ? 'quote-caption active' : 'quote-caption'}>
          Quotes
        </NavLink>
        <button className="navbar-button">Sign Up</button>
        <button className="navbar-button">Log In</button>
      </div>
    </nav>
  );
};

export default Navbar;
