import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaHome, FaCompactDisc, FaMusic, FaClock, FaHeart, FaList, FaPlus, FaCog, FaSignOutAlt } from "react-icons/fa";
import "./Sidebar.css";

function Sidebar() {
  const navigate = useNavigate();
  const [loginStatus, setLoginStatus] = useState(JSON.parse(localStorage.getItem("loginStatus")));
  const handleLogout = () => {
    localStorage.setItem("loginStatus", false);
    localStorage.setItem('role', '');
    localStorage.setItem('userID', '');
    window.location.reload();
  };

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
    <div className="sidebar">
      <NavLink to="/" className="logo-link">
        <h1 className="logo">Melodies</h1>
      </NavLink>
      <nav className="menu">
        <h2>Menu</h2>
        <ul>
          <li>
            <NavLink to="/" className="link" activeclassname="active">
              <FaHome /> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/discover" className="link" activeclassname="active">
              <FaCompactDisc /> Discover
            </NavLink>
          </li>
          <li>
            <NavLink to="/albums" className="link" activeclassname="active">
              <FaMusic /> Albums
            </NavLink>
          </li>
          <li>
            <NavLink to="/artists" className="link" activeclassname="active">
              <FaMusic /> Artists
            </NavLink>
          </li>
        </ul>
        <h2>Library</h2>
        <ul>
          <li>
            <NavLink to="/recently-added" className="link" activeclassname="active">
              <FaClock /> Recently Added
            </NavLink>
          </li>
          <li>
            <NavLink to="/most-played" className="link" activeclassname="active">
              <FaClock /> Most played
            </NavLink>
          </li>
        </ul>
        <h2>Playlist and favorite</h2>
        <ul>
          <li>
            <NavLink to="/favorites" className="link" activeclassname="active">
              <FaHeart /> Your favorites
            </NavLink>
          </li>
          <li>
            <NavLink to="/playlist" className="link" activeclassname="active">
              <FaList /> Your playlist
            </NavLink>
          </li>
          <li>
            <NavLink to="/add-playlist" className="link" activeclassname="active">
              <FaPlus /> Add playlist
            </NavLink>
          </li>
        </ul>
        <h2>General</h2>
        <ul>
          <li>
            <NavLink to="/settings" className="link" activeclassname="active">
              <FaCog /> Setting
            </NavLink>
          </li>
          {loginStatus ? (
            <li>
              <button className="link logout" onClick={handleLogout}>
                <FaSignOutAlt /> Logout
              </button>
            </li>
          ) : null}
          {/* <li>
            <button className="link logout" onClick={handleLogout}>
              <FaSignOutAlt /> Logout
            </button>
          </li> */}
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
