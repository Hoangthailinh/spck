import React from "react";

import "./ArtistTitle.css";
export default function ArtistTitle(props) {
  const { setDisplayArtist } = props;
  console.log(typeof setDisplayArtist);

  return (
    <>
      <div className="artist-title">
        <div className="artist-title-header d-flex align-items-center justify-content-between">
          <i className="fa-solid fa-arrow-left" onClick={() => setDisplayArtist(false)} style={{cursor: 'pointer'}}></i>
          <div className="d-flex align-items-center gap-4">
            <a href="#share">Share</a>
            <a href="#about">About</a>
            <a href="#premium">Premium</a>
          </div>
        </div>
        <div className="artist-title-des">
          <p>Eminem</p>
        </div>
      </div>
    </>
  );
}
