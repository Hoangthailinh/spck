import React from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Header.css";

function Header({ setIsLoading }) {
  const navigate = useNavigate();
  const email = localStorage.getItem("userEmail");

  const avatarLetter = email ? email.charAt(0).toUpperCase() : "";

  const handleLoginClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/login");
    }, 3000);
  };

  const handleSignUpClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/signup");
    }, 3000);
  };

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
        {email ? (
          <div className="avatar">{avatarLetter}</div> // Hiển thị avatar khi đã đăng nhập
        ) : (
          <>
            <button className="login-btn" onClick={handleLoginClick}>
              Login
            </button>
            <button className="signup-btn" onClick={handleSignUpClick}>
              Sign Up
            </button>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
