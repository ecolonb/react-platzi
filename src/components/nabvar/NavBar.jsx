import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import logo from '../../images/logo.svg';
export default function NavBar() {
  return (
    <div className="Navbar">
      <div className="container-fluid">
        <Link className="Navbar__brand" to="/">
          <img className="Navbar__brand-logo" src={logo} alt="Logo" />
          <span className="font-weight-light">Platzi</span>
          <span className="font-weight-bold">Conf</span>
        </Link>
      </div>
    </div>
  );
}
