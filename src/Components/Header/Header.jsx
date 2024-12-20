import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import "./Header.css";

function Header() {
  // const email = localStorage.getItem("userEmail");
  // const avatarLetter = email ? email.charAt(0).toUpperCase() : "";
  const [loginStatus, setLoginStatus] = useState(JSON.parse(localStorage.getItem("loginStatus")));
  const [searchValue, setSearchValue] = useState("");

  const checkLoginStatus = () => {
    const status = JSON.parse(localStorage.getItem("loginStatus"));
    setLoginStatus(status);
  };
  useEffect(() => {
    checkLoginStatus();

    const handleStorageChange = () => {
      checkLoginStatus();
    };

    window.addEventListener("storage", handleStorageChange);
  }, []);

  return (
    <header className="header">
      <div className="search-container">
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search For Musics, Artists, Albums..."
          className="search-bar"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
      </div>
      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <NavLink to="/premium">Premium</NavLink>
        {loginStatus ? (
          <div className="avatar">
            <i className="fa-solid fa-circle-user" style={{ cursor: "pointer" }}></i>
          </div> 
        ) : (
          <>
            <button className="login-btn">
              <NavLink to="/login" style={{ color: "#ee10b0" }}>
                Login
              </NavLink>
            </button>
            <button className="signup-btn">
              <NavLink to="/signup" style={{ color: "black" }}>
                Sign Up
              </NavLink>
            </button>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
