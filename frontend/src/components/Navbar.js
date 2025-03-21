import React, { useState } from 'react';
import { NavLink,Link  } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isEventsDropdownOpen, setIsEventsDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleEventsDropdown = () => {
    setIsEventsDropdownOpen(!isEventsDropdownOpen);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <Link to="/">Connectify</Link>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="hamburger" onClick={toggleMobileMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
        <li>
          <NavLink to="/" exact activeClassName="active-link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active-link">
            About
          </NavLink>
        </li>
        <li className="dropdown" onMouseEnter={toggleEventsDropdown} onMouseLeave={toggleEventsDropdown}>
          <NavLink to="/events" activeClassName="active-link">
            Events
          </NavLink>
          {isEventsDropdownOpen && (
            <ul className="dropdown-menu">
              <li>
                <NavLink to="/events/mentorship" activeClassName="active-link">
                  Mentorship 
                </NavLink>
              </li>
            </ul>
          )}
        </li>
        <li>
          <NavLink to="/jobs" activeClassName="active-link">
            Jobs
          </NavLink>
        </li>
        <li>
          <NavLink to="/donations" activeClassName="active-link">
            Donations
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="active-link">
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" className="btn-login" activeClassName="active-link">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to="/faq" activeClassName="active-link">
            FAQ
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;