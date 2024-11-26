import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaCompactDisc,
  FaMusic,
  FaClock,
  FaHeart,
  FaList,
  FaPlus,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import "./Sidebar.css";

function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Xóa thông tin đăng nhập khỏi localStorage
    localStorage.removeItem("userEmail");

    // Điều hướng về trang Home
    navigate("/");
  };

  return (
    <div className="sidebar">
      <NavLink to="/" className="logo-link">
        <h1 className="logo">Melodies</h1>
      </NavLink>
      <nav className="menu">
        <h2>Menu</h2>
        <ul>
          <li>
            <NavLink to="/" className="link" activeClassName="active">
              <FaHome /> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/discover" className="link" activeClassName="active">
              <FaCompactDisc /> Discover
            </NavLink>
          </li>
          <li>
            <NavLink to="/albums" className="link" activeClassName="active">
              <FaMusic /> Albums
            </NavLink>
          </li>
          <li>
            <NavLink to="/artists" className="link" activeClassName="active">
              <FaMusic /> Artists
            </NavLink>
          </li>
        </ul>
        <h2>Library</h2>
        <ul>
          <li>
            <NavLink
              to="/recently-added"
              className="link"
              activeClassName="active"
            >
              <FaClock /> Recently Added
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/most-played"
              className="link"
              activeClassName="active"
            >
              <FaClock /> Most played
            </NavLink>
          </li>
        </ul>
        <h2>Playlist and favorite</h2>
        <ul>
          <li>
            <NavLink to="/favorites" className="link" activeClassName="active">
              <FaHeart /> Your favorites
            </NavLink>
          </li>
          <li>
            <NavLink to="/playlist" className="link" activeClassName="active">
              <FaList /> Your playlist
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/add-playlist"
              className="link"
              activeClassName="active"
            >
              <FaPlus /> Add playlist
            </NavLink>
          </li>
        </ul>
        <h2>General</h2>
        <ul>
          <li>
            <NavLink to="/settings" className="link" activeClassName="active">
              <FaCog /> Setting
            </NavLink>
          </li>
          <li>
            <button className="link logout" onClick={handleLogout}>
              <FaSignOutAlt /> Logout
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
