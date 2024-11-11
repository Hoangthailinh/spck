import React from "react";
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
  return (
    <aside className="sidebar">
      <h1 className="logo">Melodies</h1>
      <nav className="menu">
        <h2>Menu</h2>
        <ul>
          <li className="active">
            <FaHome /> Home
          </li>
          <li>
            <FaCompactDisc /> Discover
          </li>
          <li>
            <a href=""><FaMusic /> Albums</a>
          </li>
          <li>
            <FaMusic /> Artists
          </li>
        </ul>
        <h2>Library</h2>
        <ul>
          <li>
            <FaClock /> Recently Added
          </li>
          <li>
            <FaClock /> Most played
          </li>
        </ul>
        <h2>Playlist and favorite</h2>
        <ul>
          <li>
            <FaHeart /> Your favorites
          </li>
          <li>
            <FaList /> Your playlist
          </li>
          <li>
            <FaPlus /> Add playlist
          </li>
        </ul>
        <h2>General</h2>
        <ul>
          <li>
            <FaCog /> Setting
          </li>
          <li className="logout">
            <FaSignOutAlt /> Logout
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
