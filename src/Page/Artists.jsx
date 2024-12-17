import React from "react";
import Sidebar from "../Components/Sidebar/Sidebar";
import Header from "../Components/Header/Header";
import ArtistList from "../Components/ArtistList/ArtistList";

function Artists() {
  return (
    <div>
      <Sidebar></Sidebar>
      <Header></Header>
      <ArtistList></ArtistList>
    </div>
  );
}

export default Artists;
