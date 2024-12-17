import React from "react";
import AlbumInfo from "../Components/AlbumInfo/AlbumInfo";
import Sidebar from "../Components/Sidebar/Sidebar";
import AlbumsList from '../Components/AlbumsList/AlbumsList';
import Header from "../Components/Header/Header";
import { Routes, Route } from "react-router-dom";

function Albums() {
  return (
    <div>
      <Sidebar></Sidebar>
      {/* <AlbumInfo></AlbumInfo> */}
      <Header></Header>
      <AlbumsList></AlbumsList>
    </div>
  );
}

export default Albums;
