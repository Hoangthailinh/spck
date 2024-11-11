import React from "react";
import { FaSearch } from "react-icons/fa";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="search-container">
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search For Musics, Artists, Albums..."
          className="search-bar"
        />
      </div>
      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <a href="#premium">Premium</a>
        <button className="login-btn">Login</button>
        <button className="signup-btn">Sign Up</button>
      </div>
    </header>
  );
}

export default Header;
