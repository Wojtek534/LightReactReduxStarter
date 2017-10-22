import React from 'react';
import logo from '../../../logo.svg';
import {Nav, NavLink} from 'reactstrap';
import './scripts/NavbarScript';

class Navbar extends React.Component {
  render() {
    return (
      <Nav className="fixed-top navbar navbar-toggleable-md navbar-inverse">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="container">
        <NavLink href="/" className="navbar-brand"><img src={logo} className="logo" alt="logo"/>Sample App</NavLink></div>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink href='/'>
                <div className="bt">Home</div>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink href="/about">
                <div className="bt">About</div>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink href="/sample">
                <div className="bt">ReduxReactSample</div>
              </NavLink>
            </li>
          </ul>
        </div>
      </Nav>
    )
  }
};
export default Navbar;
